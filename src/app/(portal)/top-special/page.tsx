import { Metadata } from 'next'

import Link from 'next/link'

import { Layout } from '@/components/features/layout/layout/layout'
import { TopContent } from '@/components/features/top-content/top-content'
import { getSettings } from '@/services/settings/settings'
import { ContentType } from '@/utils/enums/common'
import { createMetadata } from '@/utils/helpers/metadata'
import { GetTopContentTake } from '@/utils/redux/services/content/content.types'
import { withAuth } from '@/utils/supertokens/with-auth'

const BREAKABLE_SPACE = ' '

export const metadata: Metadata = createMetadata({
    title: 'Топ стендап спешлов за всё время',
    description: 'Лучшие русские стендап спешлы за всё время. Рейтинг сформирован на основе оценок сообщества.',
    path: '/top-special',
    keywords: ['топ стендап спешлов', 'лучшие стендап концерты', 'стендап рейтинг', 'стендап на русском'],
    type: 'website',
})

export default async function TopSpecialAllTimePage() {
    const settings = await getSettings()

    return withAuth({
        render: ({ isAuth }) => (
            <Layout
                title="Топ спешлов"
                size="sm"
                sidebar={{
                    component: (
                        <div className="space-y-3">
                            <p>
                                Этот топ стендап-спешлов <strong>за&nbsp;всё время</strong>
                                {BREAKABLE_SPACE}формируется на&nbsp;основе оценок сообщества. В&nbsp;рейтинг попадают
                                выступления, набравшие{' '}
                                <strong>не&nbsp;менее {settings.topContentMinReviewsCount} оценок</strong>.
                            </p>
                            <p>
                                <Link href="/content/special?sort=rating_asc" className="link">
                                    Оценивайте выступления
                                </Link>{' '}
                                и&nbsp;влияйте на&nbsp;результаты.
                            </p>
                        </div>
                    ),
                    showOnMobile: true,
                }}
                nav={[
                    { label: '2026', href: '/top-special/2026' },
                    { label: '2025', href: '/top-special/2025' },
                    { label: 'За всё время', href: '/top-special' },
                ]}
            >
                <TopContent type={ContentType.SPECIAL} take={GetTopContentTake.FIFTY} isAuth={isAuth} />
            </Layout>
        ),
    })
}
