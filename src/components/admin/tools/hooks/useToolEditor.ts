import { useState } from 'react';
import { doc, addDoc, updateDoc, collection } from 'firebase/firestore';
import { db } from '../../../../config/firebase';
import { Tool } from '../../../../types/tool';
import { ToolFormData } from '../types';
import { validateToolForm } from '../validation/toolValidation';

export function useToolEditor() {
  const [formData, setFormData] = useState<ToolFormData>({
    title: '',
    description: '',
    image: '',
    demoUrl: '',
    githubUrl: '',
    technologies: '',
    features: ''
  });

  const saveTool = async (id?: string) => {
    // Validate form data
    const validationError = validateToolForm(formData.title, formData.description, formData.image);
    if (validationError) {
      throw new Error(validationError);
    }

    try {
      const toolData: Partial<Tool> = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        image: formData.image.trim(),
        demoUrl: formData.demoUrl.trim() || undefined,
        githubUrl: formData.githubUrl.trim() || undefined,
        technologies: formData.technologies.split(',').map(tech => tech.trim()).filter(Boolean),
        features: formData.features.split('\n').map(feature => feature.trim()).filter(Boolean)
      };

      if (id) {
        // Update existing tool
        const toolRef = doc(db, 'tools', id);
        await updateDoc(toolRef, toolData);
      } else {
        // Create new tool
        await addDoc(collection(db, 'tools'), toolData);
      }
    } catch (error) {
      console.error('Error saving tool:', error);
      throw new Error('Failed to save tool. Please try again.');
    }
  };

  return {
    formData,
    setFormData,
    saveTool
  };
}