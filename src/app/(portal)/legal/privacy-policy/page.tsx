import { Metadata } from 'next'

import { LegalPrivacyPolicy } from '@/components/features/legal/legal-privacy-policy'
import { createMetadata } from '@/utils/helpers/metadata'

// prettier-ignore
export const metadata: Metadata = createMetadata({
    title: 'Политика конфиденциальности',
    description: 'Узнайте, как Камеди Портал собирает, использует и защищает ваши персональные данные при использовании сайта и его сервисов.',
    path: '/legal/privacy-policy',
    type: 'website',
})

export default function LegalPrivacyPolicyPage() {
    return <LegalPrivacyPolicy />
}
