import { Metadata } from 'next'

import Link from 'next/link'

import { Layout } from '@/components/features/layout/layout/layout'
import { TopContent } from '@/components/features/top-content/top-content'
import { getSettings } from '@/services/settings/settings'
import { ContentType } from '@/utils/enums/common'
import { GetTopContentTake } from '@/utils/redux/services/content/content.types'
import { withAuth } from '@/utils/supertokens/with-auth'

export const metadata: Metadata = {
    title: 'Топ стендап спешлов за всё время',
    description: 'Лучшие русские стендап спешлы за всё время. Рейтинг сформирован на основе оценок сообщества.',
    keywords: ['топ стендап спешлов', 'лучшие стендап концерты', 'стендап рейтинг', 'стендап на русском'],
}

export default async function TopSpecialAllTimePage() {
    const settings = await getSettings()

    return withAuth({
        render: ({ isAuth }) => (
            <Layout
                title="Топ спешлов"
                info={
                    <div>
                        Этот топ стендап-спешлов <strong>за&nbsp;всё время</strong> формируется на&nbsp;основе оценок
                        сообщества. В&nbsp;рейтинг попадают выступления, набравшие{' '}
                        <strong>не&nbsp;менее {settings.topContentMinReviewsCount} оценок</strong>.{' '}
                        <Link href="/content/special?sort=rating_asc" className="link">
                            Оценивайте выступления
                        </Link>{' '}
                        и&nbsp;влияйте на&nbsp;результаты.
                    </div>
                }
                size="sm"
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
