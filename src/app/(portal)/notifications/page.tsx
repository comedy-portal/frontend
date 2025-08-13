import { Notifications } from '@/components/features/notifications/notifications'
import { withAuth } from '@/utils/hoc/with-auth'

export default async function NotificationsPage() {
    return withAuth({
        onUnauth: 'notFound',
        render: () => <Notifications />,
    })
}
