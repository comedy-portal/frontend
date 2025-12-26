import { withAuth } from '@/utils/supertokens/with-auth'

import { Footer } from './footer'

export const FooterAuthWrapper = async () => {
    return withAuth({
        render: ({ isAuth }) => <Footer isAuth={isAuth} />,
    })
}
