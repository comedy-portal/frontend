// TEMP TEST: server settings fetch is disabled together with auth to keep the landing render simple.
// Restore this import together with the getSettings call below.
// import { getSettings } from '@/services/settings/settings'
// TEMP TEST: auth is disabled in the footer render to compare production behavior.
// Restore this import together with the withAuth wrapper below.
// import { withAuth } from '@/utils/supertokens/with-auth'

import { Footer } from './footer'

export const FooterAuthWrapper = async () => {
    // TEMP TEST: avoid a server API request during the anonymous landing render.
    // const settings = await getSettings()
    // const currentYear = settings.currentYear
    const currentYear = new Date().getFullYear()

    // TEMP TEST: render footer as an anonymous user without reading auth cookies during SSR.
    // return withAuth({
    //     render: ({ isAuth }) => <Footer currentYear={currentYear} isAuth={isAuth} />,
    // })

    return <Footer currentYear={currentYear} isAuth={false} />
}
