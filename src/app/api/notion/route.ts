// app/api/notion/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const pageId = req.nextUrl.searchParams.get("pageId");

    if (!pageId) {
        return NextResponse.json({ error: "Missing pageId" }, { status: 400 });
    }

    const notionRes = await fetch(`https://notion-api.splitbee.io/v1/page/${pageId}`);
    const data = await notionRes.json();

    return NextResponse.json(data);
}
