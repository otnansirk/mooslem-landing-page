import { DOCS_NAVIGATION_EN, DOCS_NAVIGATION_ID } from "./constant"

export const getDocsNavigationByLocale = (locale: string) => {

    if (locale === 'id') {
        return DOCS_NAVIGATION_ID
    } else {
        return DOCS_NAVIGATION_EN
    }
}