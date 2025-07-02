import { Layout } from '@/components/features/layout/layout/layout'
import { getComedianBySlug } from '@/services/comedians/comedians'

type Params = Promise<{ slug: string }>

export default async function ComedianLayout(props: { children: React.ReactNode; params: Params }) {
    const params = await props.params
    const comedian = await getComedianBySlug(params.slug)

    return (
        <Layout
            title={`${comedian.name} ${comedian.surname}`}
            size="sm"
            nav={[
                {
                    label: 'Описание',
                    href: `/comedians/${params.slug}/`,
                },
                {
                    label: `Контент (${comedian.content?.length || 0})`,
                    href: `/comedians/${params.slug}/content`,
                },
            ]}
        >
            {props.children}
        </Layout>
    )
}
