import { MedalIcon } from 'lucide-react'
import { Metadata } from 'next'

import Link from 'next/link'

import { TopContent } from '@/components/features/top-content/top-content'
import { GetTopContentTake } from '@/redux/services/content/content.types'
import { ContentType } from '@/utils/enums/common'
import { withAuth } from '@/utils/supertokens/with-auth'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Топ стендапа за 2025 год',
    description:'На этой странице собраны лучшие русские стендап концерты 2025 года. Этот топ выступлений сформирован на основе Ваших оценок и является результатом выбора сообщества. Эта подборка поможет вам выбрать идеальное шоу на вечер. Если Вам нужен топ стендапа на русском за 2025 год, этот рейтинг для Вас.',
    keywords: ['стендап на русском 2025', 'топ стендап концертов', 'лучшие стендап концерты 2025', 'лучшие стендап концерты на русском 2025', 'стендап рейтинг 2025', 'лучшие русские стендап концерты 2025 года'],
}

export default async function TopSpecial2025Page() {
    return withAuth({
        render: ({ isAuth }) => (
            <TopContent type={ContentType.SPECIAL} year={2025} take={GetTopContentTake.FIFTY} isAuth={isAuth}>
                <div className="mb-4 flex gap-x-3 rounded-lg border border-orange-200 bg-orange-50 p-4">
                    <MedalIcon className="hidden shrink-0 text-orange-500 sm:block" />
                    <div>
                        Победители 2025 года уже{' '}
                        <Link
                            href="/blog/top-3-specials-2025"
                            className="text-blue-500 hover:text-blue-700"
                            target="_blank"
                        >
                            определены
                        </Link>
                        , награды вручены. При этом рейтинг может обновляться, не&nbsp;влияя на&nbsp;итоги года.
                    </div>
                </div>
            </TopContent>
        ),
    })
}
