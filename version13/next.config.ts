import { NextConfig } from "next";
import { NextIntlPlugin } from "./configs/nextIntl/plugin";




const config: NextConfig = {
    reactStrictMode: true,
};

export default NextIntlPlugin(config);
