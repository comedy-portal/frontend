import { Metadata } from 'next'

import { ContentMany } from '@/components/features/content-many/content-many'
import { getSettings } from '@/services/settings/settings'
import { createMetadata } from '@/utils/helpers/metadata'
import { withAuth } from '@/utils/supertokens/with-auth'

// prettier-ignore
export const metadata: Metadata = createMetadata({
    title: 'Контент',
    description: 'Все стендап-спешлы, комедийные шоу, блоги и подкасты на Камеди Портал. Смотрите, оценивайте и делитесь с друзьями!',
    path: '/content',
    type: 'website',
    keywords: ['стендап', 'спешлы', 'русский стендап', 'комедийные шоу', 'блоги', 'дискуссия', 'импровизации', 'подкасты', 'прожарки', 'блог комиков', 'сериалы', 'скетчи', 'ток-шой', 'командные выступления', 'смотреть стендап'],
})

export default async function ContentManyPage() {
    const settings = await getSettings()
    const currentYear = settings.currentYear

    return withAuth({
        render: ({ isAuth }) => <ContentMany currentYear={currentYear} isAuth={isAuth} />,
    })
}
