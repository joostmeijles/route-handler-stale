import { NextResponse } from "next/server";

export const revalidate = 30;
export const dynamic = 'force-static';

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    const slug = params.slug // 'a', 'b', or 'c'

    return NextResponse.json({ slug })
}
