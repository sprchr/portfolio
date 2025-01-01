import React from 'react';
import AdminHeader from './AdminHeader';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
  action?: React.ReactNode;
}

export default function AdminLayout({ children, title, action }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">{title}</h1>
            {action}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}