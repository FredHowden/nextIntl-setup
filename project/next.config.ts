import { NextConfig } from "next";
import { nextIntlConfiguration } from "@/libraries/nextIntl/next-intl.config";
import createNextIntlPlugin from "next-intl/plugin";



const config: NextConfig = {
    reactStrictMode: true,
};

const NextIntlPlugin = createNextIntlPlugin(nextIntlConfiguration);

export default NextIntlPlugin(config);
