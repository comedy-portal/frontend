import { redirect } from 'next/navigation'

export const dynamic = 'force-static'

export default function LegalPage() {
    redirect('/legal/terms-of-use')
}
