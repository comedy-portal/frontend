import { GroupComposition } from '@/components/features/group/group-composition/group-composition'
import { getGroupsBySlug } from '@/services/groups/groups'

type Params = Promise<{ slug: string }>

export default async function GroupCompositionPage(props: { params: Params }) {
    const params = await props.params
    const group = await getGroupsBySlug(params.slug)
    return <GroupComposition comedians={group.comedians} />
}
