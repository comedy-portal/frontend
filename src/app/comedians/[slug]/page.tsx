import { ComedianDescription } from '@/components/features/comedian/comedian-description/comedian-description'
import { getComedianBySlug } from '@/services/comedians/comedians'

type Params = Promise<{ slug: string }>

export default async function ComedianDescriptionPage(props: { params: Params }) {
    const params = await props.params
    const comedian = await getComedianBySlug(params.slug)
    return <ComedianDescription comedian={comedian} />
}
