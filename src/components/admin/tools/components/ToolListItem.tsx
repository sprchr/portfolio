import React from 'react';
import { Link } from 'react-router-dom';
import { Edit, Trash2 } from 'lucide-react';
import { Tool } from '../../../../types/tool';

interface ToolListItemProps {
  tool: Tool;
  onDelete: (id: string) => Promise<boolean>;
}

export default function ToolListItem({ tool, onDelete }: ToolListItemProps) {
  return (
    <tr>
      <td className="px-6 py-4">
        <div className="text-sm font-medium text-gray-900">
          {tool.title}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-wrap gap-2">
          {tool.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </td>
      <td className="px-6 py-4 text-right">
        <div className="flex justify-end gap-2">
          <Link
            to={`/admin/tools/edit/${tool.id}`}
            className="text-blue-600 hover:text-blue-800"
          >
            <Edit size={18} />
          </Link>
          <button
            onClick={() => onDelete(tool.id)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}