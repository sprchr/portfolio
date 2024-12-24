import { BlogPost } from '../types/blog';
import { DEFAULT_AUTHOR } from '../constants/defaults';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    slug: 'getting-started-with-react-typescript',
    excerpt: 'Learn how to set up a new React project with TypeScript and best practices for type safety.',
    content: `
      # Getting Started with React and TypeScript

      TypeScript has become the standard choice for React applications...
      
      ## Why TypeScript?
      
      TypeScript adds static typing to JavaScript, which helps catch errors early...
      
      ## Setting Up Your Project
      
      First, create a new project using Vite...
    `,
    coverImage: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800',
    date: '2024-03-15',
    author: DEFAULT_AUTHOR,
    tags: ['React', 'TypeScript', 'Web Development']
  },
  {
    id: '2',
    title: 'Modern CSS Techniques',
    slug: 'modern-css-techniques',
    excerpt: 'Explore modern CSS features and techniques for building beautiful user interfaces.',
    content: `
      # Modern CSS Techniques
      
      CSS has evolved significantly in recent years...
      
      ## CSS Grid Layout
      
      Grid Layout has revolutionized how we structure web pages...
      
      ## CSS Custom Properties
      
      Variables in CSS open up new possibilities...
    `,
    coverImage: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800',
    date: '2024-03-10',
    author: DEFAULT_AUTHOR,
    tags: ['CSS', 'Web Design', 'Frontend']
  }
];