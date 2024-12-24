import React from 'react';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
  action?: React.ReactNode;
}

export default function AdminLayout({ children, title, action }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-6">
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