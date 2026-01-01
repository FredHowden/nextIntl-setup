import { localeRouting } from '@/libraries/nextIntl/localeRouting';
import { createNavigation } from 'next-intl/navigation';

// This is needed to automatically have a link to the desired page
// without having to specify in the string the locale
const localeAwareNavigation = createNavigation(localeRouting);
export const { Link, getPathname, redirect, usePathname, useRouter } = localeAwareNavigation
