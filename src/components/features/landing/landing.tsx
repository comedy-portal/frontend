import Link from 'next/link'

import { Button } from '@/components/ui/forms/button'
import { ContentSortBy } from '@/redux/services/content/content.types'
import { Order } from '@/utils/enums/common'

import { LandingComediansFeed } from './components/landing-comedians-feed'
import { LandingContentFeed } from './components/landing-content-feed'
import { LandingHero } from './landing-hero'

export const Landing = () => {
    return (
        <div>
            <LandingHero />

            <div className="wrapper py-8 sm:py-16">
                <section className="mb-8 flex flex-col items-center gap-y-6 text-center sm:mb-20">
                    <div className="flex flex-col items-center gap-y-2">
                        <h1 className="m-auto text-3xl font-bold sm:w-2/3">Комеди Портал</h1>
                        <h2 className="m-auto text-xl">Смотрите лучший стендап и комедийные шоу онлайн</h2>
                    </div>
                    <p className="m-auto text-gray-600 sm:w-3/4">
                        <strong>Комеди Портал</strong> — это ваш источник качественного юмора. Смотрите
                        стендап‑выступления, комедийные шоу и выступления от лучших русских комиков. Оценивайте,
                        делитесь, оставляйте отзывы и формируйте топ выступлений.
                    </p>
                </section>

                <div className="flex flex-col gap-y-6 sm:gap-y-12">
                    <section className="flex flex-col gap-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-semibold">Новое видео</h2>
                            <Link
                                href="/content?sort=date_desc"
                                className="mt-1 inline-flex items-center text-sm text-blue-500"
                            >
                                Посмотреть все
                            </Link>
                        </div>

                        <LandingContentFeed sortBy={ContentSortBy.DATE} order={Order.DESC} take={4} />
                    </section>

                    <section className="flex flex-col gap-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-semibold">Рекомендуемое</h2>
                            <Link
                                href="/content?sort=rating_desc"
                                className="mt-1 inline-flex items-center text-sm text-blue-500"
                            >
                                Посмотреть все
                            </Link>
                        </div>

                        <LandingContentFeed sortBy={ContentSortBy.RATING} order={Order.DESC} take={4} />
                    </section>

                    <section className="flex flex-col gap-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-semibold">Комики</h2>
                            <Link href="/comedians" className="mt-1 inline-flex items-center text-sm text-blue-500">
                                Все комики
                            </Link>
                        </div>

                        <LandingComediansFeed />
                    </section>
                </div>
            </div>
        </div>
    )
}
