import { Metadata } from 'next'

import { redirect } from 'next/navigation'

import { Article } from '@/components/features/article/article'
import { getArticle } from '@/utils/helpers/blog'
import { createMetadata } from '@/utils/helpers/metadata'

type Params = Promise<{ slug: string }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params
    const article = getArticle(params.slug)

    if (!article) {
        redirect('/404')
    }

    return createMetadata({
        title: article.metadata.title,
        description: article.metadata.description,
        path: `/blog/${article.slug}`,
        image: article.preview.image,
        type: 'article',
        keywords: article.metadata.keywords,
        publishedTime: article.date,
        authors: [
            {
                name: 'Камеди Портал',
                url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/about`,
            },
        ],
    })
}

export default async function BlogArticlePage(props: { params: Params }) {
    const params = await props.params
    const article = getArticle(params.slug)

    if (!article) {
        redirect('/404')
    }

    return <Article slug={article.slug} date={article.date} title={article.title} content={article.content} />
}
