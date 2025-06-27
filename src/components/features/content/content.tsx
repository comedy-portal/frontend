import { Nav } from '@/components/ui/nav'
import { IContent } from '@/utils/types/content'

import { ContentTitle } from './components/content-title'

type ContentProps = {
    content: IContent
    children: React.ReactNode
}

export const Content = ({ content, children }: ContentProps) => {
    return (
        <div className="wrapper-sm py-8 sm:py-16">
            <div className="flex flex-col gap-y-4 sm:gap-y-8">
                <ContentTitle name={content.name} avgRating={content.rating.avgRating} />
                <Nav
                    items={[
                        {
                            label: 'Описание',
                            href: `/content/special/${content.id}`,
                            exact: true,
                        },
                        {
                            label: `Рецензии (${content.rating.reviewsCount})`,
                            href: `/content/special/${content.id}/reviews`,
                            exact: true,
                        },
                    ]}
                />
                {children}
            </div>
        </div>
        // <div className="wrapper-sm py-8 sm:py-16">
        //     <div className="flex flex-col gap-y-4 sm:gap-y-8">
        //         <h1 className="mb-0!">{content.name}</h1>
        //         <Nav
        //             items={[
        //                 {
        //                     label: 'Описание',
        //                     href: '#',
        //                 },
        //                 {
        //                     label: 'Рецензии',
        //                     href: `/content/special/${content.id}/reviews`,
        //                 },
        //             ]}
        //         />
        //         {/* <UserNav slug={username} /> */}
        //         {/* {children} */}
        //     </div>
        // </div>
        // <div className="wrapper-sm py-8 sm:py-16">
        //     <div className="flex flex-col gap-y-8">
        //         <div className="flex flex-col gap-y-2">
        //             <ContentTitle name={content.name} />
        //             <ContentAuthor
        //                 month={content.month}
        //                 year={content.year}
        //                 type={content.type}
        //                 comedians={content.comedians}
        //                 group={content.group}
        //             />
        //         </div>

        //         <ContentCover cover={content.contentImages[0]?.url} name={content.name} />

        //         <div className="flex items-center justify-between rounded bg-gray-50 p-4">
        //             <div className="flex items-center gap-x-6">
        //                 <ContentRating
        //                     avgRating={content.rating.avgRating}
        //                     reviewsCount={content.rating.reviewsCount}
        //                 />
        //                 <ContentMyRating />
        //             </div>
        //             <div className="flex items-center gap-x-6">
        //                 <ContentAddToWatchList
        //                     contentId={content.id}
        //                     isAuth={isAuth}
        //                     isInWatchlist={!!content.watchlists?.length}
        //                 />
        //                 <ContentPlay duration={content.duration} />
        //             </div>
        //         </div>

        //         <ContentDescription description={content.metaInfo?.description} />
        //         <ContentFacts facts={content.metaInfo?.facts} />
        //         <ContentReviews id={content.id} isAuth={isAuth} />
        //     </div>
        // </div>
    )
}
