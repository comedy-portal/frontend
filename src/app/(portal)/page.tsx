import { Landing } from '@/components/features/landing/landing'
// TEMP TEST: auth is disabled on the landing render to compare production behavior.
// Restore this import together with the withAuth wrapper below.
// import { withAuth } from '@/utils/supertokens/with-auth'

export default async function HomePage() {
    // TEMP TEST: render the landing as an anonymous user without reading auth cookies during SSR.
    // return withAuth({
    //     render: ({ data, isAuth }) => <Landing isAuth={isAuth} />,
    // })

    return <Landing isAuth={false} />
}
