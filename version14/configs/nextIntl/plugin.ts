import createNextIntlPlugin from "next-intl/plugin";

// note that these paths are from the root not where this file is located
const languageResolverPath = "./configs/nextIntl/getLocaleText.ts"
const pathToEnglishText = "./messages/en.json"

type CreateNextIntlPlugin = Parameters<typeof createNextIntlPlugin>[0];

const nextIntlConfiguration: CreateNextIntlPlugin = {
    requestConfig: languageResolverPath,
    experimental: {
        // gives typing to your json
        createMessagesDeclaration: pathToEnglishText
    }
}
export const NextIntlPlugin = createNextIntlPlugin(nextIntlConfiguration);



