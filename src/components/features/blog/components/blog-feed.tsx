import { BlogArticle } from '@/utils/types/blog'

import { BlogFeedItem } from './blog-feed-item'

type BlogFeedProps = {
    articles: BlogArticle[]
}

export const BlogFeed = ({ articles }: BlogFeedProps) => {
    return (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
    )
}
