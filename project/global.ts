import { possibleLocales } from '@/libraries/nextIntl/localeRouting';
import messages from '@/libraries/nextIntl/locales/en.json';

declare module 'next-intl' {
    interface AppConfig {
        Locale: possibleLocales;
        Messages: typeof messages;
    }
}
