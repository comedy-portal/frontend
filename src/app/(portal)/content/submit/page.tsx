import { ContentSubmit } from '@/components/features/content-submit/content-submit'
import { withAuth } from '@/utils/supertokens/with-auth'

export default async function ContentSubmitPage() {
    return withAuth({
        onUnauth: 'notFound',
        render: () => <ContentSubmit />,
    })
}
