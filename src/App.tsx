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
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/*" element={
            <AdminRoute>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/blogs" element={<AdminBlogList />} />
                <Route path="/blogs/new" element={<BlogEditor />} />
                <Route path="/blogs/edit/:id" element={<BlogEditor />} />
                <Route path="/tools" element={<AdminToolList />} />
                <Route path="/tools/new" element={<ToolEditor />} />
                <Route path="/tools/edit/:id" element={<ToolEditor />} />
              </Routes>
            </AdminRoute>
          } />
          <Route path="/admin/login" element={<Login />} />

          {/* Public Routes */}
          <Route path="/" element={
            <>
              <Header />
              <main>
                <Hero />
                <Contact />
              </main>
              <Footer />
            </>
          } />
          <Route path="/blog" element={
            <>
              <Header />
              <BlogList />
              <Footer />
            </>
          } />
          <Route path="/blog/:slug" element={
            <>
              <Header />
              <BlogPost />
              <Footer />
            </>
          } />
          <Route path="/tools" element={
            <>
              <Header />
              <ToolsList />
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}