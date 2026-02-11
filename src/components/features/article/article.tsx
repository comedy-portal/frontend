import { JSX } from 'react'

import { CalendarIcon, CircleArrowLeftIcon } from 'lucide-react'

import Link from 'next/link'

import { Share } from '@/components/features/common/share'
import { formatDate } from '@/utils/helpers/common'

type ArticleProps = {
    slug: string
    date: string
    title: string
    content: JSX.Element
}

export const Article = ({ slug, date, title, content }: ArticleProps) => {
    const articleUrl = `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/blog/${slug}`

    return (
        <article className="wrapper space-y-12 pt-12 pb-24">
            <Link href="/blog" className="inline-flex items-center gap-x-2 hover:text-black">
                <CircleArrowLeftIcon size={24} className="text-inherit" />
                Все статьи
            </Link>

            <div className="space-y-8 lg:w-2/3">
                <header className="space-y-8">
                    <h1 className="text-4xl font-bold" dangerouslySetInnerHTML={{ __html: title }} />
                    <div className="flex items-center gap-x-2 text-sm text-gray-500">
                        <CalendarIcon size={16} />
                        <time dateTime={date}>{formatDate(date)}</time>
                    </div>
                    <Share title={title} url={articleUrl} />
                </header>

                <section className="space-y-8">{content}</section>
            </div>
        </article>
    )
}
