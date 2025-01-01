import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { Tool } from '../../../types/tool';
import AdminLayout from '../shared/AdminLayout';
import ToolForm from './components/ToolForm';
import { useToolEditor } from './hooks/useToolEditor';
import LoadingSpinner from '../shared/LoadingSpinner';

export default function ToolEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { saveTool, formData, setFormData } = useToolEditor();

  useEffect(() => {
    const fetchTool = async () => {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, 'tools', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const tool = docSnap.data() as Tool;
          setFormData({
            title: tool.title,
            description: tool.description,
            image: tool.image,
            demoUrl: tool.demoUrl || '',
            githubUrl: tool.githubUrl || '',
            technologies: tool.technologies.join(', '),
            features: tool.features.join('\n')
          });
        } else {
          setError('Tool not found');
        }
      } catch (err) {
        console.error('Error fetching tool:', err);
        setError('Failed to load tool');
      } finally {
        setLoading(false);
      }
    };

    fetchTool();
  }, [id, setFormData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    try {
      setLoading(true);
      await saveTool(id);
      navigate('/admin/tools');
    } catch (err: any) {
      setError(err.message || 'Failed to save tool');
    } finally {
      setLoading(false);
    }
  };

  if (loading && id) {
    return <LoadingSpinner />;
  }

  return (
    <AdminLayout title={id ? 'Edit Tool' : 'Add New Tool'}>
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