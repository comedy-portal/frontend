import { Metadata } from 'next'

import { TopContent } from '@/components/features/top-content/top-content'
import { GetTopContentTake } from '@/redux/services/content/content.types'
import { ContentType } from '@/utils/enums/common'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Топ-50 лучших стендап концертов 2025 года на русском языке - Comedy Portal',
    description:'На этой странице собраны 50 лучших русскоязычных стендап концертов 2025 года. Этот топ выступлений сформирован на основе Ваших оценок и является результатом выбора сообщества. Эта подборка поможет вам выбрать идеальное шоу на вечер. Если Вам нужен топ стендапа на русском за 2025 год, этот рейтинг для Вас.',
    keywords: ['топ стендап концертов', 'лучшие стендап концерты 2025', 'русскоязычные стендап концерты', 'стендап рейтинг 2025', '50 лучших русскоязычных стендап концертов 2025 года'],
}

export default function Top50Special2025Page() {
    return <TopContent type={ContentType.SPECIAL} year={2025} take={GetTopContentTake.FIFTY} />
}
