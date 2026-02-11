'use client'

import { ReactNode, useEffect } from 'react'

import { SparklesIcon } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

import { WelcomeLoginButton } from './components/welcome-login-button'

type WelcomeProps = {
    username?: string
    isAuth: boolean
}

type Feature = {
    title: string
    href?: string
    text: ReactNode
    imgDesktop: string
    imgMobile: string
    isNew?: boolean
}

export const Welcome = ({ username, isAuth }: WelcomeProps) => {
    useEffect(() => {
        console.log(isAuth)
    }, [isAuth])

    const features: Feature[] = [
        {
            title: '🔔 Подписывайтесь на комиков и группы',
            href: '/blog/subscriptions',
            text: (
                <div className="space-y-2">
                    <p>Узнавайте о новинках первыми! Подписывайтесь на любимых авторов прямо на их странице.</p>
                    <p>
                        После оформления подписки Вы получаете уведомления на сайте о новом контенте. Так Вы никогда не
                        пропустите новые спешлы и шоу от своих любимых артистов.
                    </p>
                </div>
            ),
            imgDesktop: '/images/screenshots/desktop/subscriptions.jpg',
            imgMobile: '/images/screenshots/mobile/subscriptions.png',
        },
        {
            title: '🔍 Весь контент в одном месте',
            text: (
                <div className="space-y-2">
                    <p>
                        Комиков, шоу и&nbsp;группы можно легко найти через строку поиска. В&nbsp;разделе{' '}
                        <Link href="/content" className="text-blue-500 hover:text-blue-700">
                            Контент
                        </Link>{' '}
                        доступен полный каталог с&nbsp;возможностью сортировки и&nbsp;фильтрации.{' '}
                        <Link href="/comedians" className="text-blue-500 hover:text-blue-700">
                            Комики
                        </Link>{' '}
                        собраны на&nbsp;отдельной странице, а&nbsp;в&nbsp;разделе{' '}
                        <Link href="/comedians/groups" className="text-blue-500 hover:text-blue-700">
                            Группы
                        </Link>{' '}
                        представлены объединения артистов.
                    </p>
                </div>
            ),
            imgDesktop: '/images/screenshots/desktop/content-many.jpg',
            imgMobile: '/images/screenshots/mobile/content-many.png',
        },
        {
            title: '✍️ Оценивайте и пишите рецензии',
            href: '/blog/rating',
            text: (
                <p>
                    Добавляйте оценки и&nbsp;оставляйте рецензии на&nbsp;стендап-спешлы и&nbsp;юмористические шоу. Все
                    Ваши записи сохраняются в&nbsp;профиле и&nbsp;становятся частью Вашей личной истории.
                </p>
            ),
            imgDesktop: '/images/screenshots/desktop/review.jpg',
            imgMobile: '/images/screenshots/mobile/review.png',
        },
        {
            title: '🏆 Топы лучших спешлов',
            href: '/blog/rating',
            text: (
                <>
                    <p>
                        Смотрите топ стендап-спешлов за&nbsp;
                        <Link href="/top-special" className="text-blue-500 hover:text-blue-700">
                            всё время
                        </Link>{' '}
                        и&nbsp;за&nbsp;
                        <Link href="/top-special/2026" className="text-blue-500 hover:text-blue-700">
                            текущий год
                        </Link>
                        .
                    </p>
                    <p>
                        Каждая Ваша оценка влияет на&nbsp;рейтинг&nbsp;&mdash; помогите любимому концерту подняться выше
                        в&nbsp;списке!
                    </p>
                </>
            ),
            imgDesktop: '/images/screenshots/desktop/top.jpg',
            imgMobile: '/images/screenshots/mobile/top.png',
        },
        {
            title: '📊 Создайте свой профиль',
            href: '/blog/profile',
            text: (
                <div className="space-y-2">
                    <p>
                        После регистрации Вы&nbsp;получаете собственный{' '}
                        <WelcomeLoginButton caption="профиль" href={`/users/${username}`} isAuth={isAuth} />, где можно
                        увидеть:
                    </p>
                    <ul className="space-y-1">
                        <li className="relative pl-4 before:absolute before:top-3 before:left-0 before:size-1.5 before:rounded-full before:bg-gray-950">
                            все Ваши оценки и&nbsp;рецензии;
                        </li>
                        <li className="relative pl-4 before:absolute before:top-3 before:left-0 before:size-1.5 before:rounded-full before:bg-gray-950">
                            наглядную статистику по&nbsp;просмотрам;
                        </li>
                        <li className="relative pl-4 before:absolute before:top-3 before:left-0 before:size-1.5 before:rounded-full before:bg-gray-950">
                            рекомендации, которыми легко поделиться с&nbsp;другими.
                        </li>
                    </ul>
                    <p className="mt-4">
                        💡 Совет: сразу{' '}
                        <WelcomeLoginButton caption="поменяйте свой никнейм" href="/me/settings" isAuth={isAuth} />.
                        По&nbsp;умолчанию выдаётся базовый, а&nbsp;уникальное имя сделает Ваш профиль заметнее.
                    </p>
                </div>
            ),
            imgDesktop: '/images/screenshots/desktop/reviews.jpg',
            imgMobile: '/images/screenshots/mobile/profile.png',
        },
        {
            title: '💡 Предлагайте контент',
            href: '/blog/content-submit',
            text: (
                <p>
                    Не&nbsp;нашли любимое шоу или новый спешл? Сообщите нам! У&nbsp;нас есть удобная{' '}
                    <WelcomeLoginButton caption="форма" href="/content/submit" isAuth={isAuth} /> для
                    предложений&nbsp;&mdash; помогите расширить каталог <strong>Камеди Портал</strong>.
                </p>
            ),
            imgDesktop: '/images/screenshots/desktop/content-submit.jpg',
            imgMobile: '/images/screenshots/mobile/content-submit.png',
        },
    ]

    return (
        <div>
            <div className="bg-gray-950 text-white">
                <div className="wrapper relative h-130">
                    <div className="absolute inset-0 bg-[url('/images/welcome/hero.jpg')] bg-cover bg-center bg-no-repeat mask-contain mask-no-repeat sm:mask-[linear-gradient(to_right,transparent_0%,black_30%,black_70%,transparent_100%)]"></div>
                    <section className="absolute inset-0 m-auto flex flex-col items-center justify-center space-y-8 text-center md:w-2/3">
                        <h1 className="text-4xl font-bold md:text-5xl">Добро пожаловать!</h1>
                        <p className="text-lg">
                            Мы&nbsp;рады, что&nbsp;Вы присоединились к&nbsp;нам! Ниже Вы&nbsp;найдёте краткое
                            руководство по&nbsp;основным возможностям нашего портала. Надеемся, что они помогут Вам
                            максимально эффективно использовать наш сервис.
                        </p>
                    </section>
                </div>
            </div>
            <div className="wrapper flex flex-col gap-y-16 py-16 sm:gap-y-32">
                {features.map((f, i) => (
                    <section
                        key={i}
                        className={`flex flex-col items-center gap-8 sm:flex-row sm:gap-16 ${i % 2 === 1 ? 'sm:flex-row-reverse' : ''}`}
                    >
                        <div className="flex w-full flex-col items-start gap-y-4 sm:w-1/2">
                            <div className="space-y-4">
                                <h2 className="flex flex-col items-start gap-3 text-2xl font-bold">
                                    {f.isNew && (
                                        <span className="flex items-center gap-x-1 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
                                            <SparklesIcon size={16} />
                                            Новое!
                                        </span>
                                    )}
                                    {f.title}
                                </h2>
                                <div className="text-muted-foreground text-base leading-relaxed">{f.text}</div>
                            </div>

                            {f.href && (
                                <Link
                                    href={f.href}
                                    className="hidden h-10 items-center justify-center rounded-lg border border-gray-700 px-6 text-sm font-bold text-gray-700 hover:border-gray-950 hover:text-gray-950 sm:inline-flex"
                                >
                                    Подробнее
                                </Link>
                            )}
                        </div>

                        <div className="hidden w-full overflow-hidden rounded shadow-2xl sm:block sm:w-1/2">
                            <Image
                                src={f.imgDesktop}
                                alt={f.title}
                                width={800}
                                height={600}
                                className="h-auto w-full object-cover"
                            />
                        </div>

                        <div className="block w-3/4 overflow-hidden sm:hidden">
                            <Image
                                src={f.imgMobile}
                                alt={f.title}
                                width={800}
                                height={600}
                                className="m-auto h-auto object-cover"
                            />
                        </div>

                        {f.href && (
                            <Link
                                href={f.href}
                                className="flex h-10 w-full items-center justify-center rounded-lg border border-gray-700 px-6 text-sm font-bold text-gray-700 hover:border-gray-950 hover:text-gray-950 sm:hidden"
                            >
                                Подробнее
                            </Link>
                        )}
                    </section>
                ))}
            </div>
        </div>
    )
}
