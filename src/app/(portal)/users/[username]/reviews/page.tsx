import { UserReviews } from '@/components/features/user-reviews/user-reviews'
import { getUserByName } from '@/services/users'

type Params = Promise<{ username: string }>

export default async function UserReviewsPage(props: { params: Params }) {
    const params = await props.params
    const user = await getUserByName(params.username)
    return <UserReviews userId={user.id} />
}
