import { Landing } from '@/components/features/landing/landing'
import { withAuth } from '@/utils/hoc/with-auth'

export default function HomePage() {
    return withAuth({
        render: ({ isAuth }) => <Landing isAuth={isAuth} />,
    })
}
