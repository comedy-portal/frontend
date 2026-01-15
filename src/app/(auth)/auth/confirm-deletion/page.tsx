import { Metadata } from 'next/types'

import { ConfirmDeletion } from '@/components/features/auth/confirm-deletion'

export const metadata: Metadata = {
    title: 'Подтверждение удаления аккаунта',
    alternates: {
        canonical: 'auth/confirm-deletion',
    },
}

type SearchParams = Promise<{ token: string }>

export default async function ConfirmDeletionPage(props: { searchParams: SearchParams }) {
    const searchParams = await props.searchParams
    return <ConfirmDeletion token={searchParams.token} />
}
