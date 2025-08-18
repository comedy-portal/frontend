import { TrophyIcon } from 'lucide-react'
import { Metadata } from 'next'

import Link from 'next/link'

import { TopContent } from '@/components/features/top-content/top-content'
import { GetTopContentTake } from '@/redux/services/content/content.types'
import { ContentType } from '@/utils/enums/common'
import { withAuth } from '@/utils/supertokens/with-auth'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Топ сольных стендап концертов на русском языке - Comedy Portal',
    description:'Ищете, что посмотреть из стендапа на вечер и где найти лучший юмор? Вы попали по адресу. На этой странице собраны лучшие стендап концерты на русском за всё время. Этот топ спешлов сформирован на основе Ваших оценок и является результатом выбора сообщества. Здесь Вы найдёте всё, чтобы посмотреть стендап онлайн: будь то уже культовый спешл или свежее выступление от молодых комиков. Эта подборка поможет Вам выбрать идеальное шоу и насладиться комедией на все сто! Хотите внести свой вклад в формирование этого рейтинга концертов? Ставьте свои оценки на нашей платформе!',
    keywords: ['топ стендап концертов', 'лучшие стендап концерты', 'русский стендап концерты', 'стендап рейтинг', 'лучшие стендап концерты']
}

export default async function TopSpecialPage() {
    return withAuth({
        render: ({ isAuth }) => (
            <TopContent type={ContentType.SPECIAL} take={GetTopContentTake.ONE_HUNDRED} isAuth={isAuth}>
                <div className="mb-4 flex gap-x-3 rounded-lg border border-blue-100 bg-blue-50 p-4">
                    <TrophyIcon className="hidden shrink-0 text-blue-400 sm:block" />
                    <div>
                        Примите участие в формировании рейтинга <strong>лучших спешлов за всё время!</strong> Все спешлы
                        Вы можете найти{' '}
                        <Link href="/content?max_rating=0" className="text-blue-500 hover:text-blue-700">
                            здесь
                        </Link>
                        .
                    </div>
                </div>
            </TopContent>
        ),
    })
}
