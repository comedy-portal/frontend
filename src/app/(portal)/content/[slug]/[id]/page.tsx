// import { notFound } from 'next/navigation'

type Params = Promise<{ id: number }>

export default async function ContentPage(props: { params: Params }) {
    const params = await props.params

    // // Check if the slug is included in the ContentType enum
    // if (!Object.values(ContentType).includes(params.slug.toLocaleLowerCase() as ContentType)) {
    //     notFound()
    // }

    return <div>Content page {params.id}</div>
}
