import { ContentSortBy } from '@/redux/services/content/content.types'
import { Order } from '@/utils/enums/common'

import { LandingBlock } from './components/landing-block'
import { LandingBlogFeed } from './components/landing-blog-feed'
import { LandingComediansFeed } from './components/landing-comedians-feed'
import { LandingContentFeed } from './components/landing-content-feed'
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
                    {/* <LandingTopEntryPoint /> */}
                    <LandingTopWinner />

                    <section className="flex flex-col gap-y-6">
                        <h3 className="text-2xl font-semibold">В тренде</h3>
                        <LandingContentFeed sortBy={ContentSortBy.DATE} order={Order.DESC} take={10} isAuth={isAuth} />
                    </section>

                    <LandingBlock title="Последние релизы" moreTitle="Посмотреть все" url="/content?sort=date_desc">
                        <LandingContentFeed sortBy={ContentSortBy.DATE} order={Order.DESC} take={10} isAuth={isAuth} />
                    </LandingBlock>

                    <LandingBlock
                        title="Смотрите также"
                        moreTitle="Посмотреть все"
                        url="/content?sort=rating_desc&not_watched=true"
                    >
                        <LandingContentFeed
                            sortBy={ContentSortBy.RATING}
                            order={Order.DESC}
                            take={10}
                            notWatched={true}
                            isAuth={isAuth}
                        />
                    </LandingBlock>

                    <LandingBlock title="Недавно добавленное" moreTitle="Посмотреть все" url="/content">
                        <LandingContentFeed
                            sortBy={ContentSortBy.CREATED_AT}
                            order={Order.DESC}
                            take={10}
                            isAuth={isAuth}
                        />
                    </LandingBlock>

                    <LandingBlock title="Комики" moreTitle="Все комики" url="/comedians">
                        <LandingComediansFeed />
                    </LandingBlock>

                    <LandingBlock title="Блог" moreTitle="Все статьи" url="/blog">
                        <LandingBlogFeed />
                    </LandingBlock>
                </div>
            </div>
        </div>
    )
}
