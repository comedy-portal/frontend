import { Metadata } from 'next'

import { Landing } from '@/components/features/landing/landing'

// prettier-ignore
export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_DOMAIN as string),
    alternates: {
        canonical: '/',
    },
    title: 'Comedy Portal – Смотрите стендап, юмор и комедийные шоу онлайн каждый день.',
    description: 'Comedy Portal – комедийный портал №1 для любителей юмора. Смотрите русский стендап, стендап-выступления и комедийные шоу онлайн. Следите за новыми видео, читайте отзывы и находите лучших русских стендап комиков каждый день.',
    keywords: [
        'comedy portal',
        'comedyportal',
        'комеди портал ру',
        'комедипортал ру',
        'стендап',
        'русский стендап',
        'русские стендап комики',
        'стендап-выступления',
        'комедийные шоу',
        'стендап онлайн',
    ],
    appleWebApp: {
        title: 'Comedy Portal',
    },
    openGraph: {
        title: 'Comedy Portal – Ваш портал в мир комедии',
        type: 'website',
        locale: 'ru_RU',
        url: '/',
        siteName: 'Comedy Portal',
    },
    twitter: {
        title: 'Comedy Portal – Ваш портал в мир комедии',
        card: 'summary_large_image',
    },
}

export default function HomePage() {
    return <Landing />
}
