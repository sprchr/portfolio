import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { LogOut } from 'lucide-react';

export default function AdminHeader() {
  const { logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link
              to="/admin"
              className={`text-sm ${isActive('/admin') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Dashboard
            </Link>
            <Link
              to="/admin/blogs"
              className={`text-sm ${isActive('/admin/blogs') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Blogs
            </Link>
            <Link
              to="/admin/tools"
              className={`text-sm ${isActive('/admin/tools') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Tools
            </Link>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 text-red-600 hover:text-red-700"
          >
            <LogOut size={18} />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
}