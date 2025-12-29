import { localeRouting } from '@/libraries/nextIntl/localeRouting';
import { createNavigation } from 'next-intl/navigation';

// these properties still confuse me.
export const { Link, getPathname, redirect, usePathname, useRouter } = createNavigation(localeRouting);
