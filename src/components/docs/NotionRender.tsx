"use client";

import { FormattedBlock, FormattedOutput, notionFormatFromRaw } from "@/utils/notion";
import { useEffect, useState } from "react";
import Image from "next/image";

type NotionRenderType = {
    pageId: string;
}

const NotionRender = (props: NotionRenderType) => {
    const [content, setContent] = useState<FormattedOutput>();

    useEffect(() => {
        (async () => {
            const response = await fetch("https://notion-api.splitbee.io/v1/page/" + props.pageId)
            const data = await response.json();
            setContent(notionFormatFromRaw(data));
        })()
    }, [props.pageId]);

    return <>
        {content?.blocks.map((block) => (
            <RenderBlocks
                key={block.id}
                block={block}
            />
        ))}
    </>
};

export const RenderBlocks: React.FC<{ block: FormattedBlock, customPageUrl?: () => void }> = ({ block }) => {
    const { type, properties, id, format } = block;
    const [showIframe, setShowIframe] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowIframe(true), 500);
        return () => clearTimeout(timer); // Clean up
    }, []);

    switch (type) {
        case "text":
            return <p className="text-md md:text-lg my-4" dangerouslySetInnerHTML={{ __html: properties?.title ?? "" }} />;
        case "header":
            return <h1 className="text-3xl font-bold my-4" dangerouslySetInnerHTML={{ __html: properties?.title ?? "" }} />;
        case "sub_header":
            return <h2 className="text-2xl font-semibold my-4" dangerouslySetInnerHTML={{ __html: properties?.title ?? "" }} />;
        case "sub_sub_header":
            return <h3 className="text-xl font-medium my-4" dangerouslySetInnerHTML={{ __html: properties?.title ?? "" }} />;
        case "bulleted_list":
            return <ul className="list-disc ml-6 my-1 text-md">
                <li>
                    <div dangerouslySetInnerHTML={{ __html: properties?.title ?? "" }} />
                    <ul className="list-inside" dangerouslySetInnerHTML={{ __html: properties?.children }} />
                </li>
            </ul>
                ;
        case "numbered_list":
            return <li className="list-decimal ml-6 my-1" dangerouslySetInnerHTML={{ __html: properties?.title ?? "" }} />;
        case "page":
            return <a href={`notion/${id}`} className="list-decimal ml-6">{properties.title}</a>;
        case "divider":
            return <hr className="border-gray-600 my-5" />;
        case "video":
            return <div className="relative w-full my-8" style={{ paddingTop: `54.5%` }}>
                {
                    showIframe &&
                    <iframe
                        src={format?.display_source as string || ""}
                        title={format?.link_title as string || ""}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-lg shadow"
                    />
                }
            </div>
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