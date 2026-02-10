import { Metadata } from 'next'

import { redirect } from 'next/navigation'

import { Article } from '@/components/features/article/article'
import { getArticle } from '@/utils/helpers/blog'

type Params = Promise<{ slug: string }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params
    const article = getArticle(params.slug)
    return article?.metadata ?? {}
}

export default async function BlogArticlePage(props: { params: Params }) {
    const params = await props.params
    const article = getArticle(params.slug)

    if (!article) {
        redirect('/404')
    }

    return <Article slug={article.slug} date={article.date} title={article.title} content={article.content} />
}
