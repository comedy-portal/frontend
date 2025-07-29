import Link from 'next/link'

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
