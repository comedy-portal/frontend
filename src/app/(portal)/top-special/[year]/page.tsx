import { Metadata } from 'next'

import Link from 'next/link'
import { redirect } from 'next/navigation'

import { Layout } from '@/components/features/layout/layout/layout'
import { TopContent } from '@/components/features/top-content/top-content'
import { GetTopContentTake } from '@/redux/services/content/content.types'
import { getSettings } from '@/services/settings/settings'
import { ContentType } from '@/utils/enums/common'
import { withAuth } from '@/utils/supertokens/with-auth'

type Params = Promise<{ year: string }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params
    const year = Number(params.year)

    return {
        title: `Топ стендап спешлов за ${year} год`,
        description: `На этой странице собраны лучшие русские стендап концерты ${year} года. Этот рейтинг сформирован на основе оценок сообщества.`,
        keywords: [
            `стендап на русском ${year}`,
            'топ стендап концертов',
            `лучшие стендап концерты ${year}`,
            `стендап рейтинг ${year}`,
        ],
    }
}

const ALLOWED_YEARS = [2025, 2026] as const

export default async function TopSpecialYearPage(props: { params: Params }) {
    const params = await props.params
    const year = Number(params.year)

    if (!ALLOWED_YEARS.includes(year as (typeof ALLOWED_YEARS)[number])) {
        redirect('/404')
    }

    const settings = await getSettings()
    const isCurrentYear = year === settings.currentYear

    return withAuth({
        render: ({ isAuth }) => (
            <Layout
                title="Топ спешлов"
                info={
                    <div>
                        {isCurrentYear ? (
                            <div>
                                Этот топ стендап-спешлов <strong>за&nbsp;{year}</strong> год формируется на&nbsp;основе
                                оценок сообщества. В&nbsp;рейтинг попадают выступления, набравшие{' '}
                                <strong>не&nbsp;менее {settings.currentYearTopSpecialsMinReviewsCount} оценок</strong>.
                                Любимый спешл ещё не&nbsp;в&nbsp;топе?{' '}
                                <Link
                                    href={`/content/special?sort=rating_asc&min_year=${year}&max_year=${year}`}
                                    className="link"
                                >
                                    Оценивайте выступления
                                </Link>{' '}
                                и&nbsp;влияйте на&nbsp;результаты.
                            </div>
                        ) : (
                            <div>
                                Этот топ стендап-спешлов <strong>за&nbsp;{year}</strong> год сформирован на&nbsp;основе
                                оценок сообщества. В&nbsp;рейтинг попали выступления, набравшие{' '}
                                <strong>не&nbsp;менее {settings.topContentMinReviewsCount} оценок</strong>. Победители
                                уже{' '}
                                <Link href="/blog/top-3-specials-2025" className="link" target="_blank">
                                    определены
                                </Link>
                                , награды вручены. При этом рейтинг может обновляться, не&nbsp;влияя на&nbsp;итоги года.
                            </div>
                        )}
                    </div>
                }
                size="sm"
                nav={[
                    { label: '2026', href: '/top-special/2026' },
                    { label: '2025', href: '/top-special/2025' },
                    { label: 'За всё время', href: '/top-special' },
                ]}
            >
                <TopContent type={ContentType.SPECIAL} year={year} take={GetTopContentTake.FIFTY} isAuth={isAuth} />
            </Layout>
        ),
    })
}
