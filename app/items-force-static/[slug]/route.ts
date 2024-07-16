import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-static';

export async function GET(
    request: NextRequest,
    { params }: { params: { slug: string } }
) {
    const slug = params.slug // 'a', 'b', or 'c'

    return NextResponse.json({ slug })
}
