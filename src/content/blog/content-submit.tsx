import Link from 'next/link'

import { BlogArticle } from '@/utils/types/blog'

// prettier-ignore
const article: BlogArticle = {
    slug: 'content-submit',
    date: '2026-01-13',

    preview: {
        image: '/images/articles/content-submit.jpg',
        title: 'Как предложить контент для Камеди Портал',
        description: 'Не нашёл любимое шоу или новый стендап? Предложи видео для Камеди Портал! Удобная форма для ссылок, описаний и информации о комиках.',
    },

    metadata: {
        title: 'Предложить контент для Камеди Портал — добавляй любимые шоу и спешлы',
        description: 'Не нашёл любимое шоу или новый стендап? Предложи видео для Камеди Портал! Удобная форма для ссылок, описаний и информации о комиках.',
        keywords: [
            'добавить комика',
            'добавить видео',
            'добавить стендап',
        ],
        openGraph: {
            type: 'article',
            title: 'Предложить контент для Камеди Портал — добавляй любимые шоу и спешлы',
            description: 'Не нашёл любимое шоу или новый стендап? Предложи видео для Камеди Портал! Удобная форма для ссылок, описаний и информации о комиках.',
            url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/blog/content-submit`,
            siteName: 'Comedy Portal',
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/images/articles/content-submit.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Предложить контент для Камеди Портал — добавляй любимые шоу и спешлы',
                },
            ],
            locale: 'ru_RU',
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Предложить контент для Камеди Портал — добавляй любимые шоу и спешлы',
            description: 'Не нашёл любимое шоу или новый стендап? Предложи видео для Камеди Портал! Удобная форма для ссылок, описаний и информации о комиках.',
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/images/articles/content-submit.jpg`,
                    alt: 'Предложить контент для Камеди Портал — добавляй любимые шоу и спешлы',
                },
            ],
        },
    },

    title: 'Как предложить контент для Камеди Портал',
    content: (
        <>
            <p>Мы&nbsp;ценим вклад нашей аудитории и&nbsp;комиков. Если у&nbsp;тебя есть идея для нового контента&nbsp;&mdash; будь&nbsp;то спешл, юмористический подкаст или шоу, ты&nbsp;можешь легко предложить его для добавления в&nbsp;сервис.</p>
            <div>
                <strong>Важно</strong>
                <br />
                <p>Мы&nbsp;добавляем только контент, который соответствует нашим типам и&nbsp;описанию форматов. Подробности о&nbsp;подходящем контенте можно посмотреть <Link href="/about/formats" className='text-blue-500 hover:text-blue-700' target='_blank'>здесь</Link>.</p>
            </div>
            <div>
                <strong>Как это работает?</strong>
                <br />
                <ul className="list-disc pl-12">
                    <li>Найди кнопку «Предложить контент»</li>
                    <li>
                        нажимаешь кнопку <strong>«Подписаться»</strong>
                    </li>
                    <li>готово</li>
                </ul>
            </div>
        </>
    ),
}

export default article
