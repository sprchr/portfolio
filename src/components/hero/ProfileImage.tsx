import React from 'react';

interface ProfileImageProps {
  src: string;
  alt: string;
}

export default function ProfileImage({ src, alt }: ProfileImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mb-6"
    />
  );
}