import React from 'react';

interface ProfileInfoProps {
  name: string;
}

export default function ProfileInfo({ name }: ProfileInfoProps) {
  return (
    <div className="text-center md:text-left">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{name}</h2>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Software Engineering Lead
        <span className="block text-blue-600">Building Digital Experiences</span>
      </h1>
    </div>
  );
}