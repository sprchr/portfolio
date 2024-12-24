import { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../../config/firebase';
import { BlogPost } from '../../../../types/blog';

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      const fetchedPosts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogPost[];
      setPosts(fetchedPosts);
      setError(null);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('Failed to fetch blog posts');
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deleteDoc(doc(db, 'blogs', id));
        setPosts(posts.filter(post => post.id !== id));
        return true;
      } catch (err) {
        console.error('Error deleting post:', err);
        setError('Failed to delete post');
        return false;
      }
    }
    return false;
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, loading, error, deletePost, refreshPosts: fetchPosts };
}