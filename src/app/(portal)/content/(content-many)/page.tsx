import { Metadata } from 'next'

import { ContentMany } from '@/components/features/content-many/content-many'
import { getSettings } from '@/services/settings/settings'
import { withAuth } from '@/utils/supertokens/with-auth'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Контент',
}

export default async function ContentManyPage() {
    const settings = await getSettings()
    const currentYear = settings.currentYear

    return withAuth({
        render: ({ isAuth }) => <ContentMany currentYear={currentYear} isAuth={isAuth} />,
    })
}
