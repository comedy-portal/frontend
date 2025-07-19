import { CircleArrowLeftIcon } from 'lucide-react'

import Link from 'next/link'

import { DescriptionBlock } from '@/components/ui/description-block'
import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { LinksBlock } from '@/components/ui/links-block'
import { IComedian } from '@/utils/types/comedian'

import { ComedianContent } from './components/comedian-content'

type ComedianProps = {
    comedian: IComedian
}

export const Comedian = ({ comedian }: ComedianProps) => {
    return (
        <div className="wrapper space-y-12 pt-12 pb-24">
            <Link href="/comedians" className="flex items-center gap-x-2 hover:text-black">
                <CircleArrowLeftIcon size={24} className="text-inherit" />
                Все комики
            </Link>

            <div className="flex flex-col-reverse gap-12 sm:flex-row">
                <section className="flex-1 space-y-6 sm:space-y-0">
                    <h2 className="text-2xl font-bold sm:hidden">Все видео</h2>
                    <div className="flex flex-col gap-y-12">
                        <ComedianContent content={comedian.content} />
                    </div>
                </section>

                <div className="flex shrink-0 flex-col sm:w-[368px]">
                    <ImageWithFallback
                        src={`/images/comedians/${comedian.slug}.jpg`}
                        alt={`${comedian.name}`}
                        width={100}
                        height={100}
                        className="mb-12 aspect-square w-full rounded-lg"
                    />

                    <div className="flex flex-col gap-y-6">
                        {comedian.metaInfo?.description && (
                            <section className="space-y-6">
                                <h1 className="text-4xl font-bold">
                                    {comedian.name} {comedian.surname}&nbsp;{comedian.isAgent ? '*' : ''}
                                </h1>
                                <DescriptionBlock text={comedian.metaInfo.description} limit={500} />
                            </section>
                        )}

                        {comedian.groups.length > 0 && (
                            <section className="space-y-2">
                                <h3 className="font-bold">Группы</h3>
                                {comedian.groups.map(group => {
                                    return (
                                        <div key={`comedian-group-${group.slug}`}>
                                            <Link
                                                href={`/comedians/groups/${group.slug}`}
                                                className="text-gray-500 hover:text-gray-950"
                                            >
                                                <span>{group.name}</span>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </section>
                        )}

                        <LinksBlock caption="Ссылки" links={comedian.metaInfo?.links || []} />
                    </div>
                </div>
            </div>
        </div>
    )
}
