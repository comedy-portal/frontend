import { ChevronRightIcon } from 'lucide-react'

import Link from 'next/link'

import { ContentSortBy } from '@/redux/services/content/content.types'
import { Order } from '@/utils/enums/common'

import { LandingBlogFeed } from './components/landing-blog-feed'
import { LandingComediansFeed } from './components/landing-comedians-feed'
import { LandingContentFeed } from './components/landing-content-feed'
import { LandingTopEntryPoint } from './components/landing-top-entry-point'
import { LandingTopWinner } from './components/landing-top-winner'
import { LandingHero } from './landing-hero'

type LandingProps = {
    isAuth: boolean
}

export const Landing = ({ isAuth }: LandingProps) => {
    return (
        <div>
            <LandingHero isAuth={isAuth} />

            <div className="wrapper py-8 sm:py-16" data-nosnippet>
                <div className="flex flex-col gap-y-6 sm:gap-y-12">
                    <LandingTopWinner isAuth={isAuth} />

                    <section className="flex flex-col gap-y-6">
                        <div className="flex items-center justify-between">
                            <Link
                                href="/content?sort=date_desc"
                                className="flex w-full items-center justify-between gap-x-2"
                            >
                                <h3 className="text-2xl font-semibold">Последние релизы</h3>
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
                                href="/content?sort=rating_desc&not_watched=true"
                                className="flex w-full items-center justify-between gap-x-2"
                            >
                                <h3 className="text-2xl font-semibold">Смотрите также</h3>
                                <ChevronRightIcon size={24} className="block sm:hidden" />
                            </Link>
                            <Link
                                href="/content?sort=rating_desc&not_watched=true"
                                className="mt-1 hidden items-center text-sm text-nowrap text-blue-500 sm:inline-flex"
                            >
                                Посмотреть все
                            </Link>
                        </div>

                        <LandingContentFeed
                            sortBy={ContentSortBy.RATING}
                            order={Order.DESC}
                            take={10}
                            notWatched={true}
                            isAuth={isAuth}
                        />
                    </section>

                    <section className="flex flex-col gap-y-6">
                        <div className="flex items-center justify-between">
                            <Link href="/content" className="flex w-full items-center justify-between gap-x-2">
                                <h3 className="text-2xl font-semibold">Недавно добавленное</h3>
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
                                <h3 className="text-2xl font-semibold">Комики</h3>
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

                    <section className="flex flex-col gap-y-6">
                        <div className="flex items-center justify-between">
                            <Link href="/blog" className="flex w-full items-center justify-between gap-x-2">
                                <h3 className="text-2xl font-semibold">Блог</h3>
                                <ChevronRightIcon size={24} className="block sm:hidden" />
                            </Link>
                            <Link
                                href="/blog"
                                className="mt-1 hidden items-center text-sm text-nowrap text-blue-500 sm:inline-flex"
                            >
                                Все статьи
                            </Link>
                        </div>

                        <LandingBlogFeed />
                    </section>
                </div>
            </div>
        </div>
    )
}
