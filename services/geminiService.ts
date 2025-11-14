import { GoogleGenAI, Type } from '@google/genai';
import { AnalysisInputs, Recommendations, DimensionKey } from '../types';
import { COURSES, DIMENSIONS } from '../constants';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const courseListToString = (dimension: DimensionKey) => {
  return COURSES.filter(course => course.dimension === dimension)
    .map(course => `- "${course.name}"`)
    .join('\n');
};

export const getCourseRecommendations = async (inputs: AnalysisInputs): Promise<Recommendations> => {
  const model = 'gemini-2.5-flash';

  const prompt = `
    Analiza las siguientes necesidades de formación de un docente, basadas en sus respuestas a un cuestionario, y recomienda el curso más adecuado para cada una de las cuatro dimensiones.

    **Respuestas/Necesidades seleccionadas por el Docente:**
    1.  **${DIMENSIONS.convivencia_inclusion.title}:** ${inputs.convivencia_inclusion || 'No seleccionó necesidades en esta dimensión.'}
    2.  **${DIMENSIONS.gestion_aprendizaje.title}:** ${inputs.gestion_aprendizaje || 'No seleccionó necesidades en esta dimensión.'}
    3.  **${DIMENSIONS.didactica_especifica.title}:** ${inputs.didactica_especifica || 'No seleccionó necesidades en esta dimensión.'}
    4.  **${DIMENSIONS.liderazgo_escolar.title}:** ${inputs.liderazgo_escolar || 'No seleccionó necesidades en esta dimensión.'}

    **Cursos Disponibles por Dimensión (Debes elegir uno de la lista para cada dimensión):**

    *   **Dimensión ${DIMENSIONS.convivencia_inclusion.title}:**
        ${courseListToString('convivencia_inclusion')}

    *   **Dimensión ${DIMENSIONS.gestion_aprendizaje.title}:**
        ${courseListToString('gestion_aprendizaje')}

    *   **Dimensión ${DIMENSIONS.didactica_especifica.title}:**
        ${courseListToString('didactica_especifica')}

    *   **Dimensión ${DIMENSIONS.liderazgo_escolar.title}:**
        ${courseListToString('liderazgo_escolar')}

    Para cada dimensión, si el docente ha seleccionado necesidades, elige el curso que mejor responda a ellas. Si no seleccionó ninguna, recomienda el curso que consideres más fundamental o introductorio para esa área.
    Proporciona una justificación breve y clara (máximo 30 palabras en español) para cada recomendación, explicando por qué ese curso es el más pertinente según las opciones marcadas.
    Tu respuesta debe ser únicamente el objeto JSON.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            convivencia_inclusion: {
              type: Type.OBJECT,
              properties: {
                courseName: { type: Type.STRING },
                justification: { type: Type.STRING },
              },
            },
            gestion_aprendizaje: {
              type: Type.OBJECT,
              properties: {
                courseName: { type: Type.STRING },
                justification: { type: Type.STRING },
              },
            },
            didactica_especifica: {
              type: Type.OBJECT,
              properties: {
                courseName: { type: Type.STRING },
                justification: { type: Type.STRING },
              },
            },
            liderazgo_escolar: {
              type: Type.OBJECT,
              properties: {
                courseName: { type: Type.STRING },
                justification: { type: Type.STRING },
              },
            },
          },
        },
      },
    });

    const jsonText = response.text.trim();
    const result = JSON.parse(jsonText) as Recommendations;
    return result;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get recommendations from Gemini API.");
  }
};
