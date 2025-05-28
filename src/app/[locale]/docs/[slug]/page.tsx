import NotionLayout from "@/components/docs/NotionLayout";
import NotionRender from "@/components/docs/NotionRender"
import { getDocsNavigationByLocale } from "@/utils/docs-navigation";

const DocsDetail = async ({ params }: { params: { slug: string, locale: string } }) => {
    const { slug, locale } = await params;
    const pageId = getDocsNavigationByLocale(locale ?? "en").find(item => item.href === `/docs/${slug}`)?.pageId ?? "";

    return (
        <NotionLayout>
            <NotionRender pageId={pageId} />
        </NotionLayout>
    )
}

export default DocsDetail