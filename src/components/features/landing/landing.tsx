import { ChevronRightIcon, MedalIcon } from 'lucide-react'

import Link from 'next/link'

import { ContentSortBy } from '@/redux/services/content/content.types'
import { Order } from '@/utils/enums/common'

import { LandingComediansFeed } from './components/landing-comedians-feed'
import { LandingContentFeed } from './components/landing-content-feed'
import { LandingHero } from './landing-hero'

type LandingProps = {
    isAuth: boolean
}

export const Landing = ({ isAuth }: LandingProps) => {
    return (
        <div>
            <LandingHero isAuth={isAuth} />

            <div className="wrapper py-8 sm:py-16">
                <div className="flex flex-col gap-y-6 sm:gap-y-12">
                    <Link
                        href="/top-special/2025"
                        className="flex items-center justify-center rounded-lg border border-red-100 bg-red-50 p-4 text-center sm:justify-between sm:p-6 sm:text-left"
                    >
                        <div className="flex items-center gap-x-4">
                            <MedalIcon className="hidden shrink-0 text-red-500 sm:block" size={32} />
                            <div>
                                <div className="font-bold">Топ стендап спешлов 2025!</div>
                                <div className="text-sm text-gray-500">
                                    Выбери свой любимый спешл и помоги ему попасть в топ.
                                </div>
                            </div>
                        </div>

                        <ChevronRightIcon className="hidden sm:block" />
                    </Link>

                    <section className="flex flex-col gap-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-semibold">Последние релизы</h2>
                            <Link
                                href="/content?sort=date_desc"
                                className="mt-1 inline-flex items-center text-sm text-blue-500"
                            >
                                Посмотреть все
                            </Link>
                        </div>

                        <LandingContentFeed sortBy={ContentSortBy.DATE} order={Order.DESC} take={10} isAuth={isAuth} />
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

                        <LandingContentFeed
                            sortBy={ContentSortBy.RATING}
                            order={Order.DESC}
                            take={10}
                            isAuth={isAuth}
                        />
                    </section>

                    <section className="flex flex-col gap-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-semibold">Недавно добавленное</h2>
                            <Link href="/content" className="mt-1 inline-flex items-center text-sm text-blue-500">
                                Посмотреть все
                            </Link>
                        </div>

                        <LandingContentFeed
                            sortBy={ContentSortBy.CREATED_AT}
                            order={Order.DESC}
                            take={10}
                            isAuth={isAuth}
                        />
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
