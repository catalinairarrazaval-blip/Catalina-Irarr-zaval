import { Course, DimensionKey, AnalysisQuestionSet, Dimension } from './types';

export const COURSES: Course[] = [
  // Inclusión y Convivencia
  {
    dimension: 'convivencia_inclusion',
    name: 'Trastorno del espectro autista y déficit atencional: estrategias para potenciar el aprendizaje en el aula',
    duration: 20,
    webLink: 'https://www.aptus.org/producto/curso-estrategias-aula-inclusiva-tea-tdah/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2024/10/TEA_1_PR-v1.pdf',
  },
  {
    dimension: 'convivencia_inclusion',
    name: 'Convivencia escolar: Relaciones sanas para un mayor bienestar estudiantil',
    duration: 20,
    webLink: 'https://www.aptus.org/producto/convivencia-escolar-relaciones-sanas-para-un-mayor-bienestar-estudiantil/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2023/10/Descriptor-CCE_PR.pdf',
  },
  {
    dimension: 'convivencia_inclusion',
    name: 'Profesores jefe: Formando para aprender a convivir',
    duration: 20,
    webLink: 'https://www.aptus.org/producto/profesores-jefe-formando-para-aprender-a-convivir/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2023/10/Descriptor-CPJ_2_PR.pdf',
  },
  {
    dimension: 'convivencia_inclusion',
    name: 'Habilidades del profesor para la prevención y gestión de conflictos en la sala de clases',
    duration: 24,
    webLink: 'https://www.aptus.org/producto/habilidades-del-profesor-para-la-prevencion-y-gestion-de-conflictos-en-la-sala-de-clases/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2023/10/programa-habilidades-del-profesor-para-la-prevencion-y-gestion-de-conflictos-en-la-sala-de-clases.pdf',
  },
  {
    dimension: 'convivencia_inclusion',
    name: 'Acompañando las emociones: herramientas para la formación y contención de los estudiantes en el aula',
    duration: 20,
    webLink: 'https://www.aptus.org/producto/acompanamiento-emocional-aula/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2024/10/SEL_1_PR-v1-2.pdf',
  },
  {
    dimension: 'convivencia_inclusion',
    name: 'Aprendizaje para todos: cómo transformar nuestra escuela en un espacio inclusivo',
    duration: 20,
    webLink: 'https://www.aptus.org/producto/aprendizaje-para-todos-como-transformar-nuestra-escuela-en-un-espacio-inclusivo/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2025/08/EEI_1_PR.pdf',
  },
  // Gestión de aprendizaje
  {
    dimension: 'gestion_aprendizaje',
    name: 'Estrategias para gestionar la atención de los estudiantes durante la clase',
    duration: 20,
    webLink: 'https://www.aptus.org/producto/estrategias-para-gestionar-la-atencion-de-los-estudiantes-durante-la-clase/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2023/10/curso-estrategias-para-gestionar-la-atencion-de-los-estudiantes-durante-la-clase.pdf',
  },
  {
    dimension: 'gestion_aprendizaje',
    name: 'Uso de datos pedagógicos para la reenseñanza',
    duration: 24,
    webLink: 'https://www.aptus.org/producto/uso-de-datos-pedagogicos-para-la-reensenanza/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2023/10/Descriptor-UDP_2-PR-y-OL-V.3.pdf',
  },
  {
    dimension: 'gestion_aprendizaje',
    name: 'Metodologías para el desarrollo de aprendizaje activo de los estudiantes',
    duration: 20,
    webLink: 'https://www.aptus.org/producto/curso-aprendizaje-activo-estrategias-ensenanza/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2025/05/MAA_1_PR-v1.pdf',
  },
  {
    dimension: 'gestion_aprendizaje',
    name: 'Cómo construir instrumentos de evaluación para movilizar el aprendizaje',
    duration: 24,
    webLink: 'https://www.aptus.org/producto/como-construir-instrumentos-de-evaluacion-para-movilizar-el-aprendizaje/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2023/10/Descriptor-CIE_2_PR.pdf',
  },
  {
    dimension: 'gestion_aprendizaje',
    name: 'Estrategias y técnicas para la evaluación formativa en el aula',
    duration: 24,
    webLink: 'https://www.aptus.org/producto/estrategias-y-tecnicas-para-la-evaluacion-formativa-en-el-aula/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2023/10/Descriptor-TEF_2-PR-y-OL-V.3.pdf',
  },
  {
    dimension: 'gestion_aprendizaje',
    name: 'Planificación efectiva de la enseñanza',
    duration: 20,
    webLink: 'https://www.aptus.org/producto/planificacion-efectiva-de-la-ensenanza/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2023/10/Descriptor-PEF_3_PR_v2024.pdf',
  },
  {
    dimension: 'gestion_aprendizaje',
    name: 'Altas expectativas: ¿Cómo ayudamos a todos los estudiantes a alcanzar su máximo potencial?',
    duration: 20,
    webLink: 'https://www.aptus.org/producto/estrategias-para-crear-un-ambiente-de-altas-expectativas-que-facilite-el-aprendizaje-de-todos-los-estudiantes/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2025/09/AEE_PR-v1.pdf',
  },
  {
    dimension: 'gestion_aprendizaje',
    name: 'Estrategias para crear un ambiente que facilite el aprendizaje de los estudiantes en el aula',
    duration: 24,
    webLink: 'https://www.aptus.org/producto/estrategias-para-crear-un-ambiente-que-facilite-el-aprendizaje-de-los-estudiantes-en-el-aula/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2023/10/Descriptor-TSC_3_PR-v3-1.pdf',
  },
   {
    dimension: 'gestion_aprendizaje',
    name: 'Desconectar de las pantallas: estrategias de atención y vínculo en el aula.',
    duration: 20,
    webLink: 'https://www.aptus.org/producto/desconectar-de-las-pantallas-estrategias-de-atencion-y-vinculo-en-el-aula/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2025/10/PNT_PR-v1.-.pdf',
  },
  // Didáctica específica
  {
    dimension: 'didactica_especifica',
    name: 'Rezago Lector: Estrategias con foco en la comprensión lectora',
    duration: 20,
    webLink: 'https://www.aptus.org/producto/rezago-lector-estrategias-con-foco-en-la-comprension-lectora/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2023/10/Descriptor-RLC_1_PR-v2.pdf',
  },
  {
    dimension: 'didactica_especifica',
    name: 'Rezago Lector: Estrategias con foco en la adquisición de la lectura',
    duration: 20,
    webLink: 'https://www.aptus.org/producto/rezago-lector-estrategias-con-foco-en-la-adquisicion-de-la-lectura/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2023/10/Descriptor-RLL_1_PR-v2.pdf',
  },
  {
    dimension: 'didactica_especifica',
    name: 'Método COPISI para el desarrollo de operaciones matemáticas en enseñanza básica',
    duration: 24,
    webLink: 'https://www.aptus.org/producto/metodo-copisi-para-el-desarrollo-de-operaciones-matematicas-en-ensenanza-basica/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2023/10/programa-metodo-copisi-para-el-desarrollo-de-operaciones-matematicas-en-ensenanza-basica.pdf',
  },
  {
    dimension: 'didactica_especifica',
    name: 'Didáctica en Matemática: números y operaciones para enseñanza básica',
    duration: 20,
    webLink: 'https://www.aptus.org/producto/didactica-en-matematica-numeros-y-operaciones-para-ensenanza-basica/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2023/10/curso-didactica-en-matematica-numeros-y-operaciones-para-ensenanza-basica.pdf',
  },
  {
    dimension: 'didactica_especifica',
    name: 'Desarrollo del lenguaje en Educación Parvularia: Estrategias que marcan la diferencia',
    duration: 20,
    webLink: 'https://www.aptus.org/producto/desarrollo-del-lenguaje-en-educacion-parvularia-estrategias-que-marcan-la-diferencia/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2024/06/Descriptor-DLK_PR.pdf',
  },
  {
    dimension: 'didactica_especifica',
    name: 'Método Matte para la enseñanza de la lectura y escritura en primer año básico',
    duration: 24,
    webLink: 'https://www.aptus.org/producto/metodo-matte-para-la-ensenanza-de-la-lectura-y-escritura-en-primer-ano-basico/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2023/10/Descriptor-MME_2_PR-y-MME_3_OL-1.pdf',
  },
  {
    dimension: 'didactica_especifica',
    name: 'Estrategias para la enseñanza de fracciones y decimales',
    duration: 8,
    webLink: '',
    descriptorLink: undefined,
  },
  // Líderes pedagógicos
  {
    dimension: 'liderazgo_escolar',
    name: 'Gestión y desarrollo de una cultura escolar de altas expectativas',
    duration: 24,
    webLink: 'https://www.aptus.org/producto/gestion-y-desarrollo-de-una-cultura-escolar-de-altas-expectativas/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2023/10/Descriptor-CUL_1_PR-v2.pdf',
  },
  {
    dimension: 'liderazgo_escolar',
    name: 'Observación y retroalimentación para el desarrollo profesional docente',
    duration: 24,
    webLink: 'https://www.aptus.org/producto/observacion-y-retroalimentacion-para-el-desarrollo-profesional-docente/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2023/10/programa-observacion-y-retroalimentacion-para-el-desarrollo-profesional-docente.pdf',
  },
  {
    dimension: 'liderazgo_escolar',
    name: 'Gestión escolar basada en datos pedagógicos',
    duration: 24,
    webLink: 'https://www.aptus.org/producto/gestion-escolar-basada-en-datos-pedagogicos/',
    descriptorLink: 'https://storage.googleapis.com/aptus-storage-cl-www/2023/10/aptus-institucional-curso-gestion-escolar-basada-datos-pedagogicos.pdf',
  },
];

