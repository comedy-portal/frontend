import { Metadata } from 'next/types'

import { ConfirmUserDeletion } from '@/components/features/auth/confirm-user-deletion'

export const metadata: Metadata = {
    title: 'Подтверждение удаления аккаунта - Comedy Portal',
    alternates: {
        canonical: 'auth/confirm-deletion',
    },
}

type SearchParams = Promise<{ token: string }>

export default async function ConfirmUserDeletionPage(props: { searchParams: SearchParams }) {
    const searchParams = await props.searchParams
    return <ConfirmUserDeletion token={searchParams.token} />
}
