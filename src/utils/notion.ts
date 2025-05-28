
type BlockType = 'page' | 'text' | 'sub_sub_header' | string;

interface BlockValue {
    id: string;
    type: BlockType;
    content?: string[];
    properties?: {
        title?: [string][];
    };
    parent_id: string;
    parent_table: string;
    format: Record<string, string | number>; // Format can be any additional properties, adjust as needed
}

interface RawData {
    [key: string]: {
        value: BlockValue;
    };
}

export interface FormattedBlock {
    id: string;
    type: BlockType;
    properties: Record<string, string>;
    parent_id: string;
    parent_table: string;
    format: Record<string, string | number>; // Format can be any additional properties, adjust as needed
}

export interface FormattedOutput {
    pageTitle: string;
    blocks: FormattedBlock[];
}

type RichTextItem = [string, string[][]?];


function parseRichText(richText: RichTextItem[]): string {
    return richText.map(([text, styles]) => {
        if (styles && styles.some(styleArr => styleArr.includes('b'))) {
            return `<strong>${text}</strong>`;
        }
        if (styles && styles.some(styleArr => styleArr.includes('i'))) {
            return `<em>${text}</em>`;
        }
        return text;
    }).join('');
}
export const notionFormatFromRaw = (rawData: RawData): FormattedOutput => {
    const mainPage = Object.values(rawData).find(
        (entry) => entry.value.type === 'page' && entry.value.content
    );

    if (!mainPage || !mainPage.value.content) {
        throw new Error("Main page with content not found.");
    }

    const contentIds = mainPage.value.content;

    const blocks: FormattedBlock[] = contentIds
        .map((id) => {
            const block = rawData[id]?.value;
            if (!block) return null;

            const flattenedProperties: Record<string, string> = {};

            if (block.type === "bulleted_list" && block.content) {
                const childrenHTML = block.content
                    .map(childId => {
                        const child = rawData[childId]?.value;
                        if (!child || !child.properties?.title) return '';
                        return `<li>${parseRichText(child.properties.title as RichTextItem[])}</li>`;
                    })
                    .join('');

                flattenedProperties["children"] = `${childrenHTML}`;

                // Optionally: parse the bullet list title itself too
                if (block.properties?.title) {
                    flattenedProperties["title"] = parseRichText(block.properties.title as RichTextItem[]);
                }

            } else if (block.properties) {
                for (const [key, value] of Object.entries(block.properties)) {
                    if (key === 'title' && Array.isArray(value)) {
                        flattenedProperties[key] = parseRichText(value as RichTextItem[]);
                    } else {
                        // Merge nested array
                        flattenedProperties[key] = value
                            .map((arr: string[]) => (Array.isArray(arr) && typeof arr[0] === 'string' ? arr[0] : ''))
                            .join('');
                    }
                }
            }

            return {
                id: block.id,
                type: block.type,
                properties: flattenedProperties,
                parent_id: block.parent_id,
                parent_table: block.parent_table,
                format: block.format
            };
        })
        .filter((block): block is FormattedBlock => block !== null);

    const pageTitle =
        (mainPage.value.properties?.title?.[0]?.[0]) ?? "Untitled Page";

    return {
        pageTitle,
        blocks
    };
}