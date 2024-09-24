import React, { useEffect } from 'react';
import Cookies from 'js-cookie';

export type Language = 'en' | 'km';

// interface Translations {
//   [key: string]: {
//     welcome: string;
//     changeLanguage: string;
//   };
// }

// const translations: Translations = {
//   en: {
//     welcome: "Welcome",
//     changeLanguage: "Change to Khmer"
//   },
//   km: {
//     welcome: "សូមស្វាគមន៍",
//     changeLanguage: "ប្តូរទៅជាភាសាអង់គ្លេស"
//   }
// };

interface LanguageSwitcherProps {
  language: Language;
  onLanguageChange: (newLanguage: Language) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ language, onLanguageChange }) => {
  useEffect(() => {
    const savedLanguage = Cookies.get('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'km')) {
      onLanguageChange(savedLanguage);
    }
  }, [onLanguageChange]);

  return (
    <div>
      {/* {/* <h1>{translations[language].welcome}</h1> */}
      <p>Current language: {language}</p> 
    </div>
  );
};

export const toggleLanguage = (currentLanguage: Language): Language => {
  const newLanguage: Language = currentLanguage === 'en' ? 'km' : 'en';
  Cookies.set('language', newLanguage);
  return newLanguage;
};