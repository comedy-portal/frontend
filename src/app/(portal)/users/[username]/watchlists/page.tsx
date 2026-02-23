import { Metadata } from 'next'

import { UserWatchlists } from '@/components/features/user/user-watchlists/user-watchlists'
import { getSettings } from '@/services/settings/settings'
import { createMetadata } from '@/utils/helpers/metadata'
import { withAuth } from '@/utils/supertokens/with-auth'

type Params = Promise<{ username: string }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params
    const username = params.username

    return createMetadata({
        title: `Избранное пользователя ${username}`,
        description: `Просмотрите стендап-выступления и шоу, добавленные в избранное пользователем ${username} на Камеди Портал.`,
        path: `/users/${username}/watchlists`,
        keywords: [
            `избранное ${username}`,
            'пользовательский список',
            'топ стендап спешлов',
            'фавориты пользователей',
            `Камеди Портал ${username}`,
        ],
        type: 'website',
    })
}

export default async function UserWatchListsPage(props: { params: Params }) {
    const params = await props.params
    const settings = await getSettings()

    return withAuth({
        render: ({ isAuth }) => (
            <UserWatchlists username={params.username} currentYear={settings.currentYear} isAuth={isAuth} />
        ),
    })
}
