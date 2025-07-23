import { CircleArrowLeftIcon } from 'lucide-react'

import Link from 'next/link'

import { DescriptionBlock } from '@/components/ui/description-block'
import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { LinksBlock } from '@/components/ui/links-block'
import { Share } from '@/components/ui/share'
import { IGroup } from '@/utils/types/group'

import { GroupContent } from './component/group-content'

type GroupProps = {
    group: IGroup
}

export const Group = ({ group }: GroupProps) => {
    return (
        <div className="wrapper space-y-12 pt-12 pb-24">
            <div className="flex items-center justify-between">
                <Link href="/comedians/groups" className="inline-flex items-center gap-x-2 hover:text-black">
                    <CircleArrowLeftIcon size={24} className="text-inherit" />
                    Все группы
                </Link>

                <Share
                    title={group.name}
                    text={group.metaInfo?.description}
                    url={`${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/comedians/groups/${group.slug}`}
                />
            </div>

            <div className="flex flex-col-reverse gap-12 sm:flex-row">
                <section className="space-y-6 sm:space-y-0">
                    <h2 className="text-2xl font-bold sm:hidden">Все видео</h2>
                    <div className="flex flex-1 flex-col gap-y-12">
                        <GroupContent content={group.content} />
                    </div>
                </section>

                <div className="flex shrink-0 flex-col sm:w-[368px]">
                    <ImageWithFallback
                        src={group.groupImages[0]?.url}
                        alt={`${group.name}`}
                        width={100}
                        height={100}
                        className="mb-12 aspect-square w-full rounded-lg"
                    />

                    <div className="flex flex-col gap-y-6">
                        {group.metaInfo?.description && (
                            <section className="space-y-6">
                                <h1 className="text-4xl font-bold">{group.name}</h1>
                                <DescriptionBlock text={group.metaInfo.description} limit={500} />
                            </section>
                        )}

                        <section className="space-y-2">
                            <h3 className="font-bold">Участники</h3>
                            {group.comedians.map(comedian => (
                                <div key={`group-author-${comedian.id}`}>
                                    <Link
                                        href={`/comedians/${comedian.slug.toLowerCase()}`}
                                        className="text-gray-500 hover:text-gray-950"
                                    >
                                        {comedian.name} {comedian.surname}
                                    </Link>
                                </div>
                            ))}
                        </section>

                        <LinksBlock caption="Ссылки" links={group.metaInfo?.links || []} />
                    </div>
                </div>
            </div>
        </div>
    )
}
