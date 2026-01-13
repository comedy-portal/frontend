import { blogArticles } from '@/content/blog'
import { BlogArticle } from '@/utils/types/blog'

export function sortArticlesByDate(articles: BlogArticle[]) {
    return [...articles].sort((a, b) => +new Date(b.date) - +new Date(a.date))
}

export function getAllArticles(
    options: {
        limit?: number
        excludeSlug?: string
    } = {},
): BlogArticle[] {
    let articles = [...blogArticles]

    if (options.excludeSlug) {
        articles = articles.filter(article => article.slug !== options.excludeSlug)
    }

    articles.sort((a, b) => +new Date(b.date) - +new Date(a.date))

    if (typeof options.limit === 'number') {
        articles = articles.slice(0, options.limit)
    }

    return articles
}

export function getArticle(slug: string) {
    return blogArticles.find(a => a.slug === slug)
}
