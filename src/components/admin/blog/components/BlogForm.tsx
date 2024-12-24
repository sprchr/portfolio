import React from 'react';
import { BlogFormData } from '../types';

interface BlogFormProps {
  formData: BlogFormData;
  onChange: (data: BlogFormData) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  loading: boolean;
}

export default function BlogForm({ formData, onChange, onSubmit, onCancel, loading }: BlogFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Title
        </label>
        <input
          type="text"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={formData.title}
          onChange={(e) => onChange({ ...formData, title: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Excerpt
        </label>
        <textarea
          required
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={formData.excerpt}
          onChange={(e) => onChange({ ...formData, excerpt: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Content (Markdown)
        </label>
        <textarea
          required
          rows={10}
          className="w-full px-3 py-2 border border-gray-300 rounded-md font-mono"
          value={formData.content}
          onChange={(e) => onChange({ ...formData, content: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Cover Image URL
        </label>
        <input
          type="url"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={formData.coverImage}
          onChange={(e) => onChange({ ...formData, coverImage: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tags (comma-separated)
        </label>
        <input
          type="text"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={formData.tags}
          onChange={(e) => onChange({ ...formData, tags: e.target.value })}
        />
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save Post'}
        </button>
      </div>
    </form>
  );
}