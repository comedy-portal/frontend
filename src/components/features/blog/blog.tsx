import { getAllArticles } from '@/utils/helpers/blog'

import { BlogFeed } from './components/blog-feed'

export const Blog = () => {
    const articles = getAllArticles()
    return <BlogFeed articles={articles} />
}
