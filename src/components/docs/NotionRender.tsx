import { FormattedBlock, notionFormatFromRaw } from "@/utils/notion";
import Image from "next/image";

type NotionRenderType = {
    pageId: string;
}

const NotionRender = async (props: NotionRenderType) => {

    const response = await fetch("https://notion-api.splitbee.io/v1/page/" + props.pageId)
    const data = await response.json();
    const content = notionFormatFromRaw(data);

    return <>
        {content.blocks.map((block) => (
            <RenderBlocks
                key={block.id}
                block={block}
            />
        ))}
    </>
};

export const RenderBlocks: React.FC<{ block: FormattedBlock, customPageUrl?: () => void }> = async ({ block }) => {
    const { type, properties, id } = block;

    switch (type) {
        case "text":
            return <p className="text-md md:text-lg my-4" dangerouslySetInnerHTML={{ __html: properties?.title ?? "" }} />;
        case "header":
            return <h1 className="text-3xl font-bold my-4">{properties.title}</h1>;
        case "sub_header":
            return <h2 className="text-2xl font-semibold my-4">{properties.title}</h2>;
        case "sub_sub_header":
            return <h3 className="text-xl font-medium my-4">{properties.title}</h3>;
        case "bulleted_list":
            return <li className="list-disc ml-6 my-1">{properties.title}</li>;
        case "numbered_list":
            return <li className="list-decimal ml-6 my-1">{properties.title}</li>;
        case "page":
            return <a href={`notion/${id}`} className="list-decimal ml-6">{properties.title}</a>;
        case "image":
            const src = properties.source;

            if (src.includes("attachment")) {
                return <Image
                    src={`https://www.notion.so/image/${src}?table=block&id=${id}`}
                    alt={`https://www.notion.so/image/${src}?table=block&id=${id}`}
                    className="max-w-full rounded-lg shadow" />;
            } else {
                return <Image
                    src={src}
                    alt={src}
                    className="max-w-full rounded-lg shadow" />;
            }
        default:
            return <div className="text-gray-500">[Unsupported blocks: {type}]</div>;
    }
};

export default NotionRender;