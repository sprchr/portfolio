import { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../../config/firebase';
import { Tool } from '../../../../types/tool';

export function useToolList() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTools = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'tools'));
      const fetchedTools = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Tool[];
      setTools(fetchedTools);
      setError(null);
    } catch (err) {
      console.error('Error fetching tools:', err);
      setError('Failed to fetch tools');
    } finally {
      setLoading(false);
    }
  };

  const deleteTool = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this tool?')) {
      return false;
    }

    try {
      await deleteDoc(doc(db, 'tools', id));
      setTools(tools.filter(tool => tool.id !== id));
      return true;
    } catch (err) {
      console.error('Error deleting tool:', err);
      setError('Failed to delete tool');
      return false;
    }
  };

  useEffect(() => {
    fetchTools();
  }, []);

  return { tools, loading, error, deleteTool, refreshTools: fetchTools };
}