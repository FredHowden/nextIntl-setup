
import type { GetRequestConfigParams } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { localeRouting } from './localeRouting';

async function getLocaleData(props: GetRequestConfigParams) {
    const requestedLocale = await props.requestLocale;
    const requestedLocale2 = await props.locale; // IDK what this does.

    const availableLocales = localeRouting.locales
    const requestedLocaleIsAvailable = hasLocale(availableLocales, requestedLocale)

    if (requestedLocaleIsAvailable) {
        const requestedLocaleText = await import(`../../messages/${requestedLocale}.json`);

        return {
            locale: requestedLocale,
            messages: requestedLocaleText.default
        };

    } else {
        const fallbackLocale = localeRouting.defaultLocale
        const fallbackLocaleText = await import(`../../messages/${fallbackLocale}.json`);
        return {
            locale: fallbackLocale,
            messages: fallbackLocaleText.default
        };

    }
}



export default getRequestConfig(getLocaleData);

