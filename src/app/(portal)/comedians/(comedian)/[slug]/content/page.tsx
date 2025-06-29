import { ComedianContent } from '@/components/features/comedian/comedian-content/comedian-content'
import { getComedianBySlug } from '@/services/comedians/comedians'

type Params = Promise<{ slug: string }>

export default async function ComedianContentPage(props: { params: Params }) {
    const params = await props.params
    const comedian = await getComedianBySlug(params.slug)

    return <ComedianContent content={comedian.content} />
}
