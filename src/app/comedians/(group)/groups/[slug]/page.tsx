import { GroupDescription } from '@/components/features/group/group-description/group-description'
import { getGroupsBySlug } from '@/services/groups/groups'

type Params = Promise<{ slug: string }>

export default async function GroupDescriptionPage(props: { params: Params }) {
    const params = await props.params
    const group = await getGroupsBySlug(params.slug)
    return <GroupDescription group={group} />
}
