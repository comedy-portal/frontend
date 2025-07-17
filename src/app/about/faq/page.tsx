import { Metadata } from 'next'

import { AboutFaq } from '@/components/features/about/about-faq'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Вопросы и ответы - Comedy Portal',
}

export default function AboutFaqPage() {
    return <AboutFaq />
}
