import React from 'react';
import '@/components/language/i18n.ts';
import { ThemeProvider } from "@/components/theme/theme-provider";
import { NavigationBar } from "@/components/navigation/navigation-bar";
import { useTranslation } from 'react-i18next';

export function App() {
    const { t } = useTranslation();

    return <div className="App">
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <div className="app w-full h-screen">
                <NavigationBar />
                {t('helloWorld')}
            </div>
        </ThemeProvider>
    </div>
}