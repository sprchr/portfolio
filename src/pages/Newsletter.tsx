import React from 'react';
import NewsletterForm from '../components/newsletter/NewsletterForm';

export default function NewsletterPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Newsletter</h1>
          <p className="text-gray-600 text-center mb-12">
            Stay up to date with the latest insights, tutorials, and tech news. 
            Subscribe to receive curated content directly in your inbox.
          </p>
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}