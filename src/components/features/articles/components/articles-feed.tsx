import { ArticlesFeedItem } from './articles-feed-item'

type IArticles = {
    url: string
    date: string
    title: string
    description: string
    imageUrl: string
}

const articlesData: IArticles[] = [
    {
        url: '/articles/comedians-rating',
        date: '12 декабря 2025',
        title: 'Тирлист от Давида',
        description:
            'Комик Давид Квахаджелидзе провёл в&nbsp;своём Telegram-канале серию опросов, в&nbsp;которых подписчики распределили различных комиков по&nbsp;тирлисту, основываясь лишь на&nbsp;личных ощущениях.',
        imageUrl: '/images/articles/comedians-rating.jpg',
    },
]

type ArticlesFeedProps = {
    length?: number
}

export const ArticlesFeed = ({ length }: ArticlesFeedProps) => {
    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articlesData.slice(0, length).map((article, index) => (
                <ArticlesFeedItem
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
