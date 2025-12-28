
import type { GetRequestConfigParams } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { localeRouting } from './localeRouting';

async function getLocaleText(props: GetRequestConfigParams) {
    const requestedLocale = await props.requestLocale;
    const variableName = await props.locale; // IDK what props.locale does.

    const availableLocales = localeRouting.locales

    // Note that hasLocale() gives true even when it is not exact match
    // meaning that the requestedLocale can still not exist despite hasLocale returning true.
    const requestedLocaleIsAvailable = hasLocale(availableLocales, requestedLocale)

    if (requestedLocaleIsAvailable) {
        const requestedLocaleText = await import(`../../locales/${requestedLocale}.json`);

        return {
            locale: requestedLocale,
            messages: requestedLocaleText.default
        };

    } else {
        const fallbackLocale = localeRouting.defaultLocale
        const fallbackLocaleText = await import(`../../locales/${fallbackLocale}.json`);
        return {
            locale: fallbackLocale,
            messages: fallbackLocaleText.default
        };

    }
}



export default getRequestConfig(getLocaleText);
