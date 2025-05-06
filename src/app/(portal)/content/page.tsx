import { Content } from '@/components/features/content/content'
import { getContentMany } from '@/services/content'
import { Order } from '@/types/common'
import { ContentSortBy, ContentType } from '@/types/content'

type SearchParams = Promise<{ page: string; type: ContentType; sort_by: ContentSortBy; order: Order }>

export default async function ContentPage({ searchParams }: { searchParams: SearchParams }) {
    const { page, type, sort_by, order } = await searchParams

    const { total, items } = await getContentMany({
        ...(page && { cursor: page }),
        ...(type && { type }),
        ...(sort_by && { sort_by }),
        ...(order && { order }),
    })

    return <Content total={total} currentPage={page ? +page : 1} items={items} />
}
