export function validateToolForm(title: string, description: string, image: string): string | null {
    if (!title.trim()) {
      return 'Title is required';
    }
  
    if (!description.trim()) {
      return 'Description is required';
    }
  
    if (!image.trim()) {
      return 'Image URL is required';
    }
  
    try {
      new URL(image);
    } catch {
      return 'Invalid image URL';
    }
  
    return null;
  }