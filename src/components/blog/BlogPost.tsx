import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { formatDate } from '../../utils/dateUtils';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { BlogPost as BlogPostType } from '../../types/blog';
import LoadingSpinner from '../admin/shared/LoadingSpinner';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const q = query(collection(db, 'blogs'), where('slug', '==', slug));
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
          setError('Post not found');
          return;
        }

        const postData = {
          id: querySnapshot.docs[0].id,
          ...querySnapshot.docs[0].data()
        } as BlogPostType;
        
        setPost(postData);
      } catch (error) {
        console.error('Error fetching post:', error);
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-red-600">{error || 'Post not found'}</h2>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </button>
        
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-xl mb-8"
        />

        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-medium text-gray-900">{post.author.name}</p>
              <p className="text-sm text-gray-500">{formatDate(post.date)}</p>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}