import { ChevronRightIcon } from 'lucide-react'

import Link from 'next/link'

import { ContentSortBy } from '@/redux/services/content/content.types'
import { Order } from '@/utils/enums/common'

import { LandingComediansFeed } from './components/landing-comedians-feed'
import { LandingContentFeed } from './components/landing-content-feed'
import { LandingTopEntryPoint } from './components/landing-top-entry-point'
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
                    <LandingTopEntryPoint />

                    <section className="flex flex-col gap-y-6">
                        <div className="flex items-center justify-between">
                            <Link
                                href="/content?sort=date_desc"
                                className="flex w-full items-center justify-between gap-x-2"
                            >
                                <h2 className="text-2xl font-semibold">Последние релизы</h2>
                                <ChevronRightIcon size={24} className="block sm:hidden" />
                            </Link>
                            <Link
                                href="/content?sort=date_desc"
                                className="mt-1 hidden items-center text-sm text-nowrap text-blue-500 sm:inline-flex"
                            >
                                Посмотреть все
                            </Link>
                        </div>

                        <LandingContentFeed sortBy={ContentSortBy.DATE} order={Order.DESC} take={10} isAuth={isAuth} />
                    </section>

                    <section className="flex flex-col gap-y-6">
                        <div className="flex items-center justify-between">
                            <Link
                                href="/content?sort=rating_desc"
                                className="flex w-full items-center justify-between gap-x-2"
                            >
                                <h2 className="text-2xl font-semibold">Рекомендуемое</h2>
                                <ChevronRightIcon size={24} className="block sm:hidden" />
                            </Link>
                            <Link
                                href="/content?sort=rating_desc"
                                className="mt-1 hidden items-center text-sm text-nowrap text-blue-500 sm:inline-flex"
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
                            <Link href="/content" className="flex w-full items-center justify-between gap-x-2">
                                <h2 className="text-2xl font-semibold">Недавно добавленное</h2>
                                <ChevronRightIcon size={24} className="block sm:hidden" />
                            </Link>
                            <Link
                                href="/content"
                                className="mt-1 hidden items-center text-sm text-nowrap text-blue-500 sm:inline-flex"
                            >
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
                            <Link href="/comedians" className="flex w-full items-center justify-between gap-x-2">
                                <h2 className="text-2xl font-semibold">Комики</h2>
                                <ChevronRightIcon size={24} className="block sm:hidden" />
                            </Link>
                            <Link
                                href="/comedians"
                                className="mt-1 hidden items-center text-sm text-nowrap text-blue-500 sm:inline-flex"
                            >
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
