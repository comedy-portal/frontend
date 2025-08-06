import { Metadata } from 'next'

import { ContentMany } from '@/components/features/content-many/content-many'
import { withAuth } from '@/utils/hoc/with-auth'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Контент - Comedy Portal',
}

export default function ContentManyPage() {
    return withAuth({
        render: ({ isAuth }) => <ContentMany isAuth={isAuth} />,
    })
}
