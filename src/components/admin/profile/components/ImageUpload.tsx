import React, { useRef, useState } from 'react';
import { Camera } from 'lucide-react';
import { uploadImage } from '../utils/storage';

interface ImageUploadProps {
  currentImage: string;
  onImageSelected: (url: string) => void;
}

export function ImageUpload({ currentImage, onImageSelected }: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadImage(file);
      onImageSelected(url);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="relative">
      <img
        src={currentImage}
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover"
      />
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50"
        disabled={uploading}
      >
        <Camera size={20} />
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}