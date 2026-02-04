import Image from 'next/image'

import { BlogArticle } from '@/utils/types/blog'

// prettier-ignore
const article: BlogArticle = {
    slug: 'subscriptions',
    date: '2025-12-04',

    preview: {
        image: '/images/articles/subscriptions.jpg',
        title: 'Подписка на комиков и группы',
        description: 'Подписывайтесь на комиков и группы, чтобы первыми узнавать о новых стендапах, шоу и спешлах. Получайте уведомления на Камеди Портал и не пропускайте новый контент.',
    },

    metadata: {
        title: 'Подписка на комиков и группы — чтобы ничего не пропускать',
        description: 'Подписывайтесь на комиков и группы, чтобы первыми узнавать о новых стендапах, шоу и спешлах. Получайте уведомления на Камеди Портал и не пропускайте новый контент.',
        keywords: [
            'подписка на комиков',
            'подписаться на комика',
            'уведомления о новых стендапах',
            'следить за любимыми комиками',
            'уведомления о новом стендапе',
            'новые выступления комиков',
            'подписка на группы комиков',
        ],
        openGraph: {
            type: 'article',
            title: 'Подписка на комиков и группы — чтобы ничего не пропускать',
            description: 'Подписывайтесь на комиков и группы, чтобы первыми узнавать о новых стендапах, шоу и спешлах. Получайте уведомления на Камеди Портал и не пропускайте новый контент.',
            url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/blog/subscriptions`,
            siteName: 'Comedy Portal',
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/images/articles/subscriptions.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Подписка на комиков и группы — чтобы ничего не пропускать',
                },
            ],
            locale: 'ru_RU',
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Подписка на комиков и группы — чтобы ничего не пропускать',
            description: 'Подписывайтесь на комиков и группы, чтобы первыми узнавать о новых стендапах, шоу и спешлах. Получайте уведомления на Камеди Портал и не пропускайте новый контент.',
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/images/articles/subscriptions.jpg`,
                    alt: 'Подписка на комиков и группы — чтобы ничего не пропускать',
                },
            ],
        },
    },

    title: 'Подписка на&nbsp;комиков и&nbsp;группы&nbsp;&mdash; чтобы ничего не&nbsp;пропускать',
    content: (
        <>
            <p>
                Мы&nbsp;добавили новую полезную функцию&nbsp;&mdash;{' '}
                <strong>подписки на&nbsp;комиков и&nbsp;группы</strong>.
            </p>

            <p>
                Теперь не&nbsp;нужно каждый раз вручную проверять, вышло&nbsp;ли что-то новое у&nbsp;любимого автора.
                Достаточно один раз нажать &laquo;Подписаться&raquo;&nbsp;&mdash; и&nbsp;все обновления сами найдут
                Вас.
            </p>

            <section className="space-y-4">
                <h2 className="text-lg font-semibold">Как это работает?</h2>
                <p>Всё максимально просто:</p>
                <ul className="list-disc sm:pl-12 pl-8 space-y-1">
                    <li>зайдите на страницу комика или группы;</li>
                    <li>
                        нажмите на кнопку <strong>«Подписаться»;</strong>
                    </li>
                    <li>готово.</li>
                </ul>
            </section>

            <p>
                С&nbsp;этого момента Вы&nbsp;будете получать уведомления прямо на&nbsp;сайте, на&nbsp;странице своих
                подписок, когда у этого автора появится новый контент: стендап, шоу, спешл или другой релиз.
            </p>

            <div className="hidden w-full overflow-hidden rounded shadow-2xl sm:block">
                <Image
                    src="/images/screenshots/desktop/subscriptions.jpg"
                    width={1280}
                    height={1231}
                    alt="Подписка на комиков и группы — чтобы ничего не пропускать"
                />
            </div>

            <div className="sm:hidden">
                <Image
                    src="/images/screenshots/mobile/subscriptions.png"
                    width={800}
                    height={1576}
                    alt="Подписка на комиков и группы — чтобы ничего не пропускать"
                />
            </div>

            <section className="space-y-4">
                <h2 className="text-lg font-semibold">Зачем это нужно?</h2>
                <p>Если Вы:</p>
                <ul className="list-disc sm:pl-12 pl-8 space-y-1">
                    <li>следите за&nbsp;конкретными комиками;</li>
                    <li>не&nbsp;хотите пропускать новые выступления;</li>
                    <li>устали узнавать о&nbsp;релизах случайно или слишком поздно.</li>
                </ul>
                <p>&mdash;&nbsp;подписка решает эту проблему. Вы&nbsp;сами выбираете, за&nbsp;кем следить, и&nbsp;получаете
                только те уведомления, которые реально интересны.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-lg font-semibold">Попробуйте прямо сейчас</h2>
                <p>Функция уже доступна. Подпишитесь на&nbsp;любимых авторов и&nbsp;убедитесь сами, насколько это удобно! Новые
                спешлы и шоу выходят постоянно&nbsp;&mdash; теперь Вы&nbsp;точно их&nbsp;не&nbsp;пропустите.</p>
            </section>
        </>
    ),
}

export default article
