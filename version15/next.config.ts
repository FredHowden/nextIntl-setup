import { NextConfig } from "next";
import { NextIntlPlugin } from "./libraries/nextIntl/plugin";




const config: NextConfig = {
    reactStrictMode: true,
};

export default NextIntlPlugin(config);
