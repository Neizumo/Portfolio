// src/components/language/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                translation: {
                    helloWorld: "Hello World!",
                    navigationBarTranslate: {
                        "About": 'About',
                        "Activities": 'Activities',
                        "Skills": 'Skills',
                        "Projects": 'Projects',
                        "Formation": 'Formation',
                        "Experiences": 'Experiences',
                        "Contact": 'Contact'
                    }
                },
            },
            pt: {
                translation: {
                    helloWorld: "Olá Mundo!",
                    navigationBarTranslate: {
                        "About": 'Sobre',
                        "Activities": 'Atividades',
                        "Skills": 'Habilidades',
                        "Projects": 'Projetos',
                        "Formation": 'Formação',
                        "Experiences": 'Experiences',
                        "Contact": 'Contato'
                    }
                },
            },
        },
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage', 'cookie'],
        },
    });

export default i18n;
