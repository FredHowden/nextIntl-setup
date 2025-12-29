import createNextIntlPlugin from "next-intl/plugin";
type CreateNextIntlPlugin = Parameters<typeof createNextIntlPlugin>[0];



// note that these paths are from the root not where this file is located
const languageResolverPath = "./src/libraries/nextIntl/getLocaleText.ts"
const pathToEnglishText = "./src/locales/en.json"


const nextIntlConfiguration: CreateNextIntlPlugin = {
    requestConfig: languageResolverPath,
    experimental: {
        // gives typing to your json
        createMessagesDeclaration: pathToEnglishText
    }
}
export const NextIntlPlugin = createNextIntlPlugin(nextIntlConfiguration);



