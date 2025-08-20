import { ReviewsFiltersButton } from '@/components/features/dialogs/filters/reviews-filter/reviews-filters-button'
import { WatchlistFiltersButton } from '@/components/features/dialogs/filters/watchlists-filters/watchlists-filters-button'
import { Layout } from '@/components/features/layout/layout/layout'
import { UserSidebar } from '@/components/features/user/components/sidebar/sidebar'
import { getUserByName } from '@/services/users/users'

type Params = Promise<{ username: string }>

export default async function UsersLayout(props: { children: React.ReactNode; params: Params }) {
    const params = await props.params
    const user = await getUserByName(params.username)

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
            sidebar={
                <UserSidebar
                    username={user.username}
                    daysSinceRegistration={user.daysSinceRegistration}
                    _count={{
                        reviews: user._count.reviews,
                        watchlists: user._count.watchlists,
                        textReviewsCount: user._count.textReviewsCount,
                    }}
                />
            }
        >
            {props.children}
        </Layout>
    )
}
