import { Tool } from '../types/tool';

export const tools: Tool[] = [
  {
    id: '1',
    title: 'Code Snippet Generator',
    description: 'A tool that generates formatted code snippets with syntax highlighting for various programming languages.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
    demoUrl: 'https://code-snippet-generator.demo',
    githubUrl: 'https://github.com/yourusername/code-snippet-generator',
    technologies: ['React', 'TypeScript', 'Prism.js'],
    features: [
      'Syntax highlighting for 20+ languages',
      'Customizable themes',
      'Copy to clipboard functionality',
      'Export as image'
    ]
  },
  {
    id: '2',
    title: 'API Testing Workbench',
    description: 'A comprehensive API testing tool with request builder, response viewer, and environment management.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800',
    demoUrl: 'https://api-testing-workbench.demo',
    githubUrl: 'https://github.com/yourusername/api-testing-workbench',
    technologies: ['React', 'Redux', 'Axios'],
    features: [
      'Request builder with method selection',
      'Headers and params management',
      'Environment variables',
      'Response preview with formatting'
    ]
  },
  {
    id: '3',
    title: 'Database Schema Designer',
    description: 'Visual database schema design tool with real-time SQL generation and relationship mapping.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    demoUrl: 'https://db-schema-designer.demo',
    githubUrl: 'https://github.com/yourusername/db-schema-designer',
    technologies: ['React', 'TypeScript', 'SVG'],
    features: [
      'Drag and drop interface',
      'Relationship visualization',
      'SQL export',
      'Schema validation'
    ]
  }
];