import { BlogArticle } from '@/utils/types/blog'

// prettier-ignore
const article: BlogArticle = {
    slug: '',
    date: '2026-01-01',

    preview: {
        image: '/images/articles/',
        title: '',
        description: '',
    },

    metadata: {
        title: '',
        description: '',
        keywords: [
            '',
            '',
        ],
        openGraph: {
            type: 'article',
            title: '',
            description: '',
            url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/blog/`,
            siteName: 'Comedy Portal',
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/images/articles/`,
                    width: 1200,
                    height: 630,
                    alt: '',
                },
            ],
            locale: 'ru_RU',
        },
        twitter: {
            card: 'summary_large_image',
            title: '',
            description: '',
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/images/articles/`,
                    alt: '',
                },
            ],
        },
    },

    title: '',
    content: (
        <>
            
        </>
    ),
}

export default article
