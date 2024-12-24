import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-6">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-600 text-sm">
          © {currentYear} Sivaprasad Chennareddy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}