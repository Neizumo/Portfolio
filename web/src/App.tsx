import React from 'react';
import { ThemeProvider } from "@/components/theme/theme-provider.tsx";
import { NavigationBar } from "@/components/navigation/navigation-bar.tsx";


export function App() {
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <div className="app w-full h-screen">
                <NavigationBar />

            </div>
        </ThemeProvider>
    );
}