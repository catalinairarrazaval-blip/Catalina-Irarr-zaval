export interface UserData {
  name: string;
  rut: string;
  role: string;
  school: string;
  phone: string;
}

export interface Course {
  dimension: DimensionKey;
  name: string;
  duration: number | string;
  webLink: string;
  descriptorLink?: string;
}

export type DimensionKey = 'convivencia_inclusion' | 'gestion_aprendizaje' | 'didactica_especifica' | 'liderazgo_escolar';

export interface Dimension {
    title: string;
    description: string;
    color: string;
}

export type AnalysisInputs = Record<DimensionKey, string>;

export interface Recommendation {
  courseName: string;
  justification: string;
}

export type Recommendations = Record<DimensionKey, Recommendation>;

export interface AnalysisQuestion {
  questionText: string;
  options: string[];
}

export type AnalysisQuestionSet = Record<DimensionKey, AnalysisQuestion[]>;