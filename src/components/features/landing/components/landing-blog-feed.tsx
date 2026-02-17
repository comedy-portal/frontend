'use client'

import ScrollContainer from 'react-indiana-drag-scroll'

import { BlogFeedItem } from '@/components/features/blog/components/blog-feed-item'
import { getAllArticles } from '@/utils/helpers/blog'

export const LandingBlogFeed = () => {
    const articles = getAllArticles({ limit: 10 })
    return (
        <ScrollContainer className="grid auto-cols-[280px] grid-flow-col gap-3 overflow-x-auto">
            {articles.map(article => (
                <BlogFeedItem
                    key={article.slug}
                    slug={article.slug}
                    date={article.date}
                    image={article.preview.image}
                    title={article.preview.title}
                    description={article.preview.description}
                />
            ))}
        </ScrollContainer>
    )
}
