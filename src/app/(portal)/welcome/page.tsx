import { Metadata } from 'next'

import { Welcome } from '@/components/features/welcome/welcome'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Добро пожаловать - Comedy Portal',
}

export default function WelcomePage() {
    return <Welcome />
}
