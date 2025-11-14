import React from 'react';
import { Course } from '../types';
import { LinkIcon, PdfIcon } from './Icons';

interface Props {
  dimensionTitle: string;
  dimensionColor: string;
  course: Course;
  justification: string;
}

const CourseCard: React.FC<Props> = ({ dimensionTitle, dimensionColor, course, justification }) => {
  return (
    <div 
        className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col transition-transform hover:scale-[1.02] duration-300"
        style={{ borderTop: `5px solid ${dimensionColor}` }}
    >
      <div className="p-6">
        <h3 
            className="text-sm font-semibold uppercase tracking-wide"
            style={{ color: dimensionColor }}
        >
            {dimensionTitle}
        </h3>
        <h4 className="text-xl font-bold text-slate-800 mt-1">{course.name}</h4>
        
        <div 
            className="mt-4 p-4 bg-slate-50 border-l-4 rounded-r-md"
            style={{ borderColor: dimensionColor }}
        >
          <p className="text-slate-700 italic">"{justification}"</p>
        </div>
      </div>
      
      <div className="mt-auto p-6 bg-slate-50 border-t border-slate-200">
        <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
          <span className="font-semibold">Duración:</span>
          <span>{course.duration} horas</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          {course.webLink && (
            <a
              href={course.webLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors"
              style={{ backgroundColor: dimensionColor,  ringColor: dimensionColor }}
            >
              <LinkIcon />
              Página del Curso
            </a>
          )}
          {course.descriptorLink && (
            <a
              href={course.descriptorLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors"
               style={{ ringColor: dimensionColor }}
            >
              <PdfIcon />
              Ver Descriptor
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;