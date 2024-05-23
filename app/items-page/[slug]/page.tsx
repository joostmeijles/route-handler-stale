export default async function Page({ params }: { params: { slug: string } }) {
    return <span>{params.slug}</span>
}

export async function generateStaticParams() {
    // No pages to generate at build-time,
    // but this ensures that the page is only generated for the first request
    // and cached on the CDN for subsequent requests (until revalidated).
    return [];
}