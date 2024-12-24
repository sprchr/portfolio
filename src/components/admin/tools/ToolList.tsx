import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useToolList } from './hooks/useToolList';
import AdminLayout from '../shared/AdminLayout';
import LoadingSpinner from '../shared/LoadingSpinner';
import ToolListItem from './components/ToolListItem';

export default function AdminToolList() {
  const { tools, loading, error, deleteTool } = useToolList();

  if (loading) {
    return <LoadingSpinner />;
  }

  const AddButton = (
    <Link
      to="/admin/tools/new"
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
    >
      <Plus size={20} />
      New Tool
    </Link>
  );

  return (
    <AdminLayout title="Manage Tools" action={AddButton}>
      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Technologies
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tools.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                    No tools found. Create your first tool by clicking the "New Tool" button.
                  </td>
                </tr>
              ) : (
                tools.map((tool) => (
                  <ToolListItem
                    key={tool.id}
                    tool={tool}
                    onDelete={deleteTool}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}