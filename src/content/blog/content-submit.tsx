import Image from 'next/image'
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
            <p>Мы&nbsp;ценим вклад нашей аудитории и&nbsp;комиков. Если у&nbsp;Вас есть идея для нового контента&nbsp;&mdash; будь&nbsp;то спешл, юмористический подкаст или шоу, Вы&nbsp;можете легко предложить его для добавления в&nbsp;сервис.</p>
            <div className="space-y-4">
                <h2 className="text-lg font-semibold">Важно</h2>
                <p>Мы&nbsp;добавляем только контент, который соответствует нашим типам и&nbsp;описанию форматов. Подробности о&nbsp;подходящем контенте можно посмотреть <Link href="/blog/content-formats" className="text-blue-500 hover:text-blue-700">здесь</Link>.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-lg font-semibold">Как это работает</h2>
                <ul className="list-disc pl-12">
                    <li>Найдите кнопку &laquo;Предложить контент&raquo;</li>
                    <li>
                        На&nbsp;большом экране: это кнопка &laquo;+&raquo;, она всегда видна в&nbsp;верхней части страницы.
                    </li>
                    <li>
                        На&nbsp;мобильных устройствах: нажмите на&nbsp;меню в&nbsp;правом верхнем углу, там найдёте кнопку &laquo;Предложить контент&raquo;. Просто нажмите&nbsp;её, и&nbsp;откроется удобная форма для предложений.
                    </li>
                </ul>
            </div>
            
            <div className="space-y-4">
                <h2 className="text-lg font-semibold">Заполните форму</h2>
                <p>В&nbsp;форме есть два основных поля:</p>
                <ul className="list-disc pl-12">
                    <li><strong>Ссылка на&nbsp;видео</strong>&nbsp;&mdash; укажите прямую ссылку на&nbsp;контент, который хотите предложить.</li>
                    <li><strong>Описание видео</strong>&nbsp;&mdash; кратко расскажите, о&nbsp;чём видео, чтобы мы&nbsp;понимали, что это за&nbsp;материал и&nbsp;зачем его добавлять.</li>
                </ul>
            </div>
            
            <div className="space-y-4">
                <h2 className="text-lg font-semibold">Для комиков и авторов</h2>
                <p>Если Вы&nbsp;автор контента или хотите дать больше информации, добавьте информацию об&nbsp;авторе контента:</p>
                <ul className="list-disc pl-12">
                    <li>Ссылка на&nbsp;социальные сети или личный сайт</li>
                    <li>Краткая биография (откуда комик, когда родился, интересные факты)</li>
                    <li>Любые достижения или участие в&nbsp;проектах/шоу</li>
                </ul>
                <p>Это помогает нам добавлять больше полезной информации о&nbsp;комике и&nbsp;делать каталог качественным и&nbsp;интересным для всех пользователей.</p>
            </div>

            
            <div className="space-y-4">
                <h2 className="text-lg font-semibold">Отправьте предложение</h2>
                <p>После заполнения формы просто нажмите &laquo;Отправить&raquo;. Мы&nbsp;проверим контент&nbsp;и, если он&nbsp;подходит, добавим его на&nbsp;Камеди Портал.</p>
            </div>

            <div className="hidden w-full overflow-hidden rounded shadow-2xl sm:block">
                <Image
                    src="/images/welcome/content-submit.jpg"
                    width={1280}
                    height={1231}
                    alt="Как предложить контент для Камеди Портал"
                />
            </div>

            <div className="sm:hidden">
                <Image
                    src="/images/welcome/mobile/content-submit.png"
                    width={800}
                    height={1576}
                    alt="Как предложить контент для Камеди Портал"
                />
            </div>

            <p className="italic">
                <strong>Совет:</strong> чем точнее и&nbsp;информативнее описание, тем быстрее мы&nbsp;сможем добавить материал в&nbsp;каталог. Даже короткий комментарий к&nbsp;видео помогает нам понять контент и&nbsp;его контекст.
            </p>
        </>
    ),
}

export default article
