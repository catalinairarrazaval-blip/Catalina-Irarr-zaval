import React from 'react';
import { Recommendations, DimensionKey } from '../types';
import { DIMENSIONS, COURSES } from '../constants';
import CourseCard from './CourseCard';

interface Props {
  recommendations: Recommendations;
  userName: string;
  onReset: () => void;
}

const ResultsDisplay: React.FC<Props> = ({ recommendations, userName, onReset }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-sky-800 mb-2">Recomendaciones para {userName}</h2>
        <p className="text-lg text-slate-600">Basado en tu análisis, hemos seleccionado los siguientes cursos que podrían potenciar tu desarrollo profesional.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {(Object.keys(recommendations) as DimensionKey[]).map(key => {
          const recommendation = recommendations[key];
          const course = COURSES.find(c => c.name === recommendation.courseName);
          if (!course) return null;

          return (
            <CourseCard
              key={key}
              dimensionTitle={DIMENSIONS[key].title}
              dimensionColor={DIMENSIONS[key].color}
              course={course}
              justification={recommendation.justification}
            />
          );
        })}
      </div>

       <div className="mt-12 text-center bg-white p-8 rounded-xl shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-sky-800">¿Quieres profundizar en tus resultados?</h3>
            <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
                Agenda una reunión con uno de nuestros consultores para conversar sobre tus resultados y explorar un plan de formación a la medida de tu establecimiento.
            </p>
            <a 
              href="https://calendar.app.google/swcWhtGusk26RiSy7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-6 inline-block bg-emerald-500 text-white font-bold py-3 px-8 rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-300"
            >
                Agendar Reunión
            </a>
        </div>

        <div className="mt-12 text-center">
            <button
            onClick={onReset}
            className="bg-slate-600 text-white font-bold py-3 px-8 rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors duration-300"
            >
            Realizar un Nuevo Análisis
            </button>
      </div>
    </div>
  );
};

export default ResultsDisplay;