import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { IComedian } from '@/utils/types/comedian'

import { ComedianBack } from './components/comedian-back'
import { ComedianContent } from './components/comedian-content'

type ComedianProps = {
    comedian: IComedian
}

export const Comedian = ({ comedian }: ComedianProps) => {
    return (
        <div className="wrapper-lg sm: space-y-12 pt-12 pb-24">
            <ComedianBack />

            <div className="flex flex-col-reverse gap-12 sm:flex-row">
                <div className="flex flex-1 flex-col gap-y-12">
                    <ComedianContent content={comedian.content} />
                </div>

                <div className="flex shrink-0 flex-col sm:w-[392px]">
                    <ImageWithFallback
                        src={`/images/comedians/${comedian.slug}.jpg`}
                        alt={`${comedian.name}`}
                        width={100}
                        height={100}
                        className="mb-12 aspect-square w-full rounded-lg"
                    />

                    <div className="flex flex-col gap-y-6">
                        <section className="space-y-6">
                            <h1 className="text-4xl font-bold">
                                {comedian.name} {comedian.surname}
                            </h1>
                            <div>{comedian.metaInfo?.description}</div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
