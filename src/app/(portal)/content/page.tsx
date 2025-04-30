import { Content } from '@/components/features/content/content'
import { getContentMany } from '@/services/content'
import { Order } from '@/types/common'
import { ContentSortBy, ContentType } from '@/types/content'

type SearchParams = Promise<{ type: ContentType; sort_by: ContentSortBy; order: Order }>

export default async function ContentPage({ searchParams }: { searchParams: SearchParams }) {
    const { type, sort_by, order } = await searchParams

    const { items } = await getContentMany({
        ...(type && { type }),
        ...(sort_by && { sort_by }),
        ...(order && { order }),
    })

    return <Content items={items} />
}
