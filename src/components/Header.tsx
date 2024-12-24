import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="flex gap-6">
              <Link 
                to="/" 
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Home
              </Link>
              <Link 
                to="/tools" 
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Tools
              </Link>
              <Link 
                to="/blog" 
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Blog
              </Link>
            </div>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com" className="text-gray-600 hover:text-gray-900 transition">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900 transition">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" className="text-gray-600 hover:text-gray-900 transition">
              <Twitter size={20} />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-600 hover:text-gray-900 transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}