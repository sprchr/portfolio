import { useState } from 'react';
import { doc, addDoc, updateDoc, collection } from 'firebase/firestore';
import { db } from '../../../../config/firebase';
import { BlogPost } from '../../../../types/blog';
import { BlogFormData } from '../types';
import { validateBlogForm } from '../validation/blogValidation';
import { DEFAULT_AUTHOR } from '../../../../constants/defaults';
import { generateSlug } from '../../../../utils/slugUtils';

export function useBlogEditor() {
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    excerpt: '',
    content: '',
    coverImage: '',
    tags: ''
  });

  const saveBlog = async (id?: string) => {
    const validationError = validateBlogForm(formData);
    if (validationError) {
      throw new Error(validationError);
    }

    try {
      const blogData: Partial<BlogPost> = {
        title: formData.title.trim(),
        slug: generateSlug(formData.title),
        excerpt: formData.excerpt.trim(),
        content: formData.content.trim(),
        coverImage: formData.coverImage.trim(),
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
        author: DEFAULT_AUTHOR
      };

      if (!id) {
        blogData.date = new Date().toISOString();
        await addDoc(collection(db, 'blogs'), blogData);
      } else {
        const blogRef = doc(db, 'blogs', id);
        await updateDoc(blogRef, blogData);
      }
    } catch (error) {
      console.error('Error saving blog:', error);
      throw new Error('Failed to save blog post. Please try again.');
    }
  };

  return {
    formData,
    setFormData,
    saveBlog
  };
}