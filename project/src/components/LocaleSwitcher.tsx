'use client';

import { useTranslations } from 'next-intl';
import { localeRouting } from '@/libraries/nextIntl/localeRouting';

import { Locale } from 'next-intl';
import { ChangeEvent } from 'react';
import { usePathname, useRouter } from '@/libraries/nextIntl/localeAwareNavigationHelpers';
import { useParams } from 'next/navigation';



export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher');

    const router = useRouter();
    const pathToCurrentPage = usePathname();
    const ParamsOnCurrentPage = useParams();
    console.log(JSON.stringify(pathToCurrentPage));
    console.log(JSON.stringify(ParamsOnCurrentPage));


    const goToRequestedLocale = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedLocale = event.target.value as Locale;

        const PageOptionsToChange = { locale: selectedLocale }
        const routeWithCurrentParams = { pathname: pathToCurrentPage, params: ParamsOnCurrentPage };

        router.replace(routeWithCurrentParams, PageOptionsToChange);
    };

    return (
        <label className="relative text-gray-400">
            <select
                value={ParamsOnCurrentPage.locale}
                onChange={goToRequestedLocale}
                className="border rounded p-1"
            >
                {localeRouting.locales.map((locale) => (
                    <option key={locale} value={locale}>
                        {t('locale', { locale: locale })}
                    </option>
                ))}
            </select>
        </label>
    );
}
