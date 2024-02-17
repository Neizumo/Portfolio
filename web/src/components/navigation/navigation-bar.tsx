import * as React from "react";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "@/components/language/language-switcher";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

export function NavigationBar() {
    const { t } = useTranslation();

    const navItems = [
        { key: 'About', to: '/about', label: 'navigationBarTranslate.About' },
        { key: 'Activities', to: '/activities', label: 'navigationBarTranslate.Activities' },
        { key: 'Skills', to: '/skills', label: 'navigationBarTranslate.Skills' },
        { key: 'Projects', to: '/projects', label: 'navigationBarTranslate.Projects' },
        { key: 'Formation', to: '/formation', label: 'navigationBarTranslate.Formation' },
        { key: 'Experiences', to: '/experiences', label: 'navigationBarTranslate.Experiences' },
        // Adicione mais itens conforme necessário
    ];

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="w-full shadow-lg flex items-center justify-around h-16">
                <div>
                    <Code2/>
                </div>
                <NavigationMenu>
                    <NavigationMenuList>
                        {navItems.map(({ key, to, label }) => (
                            <NavigationMenuItem key={key} asChild>
                                <Link to={to}>
                                    {/* Use a função `t` para buscar a tradução da label */}
                                    <Button variant="ghost">{t(label)}</Button>
                                </Link>
                            </NavigationMenuItem>
                        ))}
                        {/* Exemplo para o item 'Contact', adaptado ao seu esquema */}
                        <NavigationMenuItem asChild>
                            <Link to="/contact">
                                <Button>{t('navigationBarTranslate.Contact')}</Button>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div>
                    <ModeToggle/>
                    <LanguageSwitcher/>
                </div>
            </div>
        </Suspense>
    );
}
