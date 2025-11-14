
import React, { useState } from 'react';
import { UserData, AnalysisInputs, Recommendations, DimensionKey } from './types';
import { DIMENSIONS } from './constants';
import UserInfoForm from './components/UserInfoForm';
import AnalysisSection from './components/AnalysisSection';
import ResultsDisplay from './components/ResultsDisplay';
import { getCourseRecommendations } from './services/geminiService';
import LoadingSpinner from './components/LoadingSpinner';
import IntroSection from './components/IntroSection';

const App: React.FC = () => {
  const [step, setStep] = useState<'intro' | 'userInfo' | 'analysis' | 'results'>('intro');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [analysisInputs, setAnalysisInputs] = useState<AnalysisInputs>({
    convivencia_inclusion: '',
    gestion_aprendizaje: '',
    didactica_especifica: '',
    liderazgo_escolar: '',
  });
  const [recommendations, setRecommendations] = useState<Recommendations | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleIntroNext = () => {
    setStep('userInfo');
  };

  const handleUserSubmit = (data: UserData) => {
    setUserData(data);
    setStep('analysis');
  };

  const handleAnalysisSubmit = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await getCourseRecommendations(analysisInputs);
      setRecommendations(result);
      setStep('results');
    } catch (err) {
      setError('Hubo un error al analizar tus necesidades. Por favor, intenta de nuevo.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleReset = () => {
    setStep('intro');
    setUserData(null);
    setAnalysisInputs({
      convivencia_inclusion: '',
      gestion_aprendizaje: '',
      didactica_especifica: '',
      liderazgo_escolar: '',
    });
    setRecommendations(null);
    setError(null);
    setIsLoading(false);
  };

  const AptusLogo: React.FC = () => (
    <svg width="120" height="40" viewBox="0 0 162 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.833 33.5847V4.9917H19.261C23.015 4.9917 26.04 5.7877 28.336 7.3797C30.655 8.9487 31.814 11.2017 31.814 14.1387C31.814 16.3147 31.146 18.1517 29.81 19.6497C28.497 21.1247 26.68 22.1217 24.359 22.6407L32.659 33.5847H23.51L16.106 22.9517H10.833V33.5847ZM16.106 18.3357C17.768 18.3357 19.116 17.9007 20.15 17.0307C21.207 16.1377 21.735 15.0267 21.735 13.6977C21.735 12.3687 21.207 11.2577 20.15 10.3647C19.116 9.4717 17.768 9.0257 16.106 9.0257H10.833V18.3357H16.106Z" fill="#00356C"/>
      <path d="M42.2239 33.5847V4.9917H47.4019V33.5847H42.2239Z" fill="#00356C"/>
      <path d="M60.2933 33.8987C56.6333 33.8987 53.6413 33.1027 51.3173 31.5107C48.9933 29.8957 47.8313 27.6427 47.8313 24.7507C47.8313 21.8357 48.9933 19.5827 51.3173 17.9907C53.6413 16.3757 56.6333 15.5687 60.2933 15.5687C62.2453 15.5687 63.9873 15.8327 65.5193 16.3607V10.1507C63.9873 9.4967 62.2453 9.1697 60.2933 9.1697C56.9913 9.1697 54.1913 9.9427 51.8953 11.4907C49.6223 13.0157 48.4853 15.1537 48.4853 17.9047V33.5847H43.1113V4.9917H48.4853V7.2187C50.5293 5.7907 52.8873 5.0767 55.5593 5.0767C56.9303 5.0767 58.2103 5.2577 59.3983 5.6197L57.6563 10.6547C56.9583 10.4507 56.2833 10.3487 55.6313 10.3487C53.6333 10.3487 51.9233 10.9847 50.5013 12.2567C49.1023 13.5057 48.4033 15.2097 48.4033 17.3687V22.2857C48.4033 23.0117 48.5443 23.6707 48.8263 24.2627C49.1313 24.8317 49.5303 25.3157 50.0233 25.7147C50.5393 26.0907 51.1303 26.3967 51.7963 26.6327C52.4853 26.8457 53.2203 26.9517 53.9993 26.9517H65.5193V22.3937C63.9873 23.0477 62.2453 23.3747 60.2933 23.3747C58.3873 23.3747 56.8453 22.9137 55.6673 21.9917C54.5123 21.0467 53.9353 19.8377 53.9353 18.3627V17.3687H65.5193V33.5847H60.2933V33.8987Z" fill="#00356C"/>
      <path d="M70.9392 33.5847V4.9917H86.7322V9.0257H76.1172V16.3607H85.4412V20.3947H76.1172V29.5507H87.0462V33.5847H70.9392Z" fill="#00356C"/>
      <path d="M102.662 33.8987C97.9423 33.8987 94.1203 32.4957 91.1963 29.6897C88.2953 26.8607 86.8453 23.1657 86.8453 18.6047C86.8453 14.0437 88.2953 10.3487 91.1963 7.5197C94.1203 4.6677 97.9423 3.2417 102.662 3.2417C107.382 3.2417 111.204 4.6677 114.128 7.5197C117.052 10.3487 118.514 14.0437 118.514 18.6047C118.514 23.1657 117.052 26.8607 114.128 29.6897C111.204 32.4957 107.382 33.8987 102.662 33.8987ZM102.662 29.8647C105.481 29.8647 107.721 28.9427 109.383 27.0987C111.068 25.2317 111.911 22.5937 111.911 19.1847V18.0247C111.911 14.6157 111.068 11.9777 109.383 10.1097C107.721 8.2427 105.481 7.3087 102.662 7.3087C99.8433 7.3087 97.6033 8.2427 95.9413 10.1097C94.2793 11.9777 93.4483 14.6157 93.4483 18.0247V19.1847C93.4483 22.5937 94.2793 25.2317 95.9413 27.0987C97.6033 28.9427 99.8433 29.8647 102.662 29.8647Z" fill="#00356C"/>
      <path d="M136.257 24.2097C136.257 27.2347 135.213 29.6917 133.125 31.5807C131.06 33.4467 128.375 34.3807 125.073 34.3807C121.68 34.3807 118.971 33.4237 116.94 31.5107C114.932 29.5747 113.928 27.0477 113.928 23.9307V4.9917H119.106V23.6427C119.106 25.4327 119.648 26.8357 120.732 27.8517C121.839 28.8447 123.235 29.3407 124.918 29.3407C128.532 29.3407 130.34 27.2787 130.34 23.1507V4.9917H135.518V23.0597L136.257 24.2097Z" fill="#00356C"/>
      <path d="M161.028 24.2097C161.028 27.2347 159.984 29.6917 157.896 31.5807C155.831 33.4467 153.146 34.3807 149.844 34.3807C146.451 34.3807 143.742 33.4237 141.711 31.5107C139.703 29.5747 138.699 27.0477 138.699 23.9307V4.9917H143.877V23.6427C143.877 25.4327 144.419 26.8357 145.503 27.8517C146.61 28.8447 148.006 29.3407 149.689 29.3407C153.303 29.3407 155.111 27.2787 155.111 23.1507V4.9917H160.289V23.0597L161.028 24.2097Z" fill="#00356C"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <header className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          <AptusLogo />
          <h1 className="text-xl md:text-2xl font-bold text-sky-800">
            Recomendador de Cursos
          </h1>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-8">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {isLoading ? (
            <div className="flex flex-col items-center justify-center text-center h-96">
                <LoadingSpinner />
                <p className="text-xl font-semibold text-sky-700 mt-4">Analizando tus necesidades...</p>
                <p className="text-slate-500">Esto puede tardar unos segundos.</p>
            </div>
        ) : (
          <>
            {step === 'intro' && <IntroSection onNext={handleIntroNext} />}
            {step === 'userInfo' && <UserInfoForm onSubmit={handleUserSubmit} />}
            {step === 'analysis' && userData && (
              <AnalysisSection 
                inputs={analysisInputs} 
                onInputChange={setAnalysisInputs}
                onSubmit={handleAnalysisSubmit}
                userName={userData.name}
              />
            )}
            {step === 'results' && recommendations && userData && (
                <ResultsDisplay 
                    recommendations={recommendations} 
                    userName={userData.name}
                    onReset={handleReset}
                />
            )}
          </>
        )}
      </main>

      <footer className="text-center p-4 text-slate-500 text-sm mt-8">
        <p>&copy; {new Date().getFullYear()} Aptus. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
