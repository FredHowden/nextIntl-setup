import createNextIntlPlugin from "next-intl/plugin";
type CreateNextIntlPlugin = Parameters<typeof createNextIntlPlugin>[0];



// note that these paths are from the root not where this file is located
const localeTextDeciderFilePath = "./src/libraries/nextIntl/localeTextDecider.ts"
const pathToEnglishText = "./src/libraries/nextIntl/locales/en.json"


export const nextIntlConfiguration: CreateNextIntlPlugin = {

    // path to file that decides which locale text to choose
    requestConfig: localeTextDeciderFilePath,
    experimental: {
        // gives typing to your json
        createMessagesDeclaration: pathToEnglishText
    }
}
