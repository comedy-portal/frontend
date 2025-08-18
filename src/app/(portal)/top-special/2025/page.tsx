import { MedalIcon } from 'lucide-react'
import { Metadata } from 'next'

import Link from 'next/link'

import { TopContent } from '@/components/features/top-content/top-content'
import { GetTopContentTake } from '@/redux/services/content/content.types'
import { ContentType } from '@/utils/enums/common'
import { withAuth } from '@/utils/supertokens/with-auth'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Топ сольных стендап концертов 2025 года на русском языке - Comedy Portal',
    description:'На этой странице собраны лучшие русские стендап концерты 2025 года. Этот топ выступлений сформирован на основе Ваших оценок и является результатом выбора сообщества. Эта подборка поможет вам выбрать идеальное шоу на вечер. Если Вам нужен топ стендапа на русском за 2025 год, этот рейтинг для Вас.',
    keywords: ['стендап на русском 2025', 'топ стендап концертов', 'лучшие стендап концерты 2025', 'лучшие стендап концерты на русском 2025', 'стендап рейтинг 2025', 'лучшие русские стендап концерты 2025 года'],
}

export default async function TopSpecial2025Page() {
    return withAuth({
        render: ({ isAuth }) => (
            <TopContent type={ContentType.SPECIAL} year={2025} take={GetTopContentTake.FIFTY} isAuth={isAuth}>
                <div className="mb-4 flex gap-x-3 rounded-lg border border-orange-100 bg-orange-50 p-4">
                    <MedalIcon className="hidden shrink-0 text-orange-500 sm:block" />
                    <div>
                        Примите участие в формировании рейтинга <strong>лучших спешлов 2025 года!</strong> Все спешлы за
                        2025 год Вы можете найти{' '}
                        <Link href="/content?sort=rating_asc&year=2025" className="text-blue-500 hover:text-blue-700">
                            здесь
                        </Link>
                        .
                    </div>
                </div>
            </TopContent>
        ),
    })
}
