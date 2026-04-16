import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from '../locales/en.json';
import ta from '../locales/ta.json';
import te from '../locales/te.json';
import hi from '../locales/hi.json';

type Language = 'en' | 'ta' | 'te' | 'hi';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  languages: { code: Language; name: string; native: string }[];
}

const translations: Record<Language, typeof en> = {
  en,
  ta,
  te,
  hi,
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguageState(savedLanguage);
    }
    setIsLoaded(true);
  }, []);

  const setLanguage = (lang: Language) => {
    if (translations[lang]) {
      setLanguageState(lang);
      localStorage.setItem('language', lang);
    }
  };

  const getNestedValue = (obj: any, path: string): string => {
    return path.split('.').reduce((current, prop) => current?.[prop], obj) || path;
  };

  const t = (key: string): string => {
    return getNestedValue(translations[language], key);
  };

  const languages = [
    { code: 'en' as Language, name: 'English', native: 'English' },
    { code: 'ta' as Language, name: 'Tamil', native: 'தமிழ்' },
    { code: 'te' as Language, name: 'Telugu', native: 'తెలుగు' },
    { code: 'hi' as Language, name: 'Hindi', native: 'हिंदी' },
  ];

  if (!isLoaded) {
    return <>{children}</>;
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, languages }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};
