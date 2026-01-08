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
        title: 'Топ спешлов 2025 года: итоги года в русскоязычной комедии',
        description:
            'Итоги года в русскоязычной комедии: лучший стендап-спешл 2025 года, победители рейтинга, рекомендации к просмотру и главные комедийные концерты года.',
        imageUrl: '/images/articles/top-3-specials-2025.jpg',
    },
    {
        url: '/blog/comedians-rating',
        date: '12 декабря 2025',
        title: 'Тирлист от Давида Квахаджелидзе',
        description:
            'Комик Давид Квахаджелидзе провёл в&nbsp;своём Telegram-канале серию опросов, в&nbsp;которых подписчики распределили различных комиков по&nbsp;тирлисту, основываясь лишь на&nbsp;личных ощущениях.',
        imageUrl: '/images/articles/comedians-rating.jpg',
    },
    {
        url: '/blog/subscriptions',
        date: '04 декабря 2025',
        title: 'Подписка на комиков и группы — чтобы ничего не пропускать',
        description:
            'Подписывайся на комиков и группы, чтобы первым узнавать о новых стендапах, шоу и спешлах. Получай уведомления на Comedy Portal и не пропускай новый контент.',
        imageUrl: '/images/articles/subscriptions.jpg',
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
