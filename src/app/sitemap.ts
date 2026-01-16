import type { MetadataRoute } from 'next'

import { categories } from '@/utils/dict/categories'

const metadataBase = new URL(process.env.NEXT_PUBLIC_WEBSITE_DOMAIN as string)

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date()

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: metadataBase.href,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${metadataBase.href}about`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${metadataBase.href}about/formats`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${metadataBase.href}about/faq`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${metadataBase.href}top-special`,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${metadataBase.href}top-special/2025`,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${metadataBase.href}top-special/2026`,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${metadataBase.href}comedians`,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${metadataBase.href}comedians/groups`,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${metadataBase.href}blog`,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${metadataBase.href}blog/subscriptions`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${metadataBase.href}blog/comedians-rating`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${metadataBase.href}blog/top-3-specials-2025`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${metadataBase.href}blog/content-submit`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${metadataBase.href}blog/content-formats`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${metadataBase.href}content`,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 0.8,
        },
    ]

    const contentRoutes: MetadataRoute.Sitemap = categories.map(({ type }) => ({
        url: `${metadataBase.href}content/${type.toLowerCase()}`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: 0.8,
    }))

    return [...staticRoutes, ...contentRoutes]
}
