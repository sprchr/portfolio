import React from 'react';
import { BlogPost } from '../../types/blog';
import { formatDate } from '../../utils/dateUtils';

interface BlogCardProps {
  post: BlogPost;
  onClick: (slug: string) => void;
}

export default function BlogCard({ post, onClick }: BlogCardProps) {
  return (
    <article 
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-[1.02]"
      onClick={() => onClick(post.slug)}
    >
      <img
        src={post.coverImage}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium text-gray-900">{post.author.name}</p>
            <p className="text-sm text-gray-500">{formatDate(post.date)}</p>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
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
    </article>
  );
}