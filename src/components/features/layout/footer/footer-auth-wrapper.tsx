import { getSettings } from '@/services/settings/settings'
import { withAuth } from '@/utils/supertokens/with-auth'

import { Footer } from './footer'

export const FooterAuthWrapper = async () => {
    const settings = await getSettings()
    const currentYear = settings.currentYear

    return withAuth({
        render: ({ isAuth }) => <Footer currentYear={currentYear} isAuth={isAuth} />,
    })
}
