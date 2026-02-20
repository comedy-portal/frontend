import { Metadata } from 'next'

import { Venues } from '@/components/features/venues/venues'

const title = 'Площадки со стендапом на русском языке'
const description =
    'Каталог стендап-клубов, баров и концертных площадок, где проходят выступления русскоязычных комиков по всему миру. Афиша, open mic и туры.'

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        'стендап клубы',
        'стендап-клубы',
        'стендап туры',
        'стендап бары',
        'стендап клубы на русском',
        'русский стендап',
        'стендап на русском языке',
        'русскоязычный стендап за границей',
        'русский стендап за границей',
        'стендап на русском за границей',
        'где посмотреть стендап',
        'стендап клубы Европы',
        'русскоязычные комики',
        'концерты стендап комиков',
        'лучшие стендап площадки',
        'афиша стендапа',
        'standup на русском',
        'русский stand up клуб',
        'расписание стендап концертов',
        'где проходит стендап',
        'стендап площадки',
        'каталог стендап клубов',
        'список стендап клубов',
        'концертные площадки стендап',
        'open mic на русском языке',
        'открытый микрофон стендап',
        'афиша стендап клубов',
        'стендап мероприятия',
        'стендап в Европе',
        'стендап в Армении',
        'стендап в Казахстане',
        'стендап в Польше',
        'стендап в России',
        'russian stand up club',
        'russian comedy club abroad',
    ],
    openGraph: {
        type: 'website',
        title,
        description,
        url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/venues`,
        siteName: 'Comedy Portal',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/images/og/venues.jpg`,
                width: 1200,
                height: 630,
                alt: 'Стендап площадки на русском языке',
                type: 'image/jpeg',
            },
        ],
    },
    twitter: {
        title,
        description,
        card: 'summary_large_image',
        images: [`${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/images/og/venues.jpg`],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/venues`,
    },
}

export default function VenuesPage() {
    return <Venues />
}
