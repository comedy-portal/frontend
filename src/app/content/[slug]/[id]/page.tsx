import { Metadata } from 'next'

import { Content } from '@/components/features/content/content'
import { getContentById } from '@/services/content/content'
import { getUserData } from '@/services/user/user'
import { getSSRSessionHelper } from '@/utils/supertokens/supertokens.utils'
import { TryRefreshComponent } from '@/utils/supertokens/try-refresh-component'

type Params = Promise<{ id: number }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params
    const content = await getContentById(params.id)

    return {
        title: `${content.name} - Comedy Portal`,
        description: content.metaInfo?.description,
    }
}

export default async function ContentPage(props: { params: Params }) {
    const params = await props.params
    const content = await getContentById(params.id)

    const { accessTokenPayload, hasToken } = await getSSRSessionHelper()

    if (!accessTokenPayload) {
        if (!hasToken) {
            /**
             * This means that the user is not logged in. If you want to display some other UI in this
             * case, you can do so here.
             */
            return <Content content={content} activeUserId={null} isAuth={false} hasMyReview={false} />
        }

        /**
         * This means that the session does not exist but we have session tokens for the user. In this case
         * the `TryRefreshComponent` will try to refresh the session.
         *
         * To learn about why the 'key' attribute is required refer to: https://github.com/supertokens/supertokens-node/issues/826#issuecomment-2092144048
         */
        return <TryRefreshComponent key={Date.now()} />
    }

    const activeUser = await getUserData()

    return (
        <Content
            content={content}
            activeUserId={activeUser.id}
            isAuth={true}
            hasMyReview={!!content.reviews?.[0]?.text}
        />
    )
}
