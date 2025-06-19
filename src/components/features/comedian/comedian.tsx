import { ContentBlock } from '@/components/ui/content-block'
import { IComedian } from '@/utils/types/comedians'

type ComedianProps = IComedian

export const Comedian = (props: ComedianProps) => {
    return (
        <div className="flex flex-col gap-y-12">
            <div className="relative h-[600px] w-full bg-gray-100">
                <div
                    className="absolute inset-0 z-0 bg-gray-200"
                    style={{
                        backgroundImage: `url(${props.comedianImages[0]?.url || '/default-comedian-image.jpg'})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                <section className="relative z-10 flex h-full w-full items-center justify-center bg-gradient-to-t from-gray-900 to-transparent p-4 text-white">
                    <div className="flex flex-col items-center gap-y-4 text-center">
                        <h1 className="text-6xl! font-bold">{`${props.name} ${props.surname}`}</h1>
                        <p className="max-w-3/4 text-xl">{props.metaInfo?.description}</p>
                    </div>
                </section>
            </div>

            <section className="flex flex-col gap-y-8">
                <h2 className="mb-0!">Контент</h2>

                {props.content && props.content.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
                        {props.content.map(item => (
                            <ContentBlock
                                key={`landing-content-feed-item-${item.id}`}
                                id={item.id}
                                type={item.type}
                                name={item.name}
                                imageUrl={item.contentImages[0]?.url}
                                year={item.year}
                                avgRating={item.rating.avgRating}
                                reviewsCount={item.rating.reviewsCount}
                            />
                        ))}
                    </div>
                )}
            </section>
        </div>
    )
}
