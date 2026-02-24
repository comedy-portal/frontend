import { ReactNode } from 'react'

export type BlogArticleMetadata = {
    title: string
    description: string
    keywords?: string[]
}

export type BlogArticlePreview = {
    image: string
    title: string
    description: string
}

export type BlogArticle = {
    slug: string
    date: string
    preview: BlogArticlePreview
    metadata: BlogArticleMetadata
    title: string
    content: ReactNode
}
