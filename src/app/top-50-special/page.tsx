import { Metadata } from 'next'

import { TopContent } from '@/components/features/top-content/top-content'
import { GetTopContentTake } from '@/redux/services/content/content.types'
import { ContentType } from '@/utils/enums/common'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Топ-50 лучших стендап концертов на русском языке - Comedy Portal',
    description:'Ищете, что посмотреть из стендапа на вечер и где найти лучший юмор? Вы попали по адресу. На этой странице собраны лучшие стендап концерты на русском за всё время. Этот топ спешлов сформирован на основе Ваших оценок и является результатом выбора сообщества. Здесь Вы найдёте всё, чтобы посмотреть стендап онлайн: будь то уже культовый спешл или свежее выступление от молодых комиков. Эта подборка поможет Вам выбрать идеальное шоу и насладиться комедией на все сто! Хотите внести свой вклад в формирование этого рейтинга концертов? Ставьте свои оценки на нашей платформе!',
    keywords: ['топ стендап концертов', 'лучшие стендап концерты', 'русскоязычные стендап концерты', 'стендап рейтинг', '50 лучших стендап концертов']
}

export default function Top50SpecialPage() {
    return <TopContent type={ContentType.SPECIAL} take={GetTopContentTake.FIFTY} />
}
