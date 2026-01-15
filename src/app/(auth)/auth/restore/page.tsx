import { Metadata } from 'next/types'

import { Restore } from '@/components/features/auth/restore'

export const metadata: Metadata = {
    title: 'Подтверждение удаления аккаунта',
    alternates: {
        canonical: 'auth/confirm-deletion',
    },
}

type SearchParams = Promise<{ token: string }>

export default async function RestorePage(props: { searchParams: SearchParams }) {
    const searchParams = await props.searchParams
    return <Restore token={searchParams.token} />
}
