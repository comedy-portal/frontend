import { ContentDescription } from '@/components/features/content-description/content-description'
import { getContentById } from '@/services/content'

type Params = Promise<{ id: number }>

export default async function ContentPage(props: { params: Params }) {
    const params = await props.params
    const content = await getContentById(params.id)

    return <ContentDescription content={content} />
}
