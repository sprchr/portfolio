import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import AdminRoute from './components/admin/AdminRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Contact from './components/Contact';
import BlogList from './components/blog/BlogList';
import BlogPost from './components/blog/BlogPost';
import ToolsList from './components/tools/ToolsList';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import AdminBlogList from './components/admin/blog/BlogList';
import BlogEditor from './components/admin/blog/BlogEditor';
import AdminToolList from './components/admin/tools/ToolList';
import ToolEditor from './components/admin/tools/ToolEditor';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={
                <main>
                  <Hero />
                  <Contact />
                </main>
              } />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/tools" element={<ToolsList />} />
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin" element={
                <AdminRoute>
                  <Dashboard />
                </AdminRoute>
              } />
              <Route path="/admin/blogs" element={
                <AdminRoute>
                  <AdminBlogList />
                </AdminRoute>
              } />
              <Route path="/admin/blogs/new" element={
                <AdminRoute>
                  <BlogEditor />
                </AdminRoute>
              } />
              <Route path="/admin/tools" element={
                <AdminRoute>
                  <AdminToolList />
                </AdminRoute>
              } />
              <Route path="/admin/tools/new" element={
                <AdminRoute>
                  <ToolEditor />
                </AdminRoute>
              } />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}