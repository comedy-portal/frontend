import { Metadata } from 'next'

import { LegalTermsOfUse } from '@/components/features/legal/legal-terms-of-use'
import { createMetadata } from '@/utils/helpers/metadata'

// prettier-ignore
export const metadata: Metadata = createMetadata({
    title: 'Пользовательское соглашение',
    description: 'Ознакомьтесь с правилами использования Камеди Портал: права и обязанности пользователей, условия публикации контента и использования сервиса.',
    path: '/legal/terms-of-use',
    type: 'website',
})

export default function LegalTermsOfUsePage() {
    return <LegalTermsOfUse />
}
