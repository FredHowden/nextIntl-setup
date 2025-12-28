'use client';

import { useTranslations } from 'next-intl';
import { localeRouting } from '@/../libraries/nextIntl/localeRouting';

import { useParams } from 'next/navigation';
import { Locale } from 'next-intl';
import { ChangeEvent } from 'react';
import { usePathname, useRouter } from '@/../libraries/nextIntl/navigate';


export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher');

    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    console.log(JSON.stringify(router));
    console.log(JSON.stringify(pathname));
    console.log(JSON.stringify(params));


    const goToRequestedLocale = (event: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = event.target.value as Locale;
        const targetRoute = { pathname, params };
        const navigationOptions = { locale: nextLocale };

        router.replace(targetRoute, navigationOptions);
    };

    return (
        <label className="relative text-gray-400">
            <select
                value={params.locale}
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
