import { defineRouting } from 'next-intl/routing';

const localeRoutingConfiguration = {
    locales: ['en', 'de'],
    defaultLocale: 'en',
} as const;

export const localeRouting = defineRouting(localeRoutingConfiguration);


export type AvailableLocales = (typeof localeRouting.locales)[number];

