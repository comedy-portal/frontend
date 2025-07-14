import { Metadata } from 'next'

import { LegalPrivacyPolicy } from '@/components/features/legal/legal-privacy-policy'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Политика конфиденциальности - Comedy Portal',
}

export default function LegalPrivacyPolicyPage() {
    return <LegalPrivacyPolicy />
}
