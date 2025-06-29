import { GroupContent } from '@/components/features/group/group-content/group-content'
import { getGroupsBySlug } from '@/services/groups/groups'

type Params = Promise<{ slug: string }>

export default async function GroupContentPage(props: { params: Params }) {
    const params = await props.params
    const group = await getGroupsBySlug(params.slug)
    return <GroupContent content={group.content} />
}
