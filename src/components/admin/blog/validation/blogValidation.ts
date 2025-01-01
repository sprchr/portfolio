import { BlogFormData } from '../types';

export function validateBlogForm(formData: BlogFormData): string | null {
  if (!formData.title.trim()) {
    return 'Title is required';
  }

  if (!formData.excerpt.trim()) {
    return 'Excerpt is required';
  }

  if (!formData.content.trim()) {
    return 'Content is required';
  }

  if (!formData.coverImage.trim()) {
    return 'Cover image URL is required';
  }

  try {
    new URL(formData.coverImage);
  } catch {
    return 'Invalid cover image URL';
  }

  return null;
}