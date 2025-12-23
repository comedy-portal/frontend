import { CalendarIcon, CircleArrowLeftIcon } from 'lucide-react'
import { Metadata } from 'next'

import Image from 'next/image'
import Link from 'next/link'

import { Share } from '@/components/ui/share'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Подписка на комиков и группы — чтобы ничего не пропускать',
    description:'Подписывайся на комиков и группы, чтобы первым узнавать о новых стендапах, шоу и спешлах. Получай уведомления на Comedy Portal и не пропускай новый контент.',
    keywords: ['подписка на комиков', 'подписаться на комика', 'уведомления о новых стендапах', 'следить за любимыми комиками', 'уведомления о новом стендапе', 'новые выступления комиков', 'подписка на группы комиков'],
    openGraph: {
        title: 'Подписка на комиков и группы — чтобы ничего не пропускать',
        description: 'Подписывайся на комиков и группы, чтобы первым узнавать о новых стендапах, шоу и спешлах. Получай уведомления на Comedy Portal и не пропускай новый контент.',
        url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/articles/subscriptions`,
        siteName: 'Comedy Portal',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/images/articles/subscriptions.jpg`,
                width: 1200,
                height: 630,
                type: 'image/jpeg',
                alt: 'Подписка на комиков и группы — чтобы ничего не пропускать',
            },
        ],
        locale: 'ru_RU',
        type: 'article',
    },
    twitter: {
        title: 'Подписка на комиков и группы — чтобы ничего не пропускать',
        description: 'Подписывайся на комиков и группы, чтобы первым узнавать о новых стендапах, шоу и спешлах. Получай уведомления на Comedy Portal и не пропускай новый контент.',
        card: 'summary_large_image',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/images/articles/subscriptions.jpg`,
                alt: 'Подписка на комиков и группы — чтобы ничего не пропускать',
            },
        ],
    }
}

export default function SubscriptionsPage() {
    return (
        <div className="wrapper space-y-12 pt-12 pb-24">
            <Link href="/blog" className="inline-flex items-center gap-x-2 hover:text-black">
                <CircleArrowLeftIcon size={24} className="text-inherit" />
                Все статьи
            </Link>

            <div className="space-y-8 lg:w-2/3">
                <h1 className="text-4xl font-bold">Подписка на комиков и группы — чтобы ничего не пропускать</h1>
                <div className="flex items-center gap-x-2 text-sm text-gray-500">
                    <CalendarIcon size={16} /> 04 декабря 2025
                </div>
                <div className="block sm:hidden">
                    <Share
                        title="Подписка на комиков и группы — чтобы ничего не пропускать"
                        url={`${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/blog/subscriptions`}
                    />
                </div>
                <p>
                    Мы добавили новую полезную функцию - <strong>подписки на комиков и группы</strong>.
                </p>
                <p>
                    Теперь не нужно каждый раз вручную проверять, вышло ли что-то новое у любимого автора. Достаточно
                    один раз нажать “Подписаться” — и все обновления сами найдут тебя.
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
                    С этого момента ты будешь получать уведомления прямо на сайте, на странице своих подписок, когда у
                    этого автора появится новый контент: стендап, шоу, спешл или другой релиз.
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
                        <li>следишь за конкретными комиками</li>
                        <li>не хочешь пропускать новые выступления</li>
                        <li>устал узнавать о релизах случайно или слишком поздно</li>
                    </ul>
                    <br />— подписка решает эту проблему. Ты сам выбираешь, за кем следить, и получаешь только те
                    уведомления, которые реально интересны.
                </div>
                <p>
                    <strong>Попробуй прямо сейчас</strong>
                </p>
                Функция уже доступна. Подпишись на любимых авторов и убедись сам, насколько это удобно! Новые спешлы и
                шоу выходят постоянно — теперь ты точно их не пропустишь.
            </div>
        </div>
    )
}
