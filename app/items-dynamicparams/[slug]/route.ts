import { NextResponse } from "next/server";

export const dynamicParams = true;

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    const slug = params.slug // 'a', 'b', or 'c'

    return NextResponse.json({ slug })
}

export async function generateStaticParams() {
    return [];
}