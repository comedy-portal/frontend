import { Metadata } from 'next'

import { LegalTermsOfUse } from '@/components/features/legal/legal-terms-of-use'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Пользовательское соглашение - Comedy Portal',
}

export default function LegalTermsOfUsePage() {
    return <LegalTermsOfUse />
}
