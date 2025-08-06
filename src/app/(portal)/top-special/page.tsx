import { Metadata } from 'next'

import { TopContent } from '@/components/features/top-content/top-content'
import { GetTopContentTake } from '@/redux/services/content/content.types'
import { ContentType } from '@/utils/enums/common'
import { getSSRSessionHelper } from '@/utils/supertokens/supertokens.utils'
import { TryRefreshComponent } from '@/utils/supertokens/try-refresh-component'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Топ сольных стендап концертов на русском языке - Comedy Portal',
    description:'Ищете, что посмотреть из стендапа на вечер и где найти лучший юмор? Вы попали по адресу. На этой странице собраны лучшие стендап концерты на русском за всё время. Этот топ спешлов сформирован на основе Ваших оценок и является результатом выбора сообщества. Здесь Вы найдёте всё, чтобы посмотреть стендап онлайн: будь то уже культовый спешл или свежее выступление от молодых комиков. Эта подборка поможет Вам выбрать идеальное шоу и насладиться комедией на все сто! Хотите внести свой вклад в формирование этого рейтинга концертов? Ставьте свои оценки на нашей платформе!',
    keywords: ['топ стендап концертов', 'лучшие стендап концерты', 'русский стендап концерты', 'стендап рейтинг', 'лучшие стендап концерты']
}

export default async function TopSpecialPage() {
    const { accessTokenPayload, hasToken } = await getSSRSessionHelper()

    if (!accessTokenPayload) {
        if (!hasToken) {
            /**
             * This means that the user is not logged in. If you want to display some other UI in this
             * case, you can do so here.
             */
            return <TopContent type={ContentType.SPECIAL} take={GetTopContentTake.ONE_HUNDRED} isAuth={false} />
        }

        /**
         * This means that the session does not exist but we have session tokens for the user. In this case
         * the `TryRefreshComponent` will try to refresh the session.
         *
         * To learn about why the 'key' attribute is required refer to: https://github.com/supertokens/supertokens-node/issues/826#issuecomment-2092144048
         */
        return <TryRefreshComponent key={Date.now()} />
    }

    return <TopContent type={ContentType.SPECIAL} take={GetTopContentTake.ONE_HUNDRED} isAuth={true} />
}
