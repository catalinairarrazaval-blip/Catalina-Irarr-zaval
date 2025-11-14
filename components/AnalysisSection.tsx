import React, { useState, useEffect } from 'react';
import { AnalysisInputs, DimensionKey } from '../types';
import { DIMENSIONS, ANALYSIS_QUESTIONS } from '../constants';

interface Props {
  inputs: AnalysisInputs;
  onInputChange: React.Dispatch<React.SetStateAction<AnalysisInputs>>;
  onSubmit: () => void;
  userName: string;
}

type Selections = Record<DimensionKey, string[]>;

const AnalysisSection: React.FC<Props> = ({ inputs, onInputChange, onSubmit, userName }) => {
  const [selections, setSelections] = useState<Selections>({
    convivencia_inclusion: [],
    gestion_aprendizaje: [],
    didactica_especifica: [],
    liderazgo_escolar: [],
  });

  const [currentStep, setCurrentStep] = useState(0);
  const dimensionKeys = Object.keys(DIMENSIONS) as DimensionKey[];
  const currentDimensionKey = dimensionKeys[currentStep];
  const currentDimension = DIMENSIONS[currentDimensionKey];
  const isLastStep = currentStep === dimensionKeys.length - 1;

  useEffect(() => {
    const newInputs: AnalysisInputs = {
      convivencia_inclusion: selections.convivencia_inclusion.join('. '),
      gestion_aprendizaje: selections.gestion_aprendizaje.join('. '),
      didactica_especifica: selections.didactica_especifica.join('. '),
      liderazgo_escolar: selections.liderazgo_escolar.join('. '),
    };
    onInputChange(newInputs);
  }, [selections, onInputChange]);

  const handleCheckboxChange = (dimension: DimensionKey, option: string) => {
    setSelections(prev => {
      const currentSelection = prev[dimension];
      const newSelection = currentSelection.includes(option)
        ? currentSelection.filter(item => item !== option)
        : [...currentSelection, option];
      return { ...prev, [dimension]: newSelection };
    });
  };
  
  const handleNext = () => {
      if (!isLastStep) {
          setCurrentStep(prev => prev + 1);
      }
  };

  const handleBack = () => {
      if(currentStep > 0) {
          setCurrentStep(prev => prev - 1);
      }
  };

  const isAtLeastOneSelected = (Object.values(selections) as string[][]).some(arr => arr.length > 0);

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-slate-200">
      <h2 className="text-2xl font-bold text-sky-800 mb-2">Análisis de Necesidades</h2>
      <p className="text-slate-600 mb-6">Hola {userName}, selecciona las opciones que mejor representen tus necesidades en cada dimensión. Esto nos ayudará a darte la mejor recomendación.</p>
      
      {/* Progress Bar */}
      <div className="w-full bg-slate-200 rounded-full h-2.5 mb-8">
        <div 
            className="h-2.5 rounded-full transition-all duration-500" 
            style={{ 
                width: `${((currentStep + 1) / dimensionKeys.length) * 100}%`,
                backgroundColor: currentDimension.color
            }}
        ></div>
      </div>
      
      <div className="min-h-[400px]">
        <div key={currentDimensionKey} className="border-l-4 pl-6" style={{ borderColor: currentDimension.color }}>
          <h3 className="text-2xl font-semibold text-slate-800 mb-1">{currentDimension.title}</h3>
          <p className="text-sm text-slate-500 mb-6">{currentDimension.description}</p>
          <div className="space-y-6">
            {ANALYSIS_QUESTIONS[currentDimensionKey].map((q, qIndex) => (
              <div key={qIndex}>
                <p className="font-semibold text-slate-700 mb-3 text-lg">{q.questionText}</p>
                <div className="space-y-2">
                  {q.options.map((option, oIndex) => (
                    <label key={oIndex} className="flex items-center space-x-3 p-3 rounded-md hover:bg-slate-100 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={selections[currentDimensionKey].includes(option)}
                        onChange={() => handleCheckboxChange(currentDimensionKey, option)}
                        className="h-5 w-5 rounded border-slate-300 focus:ring-0 focus:ring-offset-0"
                        style={{ accentColor: currentDimension.color }}
                        aria-labelledby={`option-${currentDimensionKey}-${qIndex}-${oIndex}`}
                      />
                      <span id={`option-${currentDimensionKey}-${qIndex}-${oIndex}`} className="text-slate-800">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center">
        <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="bg-slate-200 text-slate-700 font-bold py-2 px-6 rounded-md hover:bg-slate-300 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            Anterior
        </button>

        {!isLastStep ? (
            <button
                onClick={handleNext}
                className="text-white font-bold py-2 px-6 rounded-md hover:opacity-90 transition-opacity duration-300"
                style={{ backgroundColor: DIMENSIONS[dimensionKeys[currentStep + 1]].color }}
            >
                Siguiente
            </button>
        ) : (
            <button
            onClick={onSubmit}
            disabled={!isAtLeastOneSelected}
            className="bg-sky-600 text-white font-bold py-3 px-6 rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-300 text-lg disabled:bg-slate-400 disabled:cursor-not-allowed"
            aria-disabled={!isAtLeastOneSelected}
            >
            Analizar y Obtener Recomendaciones
            </button>
        )}
      </div>
       {isLastStep && !isAtLeastOneSelected && (
            <p className="text-center text-sm text-red-500 mt-2" aria-live="polite">Selecciona al menos una opción en todo el cuestionario para poder analizar.</p>
        )}
    </div>
  );
};

export default AnalysisSection;
