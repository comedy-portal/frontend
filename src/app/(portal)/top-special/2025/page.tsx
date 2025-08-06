import { Metadata } from 'next'

import { TopContent } from '@/components/features/top-content/top-content'
import { GetTopContentTake } from '@/redux/services/content/content.types'
import { ContentType } from '@/utils/enums/common'
import { getSSRSessionHelper } from '@/utils/supertokens/supertokens.utils'
import { TryRefreshComponent } from '@/utils/supertokens/try-refresh-component'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Топ сольных стендап концертов 2025 года на русском языке - Comedy Portal',
    description:'На этой странице собраны лучшие русские стендап концерты 2025 года. Этот топ выступлений сформирован на основе Ваших оценок и является результатом выбора сообщества. Эта подборка поможет вам выбрать идеальное шоу на вечер. Если Вам нужен топ стендапа на русском за 2025 год, этот рейтинг для Вас.',
    keywords: ['стендап на русском 2025', 'топ стендап концертов', 'лучшие стендап концерты 2025', 'лучшие стендап концерты на русском 2025', 'стендап рейтинг 2025', 'лучшие русские стендап концерты 2025 года'],
}

export default async function TopSpecial2025Page() {
    const { accessTokenPayload, hasToken } = await getSSRSessionHelper()

    if (!accessTokenPayload) {
        if (!hasToken) {
            /**
             * This means that the user is not logged in. If you want to display some other UI in this
             * case, you can do so here.
             */
            return <TopContent type={ContentType.SPECIAL} year={2025} take={GetTopContentTake.FIFTY} isAuth={false} />
        }

        /**
         * This means that the session does not exist but we have session tokens for the user. In this case
         * the `TryRefreshComponent` will try to refresh the session.
         *
         * To learn about why the 'key' attribute is required refer to: https://github.com/supertokens/supertokens-node/issues/826#issuecomment-2092144048
         */
        return <TryRefreshComponent key={Date.now()} />
    }

    return <TopContent type={ContentType.SPECIAL} year={2025} take={GetTopContentTake.FIFTY} isAuth={true} />
}
