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
import { formatDate } from '@/utils/helpers/common'
import { comediansAPI } from '@/utils/redux/services/comedians/comedians.api'
import { SubscriptionType } from '@/utils/redux/services/subscriptions/subscriptions.types'

import { ComedianContent } from './components/comedian-content'
import { ComedianFacts } from './components/comedian-facts'

type ComedianProps = {
    slug: string
    isAuth: boolean
}

export const Comedian = ({ slug, isAuth }: ComedianProps) => {
    const { data, isSuccess, error } = comediansAPI.useGetComedianBySlugQuery(slug)

    if (!isSuccess) {
        return <GlobalLoading />
    }

    if (error) {
        return <div>{messages.COMMON_ERROR_MESSAGE}</div>
    }

    return (
        <div className="wrapper space-y-12 pt-12 pb-24">
            <Link href="/comedians" className="inline-flex items-center gap-x-2 hover:text-black">
                <CircleArrowLeftIcon size={24} className="text-inherit" />
                Все комики
            </Link>

            <div className="flex flex-col-reverse gap-12 lg:flex-row">
                <div className="flex flex-1 flex-col gap-y-12">
                    {data.metaInfo?.facts && data.metaInfo.facts.length > 0 && (
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold">Факты</h2>
                            <ComedianFacts facts={data.metaInfo.facts} />
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
                            <ComedianContent content={data.content} isAuth={isAuth} />
                        </div>
                    </section>
                </div>

                <div className="flex shrink-0 flex-col gap-y-12 md:flex-row md:gap-x-6 lg:w-75 lg:flex-col xl:w-92">
                    <ImageWithFallback
                        src={`/images/comedians/${data.slug}.jpg`}
                        alt={`${data.name}`}
                        width={100}
                        height={100}
                        className="aspect-square w-full rounded-lg md:size-75 lg:size-auto"
                    />

                    <div className="flex flex-col gap-y-6">
                        {data.metaInfo?.description && (
                            <section className="space-y-6">
                                <h1 className="text-4xl font-bold">
                                    {data.name} {data.surname}&nbsp;{data.isAgent ? '*' : ''}
                                </h1>
                                <DescriptionBlock text={data.metaInfo.description} limit={200} />
                            </section>
                        )}

                        {data.birthDay && (
                            <section className="space-y-2">
                                <h3 className="font-bold">Дата рождения</h3>
                                <p>{formatDate(data.birthDay)}</p>
                            </section>
                        )}

                        {data.groups.length > 0 && (
                            <section className="space-y-2">
                                <h3 className="font-bold">Группы</h3>
                                {data.groups.map(group => {
                                    return (
                                        <div key={`comedian-group-${group.slug}`}>
                                            <Link
                                                href={`/comedians/groups/${group.slug}`}
                                                className="text-blue-500 hover:text-blue-700"
                                            >
                                                <span>{group.name}</span>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </section>
                        )}

                        <LinksBlock caption="Ссылки" links={data.metaInfo?.links || []} />

                        <SubscribeButton
                            id={data.id}
                            type={SubscriptionType.COMEDIAN}
                            isActive={(data.comedianSubscriptions?.length ?? 0) > 0}
                            isAuth={isAuth}
                        />

                        <Share
                            title={`${data.name} ${data.surname}`}
                            text={data.metaInfo?.description}
                            url={`${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/comedians/${data.slug}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
