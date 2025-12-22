import { BlogFeedItem } from './blog-feed-item'

type IArticles = {
    url: string
    date: string
    title: string
    description: string
    imageUrl: string
}

const articlesData: IArticles[] = [
    {
        url: '/blog/top-3-specials-2025',
        date: '01 января 2026',
        title: 'Топ спешл 2025 года: итоги года в русскоязычной комедии',
        description:
            'Итоги года в русскоязычной комедии: лучший стендап-спешл 2025 года, победители рейтинга, рекомендации к просмотру и главные комедийные концерты года.',
        imageUrl: '/images/articles/top-3-specials-2025.jpg',
    },
    {
        url: '/blog/comedians-rating',
        date: '12 декабря 2025',
        title: 'Тирлист от Давида',
        description:
            'Комик Давид Квахаджелидзе провёл в&nbsp;своём Telegram-канале серию опросов, в&nbsp;которых подписчики распределили различных комиков по&nbsp;тирлисту, основываясь лишь на&nbsp;личных ощущениях.',
        imageUrl: '/images/articles/comedians-rating.jpg',
    },
]

type BlogFeedProps = {
    length?: number
}

export const BlogFeed = ({ length }: BlogFeedProps) => {
    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articlesData.slice(0, length).map((article, index) => (
                <BlogFeedItem
                    key={`articles-feed-item-${index}`}
                    url={article.url}
                    date={article.date}
                    title={article.title}
                    description={article.description}
                    imageUrl={article.imageUrl}
                />
            ))}
        </div>
    )
}
