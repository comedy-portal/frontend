'use client'

import classNames from 'classnames'
import { CircleArrowLeftIcon } from 'lucide-react'

import Link from 'next/link'

import { SubscribeButton } from '@/components/features/common/subscribe-button'
import { DescriptionBlock } from '@/components/ui/description-block'
import { GlobalLoading } from '@/components/ui/global-loading'
import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { LinksBlock } from '@/components/ui/links-block'
import { Share } from '@/components/ui/share'
import { messages } from '@/messages'
import { groupsAPI } from '@/utils/redux/services/groups/groups.api'
import { SubscriptionType } from '@/utils/redux/services/subscriptions/subscriptions.types'

import { GroupContent } from './component/group-content'
import { GroupFacts } from './component/group-facts'

type GroupProps = {
    slug: string
    isAuth: boolean
}

export const Group = ({ slug, isAuth }: GroupProps) => {
    const { data, isSuccess, error } = groupsAPI.useGetGroupsBySlugQuery(slug)

    if (!isSuccess) {
        return <GlobalLoading />
    }

    if (error) {
        return <div>{messages.COMMON_ERROR_MESSAGE}</div>
    }

    return (
        <div className="wrapper space-y-12 pt-12 pb-24">
            <Link href="/comedians/groups" className="inline-flex items-center gap-x-2 hover:text-black">
                <CircleArrowLeftIcon size={24} className="text-inherit" />
                Все группы
            </Link>

            <div className="flex flex-col-reverse gap-12 lg:flex-row">
                <div className="flex flex-1 flex-col gap-y-12">
                    {data.metaInfo?.facts && data.metaInfo.facts.length > 0 && (
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold">Факты</h2>
                            <GroupFacts facts={data.metaInfo.facts} />
                        </section>
                    )}

                    <section className="flex-1 space-y-6">
                        <h2
                            className={classNames('text-2xl font-bold', {
                                'block lg:hidden': !data.metaInfo?.facts || data.metaInfo.facts.length === 0,
                            })}
                        >
                            Все видео
                        </h2>
                        <div className="flex flex-col gap-y-12">
                            <GroupContent content={data.content} isAuth={isAuth} />
                        </div>
                    </section>
                </div>

                <div className="flex shrink-0 flex-col gap-y-12 md:flex-row md:gap-x-6 lg:w-[300px] lg:flex-col xl:w-[368px]">
                    <ImageWithFallback
                        src={`/images/groups/${slug}.jpg`}
                        alt={`${data.name}`}
                        width={100}
                        height={100}
                        className="aspect-square w-full rounded-lg md:size-[300px] lg:size-auto"
                    />

                    <div className="flex flex-col gap-y-6">
                        {data.metaInfo?.description && (
                            <section className="space-y-6">
                                <h1 className="text-4xl font-bold">{data.name}</h1>
                                <DescriptionBlock text={data.metaInfo.description} limit={200} />
                            </section>
                        )}

                        <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-12 lg:flex-col lg:gap-x-0">
                            <section className="space-y-2">
                                <h3 className="font-bold">Участники</h3>
                                {data.comedians.map(comedian => (
                                    <div key={`group-author-${comedian.id}`}>
                                        <Link
                                            href={`/comedians/${comedian.slug.toLowerCase()}`}
                                            className="text-blue-500 hover:text-blue-700"
                                        >
                                            {comedian.name} {comedian.surname}
                                        </Link>
                                    </div>
                                ))}
                            </section>

                            <LinksBlock caption="Ссылки" links={data.metaInfo?.links || []} />

                            <div className="flex flex-col gap-y-6">
                                <SubscribeButton
                                    id={data.id}
                                    type={SubscriptionType.GROUP}
                                    isActive={(data.groupSubscriptions?.length ?? 0) > 0}
                                    isAuth={isAuth}
                                />

                                <Share
                                    title={data.name}
                                    text={data.metaInfo?.description}
                                    url={`${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/comedians/groups/${data.slug}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
