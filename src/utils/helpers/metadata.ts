import type { Metadata } from 'next'

type MetadataType = 'website' | 'article'

type CreateMetadataProps = {
    title?: string
    description?: string
    path?: string
    image?: string
    type?: MetadataType
    keywords?: string[]
    publishedTime?: string
    modifiedTime?: string
    authors?: { name: string; url?: string }[]
    noindex?: boolean
}

const SITE_NAME = 'Камеди Портал'
// prettier-ignore
const DEFAULT_DESCRIPTION = 'Лучшие стендапы и популярные шоу с оценками, рецензиями и Вашей персональной историей просмотров.'
const DEFAULT_IMAGE = '/images/og-default.jpg'

export function createMetadata({
    title = SITE_NAME,
    description = DEFAULT_DESCRIPTION,
    path = '/',
    image = DEFAULT_IMAGE,
    type = 'website',
    keywords = [],
    publishedTime,
    modifiedTime,
    authors = [{ name: SITE_NAME }],
    noindex = false,
}: CreateMetadataProps = {}): Metadata {
    const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN as string

    const fullUrl = new URL(path, siteUrl).toString()
    const imageUrl = new URL(image, siteUrl).toString()

    return {
        metadataBase: new URL(siteUrl),
        title,
        description,
        keywords,
        authors,
        alternates: {
            canonical: fullUrl,
        },
        robots: {
            index: !noindex,
            follow: !noindex,
            googleBot: {
                index: !noindex,
                follow: !noindex,
                'max-image-preview': 'large',
                'max-snippet': -1,
                'max-video-preview': -1,
            },
        },
        openGraph: {
            type,
            url: fullUrl,
            title,
            description,
            siteName: SITE_NAME,
            locale: 'ru_RU',
            publishedTime,
            modifiedTime,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description,
            images: [imageUrl],
        },
        category: 'entertainment',
        appLinks: {
            web: {
                url: fullUrl,
            },
        },
    }
}
