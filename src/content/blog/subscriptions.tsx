import Image from 'next/image'

import { BlogArticle } from '@/utils/types/blog'

// prettier-ignore
const article: BlogArticle = {
    slug: 'subscriptions',
    date: '2025-12-04',

    preview: {
        image: '/images/articles/subscriptions.jpg',
        title: 'Подписка на&nbsp;комиков и&nbsp;группы',
        description: 'Подписывайся на&nbsp;комиков и&nbsp;группы, чтобы первым узнавать о&nbsp;новых стендапах, шоу и&nbsp;спешлах. Получай уведомления на&nbsp;Comedy Portal и&nbsp;не&nbsp;пропускай новый контент.',
    },

    metadata: {
        title: 'Подписка на комиков и группы — чтобы ничего не пропускать',
        description: 'Подписывайся на комиков и группы, чтобы первым узнавать о новых стендапах, шоу и спешлах. Получай уведомления на Comedy Portal и не пропускай новый контент.',
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
            description: 'Подписывайся на комиков и группы, чтобы первым узнавать о новых стендапах, шоу и спешлах. Получай уведомления на Comedy Portal и не пропускай новый контент.',
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
            description: 'Подписывайся на комиков и группы, чтобы первым узнавать о новых стендапах, шоу и спешлах. Получай уведомления на Comedy Portal и не пропускай новый контент.',
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
                тебя.
            </p>

            <div>
                <strong>Как это работает?</strong>
                <br />
                Всё максимально просто:
                <ul className="list-disc pl-12">
                    <li>заходишь на страницу комика или группы</li>
                    <li>
                        нажимаешь кнопку <strong>«Подписаться»</strong>
                    </li>
                    <li>готово</li>
                </ul>
            </div>

            <p>
                С&nbsp;этого момента ты&nbsp;будешь получать уведомления прямо на&nbsp;сайте, на&nbsp;странице своих
                подписок, когда у этого автора появится новый контент: стендап, шоу, спешл или другой релиз.
            </p>

            <div className="w-full overflow-hidden rounded shadow-2xl">
                <Image
                    src="/images/welcome/subscriptions.jpg"
                    width={2560}
                    height={2560}
                    alt="Подписка на комиков и группы — чтобы ничего не пропускать"
                />
            </div>

            <div>
                <strong>Зачем это нужно?</strong>
                <br />
                Если ты:
                <ul className="list-disc pl-12">
                    <li>следишь за&nbsp;конкретными комиками</li>
                    <li>не&nbsp;хочешь пропускать новые выступления</li>
                    <li>устал узнавать о&nbsp;релизах случайно или слишком поздно</li>
                </ul>
                <br />
                &mdash;&nbsp;подписка решает эту проблему. Ты&nbsp;сам выбираешь, за&nbsp;кем следить, и&nbsp;получаешь
                только те уведомления, которые реально интересны.
            </div>

            <p>
                <strong>Попробуй прямо сейчас</strong>
                <br />
                Функция уже доступна. Подпишись на&nbsp;любимых авторов и&nbsp;убедись сам, насколько это удобно! Новые
                спешлы и шоу выходят постоянно&nbsp;&mdash; теперь ты&nbsp;точно их&nbsp;не&nbsp;пропустишь.
            </p>
        </>
    ),
}

export default article