export const DIMENSIONS: Record<DimensionKey, Dimension> = {
  convivencia_inclusion: {
    title: 'Inclusión y Convivencia',
    description: 'Relacionado con la creación de un ambiente de aula seguro, respetuoso e inclusivo para todos los estudiantes.',
    color: '#22b2c1',
  },
  gestion_aprendizaje: {
    title: 'Gestión de Aprendizaje',
    description: 'Relacionado a planificación, evaluación, uso de datos y estrategias para gestionar el aula y motivar a los estudiantes.',
    color: '#8a3e91',
  },
  didactica_especifica: {
    title: 'Didáctica Específica',
    description: 'Relacionado a los retos que enfrentas en la enseñanza de una materia particular, como lectura, escritura, matemáticas, etc.',
    color: '#e0ca59',
  },
  liderazgo_escolar: {
    title: 'Líderes Pedagógicos',
    description: 'Si tienes un rol de liderazgo, relacionado a la gestión de equipos, cultura de altas expectativas y mejora de la escuela.',
    color: '#e8842f',
  },
};

export const ANALYSIS_QUESTIONS: AnalysisQuestionSet = {
  convivencia_inclusion: [
    {
      questionText: '¿Cuáles son tus principales desafíos en cuanto a convivencia e inclusión en el aula?',
      options: [
        'Manejo de conflictos y mediación entre estudiantes.',
        'Fomentar un ambiente de respeto y colaboración.',
        'Apoyar las necesidades socioemocionales de los estudiantes.',
        'Implementar estrategias para estudiantes con TEA o TDAH.',
        'Crear un aula verdaderamente inclusiva para todos los estilos de aprendizaje.',
      ],
    },
  ],
  gestion_aprendizaje: [
     {
      questionText: '¿En qué áreas de la gestión del aprendizaje buscas fortalecer tus competencias?',
      options: [
        'Construir mejores instrumentos de evaluación.',
        'Usar la evaluación formativa para retroalimentar de manera efectiva.',
        'Analizar y usar datos pedagógicos para la reenseñanza.',
        'Mejorar la planificación de mis clases.',
        'Captar y mantener la atención de los estudiantes.',
        'Fomentar altas expectativas en todos mis estudiantes.',
        'Implementar metodologías de aprendizaje más activas.',
      ],
    },
  ],
  didactica_especifica: [
    {
      questionText: '¿En qué didáctica específica necesitas más herramientas o estrategias?',
      options: [
        'Enseñar a leer y escribir en primer año básico (Método Matte).',
        'Apoyar a estudiantes con rezago en decodificación o comprensión lectora.',
        'Fomentar el desarrollo del lenguaje oral en Educación Parvularia.',
        'Enseñar operaciones matemáticas de forma concreta (Método COPISI).',
        'Mejorar la didáctica general de números, operaciones, fracciones y decimales.',
      ],
    },
  ],
  liderazgo_escolar: [
    {
      questionText: 'Como líder pedagógico, ¿cuáles son tus prioridades para el desarrollo de tu equipo y escuela?',
      options: [
        'Instalar y mantener una cultura de altas expectativas en la comunidad.',
        'Gestionar y utilizar datos pedagógicos para la toma de decisiones.',
        'Implementar un sistema efectivo de observación y retroalimentación de clases.',
      ],
    },
  ],
};