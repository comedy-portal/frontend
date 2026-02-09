import { Metadata } from 'next'

import { LegalTermsOfUse } from '@/components/features/legal/legal-terms-of-use'

export const dynamic = 'force-static'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Пользовательское соглашение',
}

export default function LegalTermsOfUsePage() {
    return <LegalTermsOfUse />
}
