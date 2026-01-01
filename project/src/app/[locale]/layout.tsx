import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { localeRouting } from '@/libraries/nextIntl/localeRouting';
import Navigation from '@/components/Navigation';

import type { ReactNode } from 'react';

import '@/styles/globals.css';

type possibleLocales = (typeof localeRouting.locales)[number];

type LocaleLayoutProps = {
    children: ReactNode;
    params: Promise<{ locale: possibleLocales }>;
};


export function generateStaticParams() {
    return localeRouting.locales.map((locale) => ({ locale }));
}


export async function generateMetadata({ params }: LocaleLayoutProps) {
    const { locale } = await params;
    const translatedText = await getTranslations({ locale: locale, namespace: 'LocaleLayout' });

    return {
        title: translatedText('title')
    };
}


export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
    const { locale } = await params;
    
    return (
        <html className="h-full" lang={locale}>
            <body className={'flex h-full flex-col'}>
                <NextIntlClientProvider>
                    <Navigation />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
