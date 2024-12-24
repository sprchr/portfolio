import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Wrench, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function Dashboard() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <button
              onClick={logout}
              className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/admin/blogs"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FileText className="text-blue-600" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Manage Blog Posts</h2>
                  <p className="text-gray-600">Create and manage blog posts</p>
                </div>
              </div>
            </Link>

            <Link
              to="/admin/tools"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Wrench className="text-green-600" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Manage Tools</h2>
                  <p className="text-gray-600">Create and manage developer tools</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}