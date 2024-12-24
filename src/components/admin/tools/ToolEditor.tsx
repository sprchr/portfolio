import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { Tool } from '../../../types/tool';
import AdminLayout from '../shared/AdminLayout';
import ToolForm from './components/ToolForm';

export default function ToolEditor() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    demoUrl: '',
    githubUrl: '',
    technologies: '',
    features: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const newTool: Partial<Tool> = {
        title: formData.title,
        description: formData.description,
        image: formData.image,
        demoUrl: formData.demoUrl || undefined,
        githubUrl: formData.githubUrl || undefined,
        technologies: formData.technologies.split(',').map(tech => tech.trim()),
        features: formData.features.split('\n').filter(feature => feature.trim())
      };

      await addDoc(collection(db, 'tools'), newTool);
      navigate('/admin/tools');
    } catch (err) {
      console.error('Error adding tool:', err);
      setError('Failed to create tool');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout title="Add New Tool">
      <div className="max-w-2xl mx-auto">
        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        <div className="bg-white rounded-lg shadow p-6">
          <ToolForm
            formData={formData}
            onChange={setFormData}
            onSubmit={handleSubmit}
            onCancel={() => navigate('/admin/tools')}
            loading={loading}
          />
        </div>
      </div>
    </AdminLayout>
  );
}