import createNextIntlPlugin from "next-intl/plugin";
type CreateNextIntlPlugin = Parameters<typeof createNextIntlPlugin>[0];



// note that these paths are from the root not where this file is located
const localeTextImporterFilePath = "./src/libraries/nextIntl/localeTextImporter.ts"
const pathToEnglishText = "./src/libraries/nextIntl/locales/en.json"


const nextIntlConfiguration: CreateNextIntlPlugin = {
    requestConfig: localeTextImporterFilePath,
    experimental: {
        // gives typing to your json
        createMessagesDeclaration: pathToEnglishText
    }
}
export const NextIntlPlugin = createNextIntlPlugin(nextIntlConfiguration);



