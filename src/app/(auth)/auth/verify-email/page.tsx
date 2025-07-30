import { Metadata } from 'next/types'

import { VerifyEmail } from '@/components/features/auth/verify-email'

export const metadata: Metadata = {
    title: 'Подтверждение электронной почты',
    alternates: {
        canonical: 'auth/verify-email',
    },
}

type SearchParams = Promise<{ token: string }>

export default async function VerifyEmailPage(props: { searchParams: SearchParams }) {
    const searchParams = await props.searchParams
    return <VerifyEmail token={searchParams.token} />
}
