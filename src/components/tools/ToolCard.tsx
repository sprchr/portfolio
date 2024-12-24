import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Tool } from '../../types/tool';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src={tool.image}
        alt={tool.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{tool.title}</h3>
          <div className="flex gap-2">
            {tool.demoUrl && (
              <a
                href={tool.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
                title="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
            {tool.githubUrl && (
              <a
                href={tool.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
                title="View Source"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{tool.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {tool.technologies?.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {tool.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}