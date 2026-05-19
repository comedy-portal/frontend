import { Metadata } from 'next'

import { LegalCookiePolicy } from '@/components/features/legal/legal-cookie-policy'
import { createMetadata } from '@/utils/helpers/metadata'

export const metadata: Metadata = createMetadata({
    title: 'Политика использования cookies',
    description: 'Информация о cookies, локальном хранилище и аналитических счетчиках Камеди Портал.',
    path: '/legal/cookie-policy',
    type: 'website',
})

export default function LegalCookiePolicyPage() {
    return <LegalCookiePolicy />
}
