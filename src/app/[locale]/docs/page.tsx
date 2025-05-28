import { getDocsNavigationByLocale } from "@/utils/docs-navigation";
import NotionLayout from "@/components/docs/NotionLayout"
import NotionRender from "@/components/docs/NotionRender"

const Docs = async ({ params }: { params: { slug: string, locale: string } }) => {
    const { locale } = await params;
    const pageId = getDocsNavigationByLocale(locale ?? "en").find(item => item.href === `/docs/greetings`)?.pageId ?? "";

    return (
        <NotionLayout>
            <NotionRender pageId={pageId} />
        </NotionLayout>
    )
}

export default Docs