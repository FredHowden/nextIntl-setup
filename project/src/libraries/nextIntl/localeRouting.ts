import { defineRouting } from 'next-intl/routing';


type DefineRouting = Parameters<typeof defineRouting>[0];

const localeRoutingConfiguration: DefineRouting = {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    pathnames: {}
};

export const localeRouting = defineRouting(localeRoutingConfiguration);
