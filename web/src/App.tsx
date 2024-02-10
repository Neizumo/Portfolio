import React from 'react';
import { ThemeProvider } from "@/components/theme/theme-provider.tsx";
import { ModeToggle } from "@/components/theme/mode-toggle.tsx";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="app">

                <ModeToggle />
            </div>
        </ThemeProvider>
    );
}

export default App;
