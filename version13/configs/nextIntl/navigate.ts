import { localeRouting } from '@/../configs/nextIntl/localeRouting';
import { createNavigation } from 'next-intl/navigation';


export const { Link, getPathname, redirect, usePathname, useRouter } = createNavigation(localeRouting);
