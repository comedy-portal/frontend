import { Landing } from '@/components/features/landing/landing'
import { withAuth } from '@/utils/supertokens/with-auth'

export default async function HomePage() {
    return withAuth({
        render: ({ data, isAuth }) => <Landing isAuth={isAuth} />,
    })
}
