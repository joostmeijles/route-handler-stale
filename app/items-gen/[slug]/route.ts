import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    const slug = params.slug // 'a', 'b', or 'c'

    return NextResponse.json({ slug })
}

export async function generateStaticParams() {
    return [{slug: 'a'}];
}