import React from 'react';
import { ToolFormData } from '../types';

interface ToolFormProps {
  formData: ToolFormData;
  onChange: (data: ToolFormData) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  loading: boolean;
}

export default function ToolForm({ formData, onChange, onSubmit, onCancel, loading }: ToolFormProps) {
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
          Description
        </label>
        <textarea
          required
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={formData.description}
          onChange={(e) => onChange({ ...formData, description: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Image URL
        </label>
        <input
          type="url"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={formData.image}
          onChange={(e) => onChange({ ...formData, image: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Demo URL (optional)
        </label>
        <input
          type="url"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={formData.demoUrl}
          onChange={(e) => onChange({ ...formData, demoUrl: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          GitHub URL (optional)
        </label>
        <input
          type="url"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={formData.githubUrl}
          onChange={(e) => onChange({ ...formData, githubUrl: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Technologies (comma-separated)
        </label>
        <input
          type="text"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={formData.technologies}
          onChange={(e) => onChange({ ...formData, technologies: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Features (one per line)
        </label>
        <textarea
          required
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={formData.features}
          onChange={(e) => onChange({ ...formData, features: e.target.value })}
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
          {loading ? 'Saving...' : 'Save Tool'}
        </button>
      </div>
    </form>
  );
}