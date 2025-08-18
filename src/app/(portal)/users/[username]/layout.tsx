import { ReviewsFiltersButton } from '@/components/features/dialogs/filters/reviews-filter/reviews-filters-button'
import { WatchlistFiltersButton } from '@/components/features/dialogs/filters/watchlists-filters/watchlists-filters-button'
import { Layout } from '@/components/features/layout/layout/layout'

type Params = Promise<{ username: string }>

export default async function UsersLayout(props: { children: React.ReactNode; params: Params }) {
    const params = await props.params

    return (
        <Layout
            title={params.username}
            size="sm"
            nav={[
                { label: 'Оценки', href: `/users/${params.username}`, filter: <ReviewsFiltersButton /> },
                {
                    label: 'Избранное',
                    href: `/users/${params.username}/watchlists`,
                    filter: <WatchlistFiltersButton />,
                },
            ]}
<<<<<<< HEAD
            preserveQueryParams={false}
=======
>>>>>>> feature/settings
        >
            {props.children}
        </Layout>
    )
}
