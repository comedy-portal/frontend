import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { IGroup } from '@/utils/types/group'

import { GroupBack } from './component/group-back'
import { GroupContent } from './component/group-content'

type GroupProps = {
    group: IGroup
}

export const Group = ({ group }: GroupProps) => {
    return (
        <div className="wrapper-lg sm: space-y-12 pt-12 pb-24">
            <GroupBack />

            <div className="flex flex-col-reverse gap-12 sm:flex-row sm:gap-6">
                <div className="flex flex-1 flex-col gap-y-12">
                    <GroupContent content={group.content} />
                </div>

                <div className="flex shrink-0 flex-col sm:w-[392px]">
                    <ImageWithFallback
                        src={group.groupImages[0]?.url}
                        alt={`${group.name}`}
                        width={100}
                        height={100}
                        className="mb-12 aspect-square w-full rounded-lg"
                    />

                    <div className="flex flex-col gap-y-6">
                        <section className="space-y-6">
                            <h1 className="text-4xl font-bold">{group.name}</h1>
                            <div>{group.metaInfo?.description}</div>
                        </section>

                        <section className="space-y-2">
                            <h3 className="font-bold">Авторы</h3>
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
                    </div>
                </div>
            </div>
        </div>
    )
}
