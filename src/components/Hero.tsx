import React from 'react';
import { DEFAULT_PROFILE } from '../constants/defaults';
import ProfileImage from './hero/ProfileImage';
import ProfileInfo from './hero/ProfileInfo';
import HeroImage from './hero/HeroImage';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="flex flex-col items-center md:items-start mb-8">
              <ProfileImage
                src={DEFAULT_PROFILE.avatar}
                alt={DEFAULT_PROFILE.name}
              />
              <ProfileInfo name={DEFAULT_PROFILE.name} />
            </div>
            <p className="text-lg text-gray-600 mb-8">
             Experienced IT Professional with Demonstrated Success in Microsoft Technologies,UI Frameworks,Cloud Solutions, and AI Tools | Proven Record of Delivering Clear and Impactful Results.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Get in Touch
            </button>
          </div>
          <div className="flex-1">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}