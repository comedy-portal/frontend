import { Metadata } from 'next/types'

import { Restore } from '@/components/features/auth/restore'

export const metadata: Metadata = {
    title: 'Восстановление аккаунта',
    alternates: {
        canonical: 'auth/restore',
    },
}

type SearchParams = Promise<{ token: string }>

export default async function RestorePage(props: { searchParams: SearchParams }) {
    const searchParams = await props.searchParams
    return <Restore token={searchParams.token} />
}
