import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { Tool } from '../../types/tool';
import ToolsIntro from './ToolsIntro';
import ToolCard from './ToolCard';
import LoadingSpinner from '../admin/shared/LoadingSpinner';

export default function ToolsList() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'tools'));
        const fetchedTools = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Tool[];
        setTools(fetchedTools);
      } catch (err) {
        console.error('Error fetching tools:', err);
        setError('Failed to load tools');
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <ToolsIntro />
        
        {error ? (
          <div className="text-center text-red-600">
            {error}
          </div>
        ) : tools.length === 0 ? (
          <div className="text-center text-gray-600">
            No tools available yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}