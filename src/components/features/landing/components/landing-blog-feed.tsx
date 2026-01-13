'use client'

import { BlogFeed } from '@/components/features/blog/components/blog-feed'
import { getAllArticles } from '@/utils/helpers/blog'

export const LandingBlogFeed = () => {
    const articles = getAllArticles({ limit: 4 })
    return <BlogFeed articles={articles} />
}
