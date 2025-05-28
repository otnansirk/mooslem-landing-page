import NotionLayout from "@/components/docs/NotionLayout";
import NotionRender from "@/components/docs/NotionRender";
import { getDocsNavigationByLocale } from "@/utils/docs-navigation";

interface PageProps {
  params: {
    slug: string;
    locale: string;
  };
}

const DocsDetail = async ({ params }: PageProps) => {
  const { slug, locale } = params;

  const docs = await getDocsNavigationByLocale(locale ?? "en"); // ← if async
  const pageId = docs.find(item => item.href === `/docs/${slug}`)?.pageId ?? "";

  return (
    <NotionLayout>
      <NotionRender pageId={pageId} />
    </NotionLayout>
  );
};

export default DocsDetail;
