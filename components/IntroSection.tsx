
import React from 'react';

interface Props {
  onNext: () => void;
}

const IntroSection: React.FC<Props> = ({ onNext }) => {
  return (
    <div className="max-w-3xl mx-auto text-center bg-white p-8 md:p-12 rounded-xl shadow-lg border border-slate-200">
      <h2 className="text-3xl font-bold text-sky-800 mb-4">
        Bienvenido/a al Recomendador de cursos Aptus 2025
      </h2>
      <p className="text-slate-600 text-lg mb-4">
        Este instrumento busca identificar los principales desafíos que enfrenta tu establecimiento en materia de convivencia, gestión de aprendizajes, didáctica y liderazgo.
      </p>
      <p className="text-slate-600 text-lg mb-8">
        Al finalizar, recibirás una recomendación de cursos Aptus que pueden apoyar el fortalecimiento de tu gestión y la de tu equipo docente. Además, tendrás la oportunidad de agendar una reunión con uno de nuestros consultores para profundizar en los resultados.
      </p>
      <button
        onClick={onNext}
        className="bg-sky-600 text-white font-bold py-3 px-8 rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-300 text-lg"
      >
        Comenzar
      </button>
    </div>
  );
};

export default IntroSection;
