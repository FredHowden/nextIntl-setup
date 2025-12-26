import { defineRouting } from 'next-intl/routing';


const localeRoutingConfiguration = {
    locales: ['en', 'de'],
    defaultLocale: 'en',
}

export const localeRouting = defineRouting(localeRoutingConfiguration)