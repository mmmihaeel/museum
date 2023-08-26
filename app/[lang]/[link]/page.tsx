

export default function Page({ params }: { params: { link: string } }) {
    return <div>Page: {params.link}</div>;
}