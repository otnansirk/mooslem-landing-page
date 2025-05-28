import NotionLayout from "@/components/docs/NotionLayout";
import NotionRender from "@/components/docs/NotionRender";
import { getDocsNavigationByLocale } from "@/utils/docs-navigation";

interface PageProps {
    params: Promise<{
        slug: string;
        locale: string;
    }>;
}

const DocsDetail = async ({ params }: PageProps) => {
    const { slug, locale } = await params;

    const docs = getDocsNavigationByLocale(locale ?? "en"); // ← if async
    const pageId = docs.find(item => item.href === `/docs/${slug}`)?.pageId ?? "";

    return (
        <NotionLayout>
            <NotionRender pageId={pageId} />
        </NotionLayout>
    );
};

export default DocsDetail;
