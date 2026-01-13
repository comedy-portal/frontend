import { JSX } from 'react'

import { Metadata } from 'next'

export type BlogArticle = {
    slug: string
    date: string // ISO
    preview: {
        image: string
        title: string
        description: string
    }
    metadata: Metadata
    title: string
    content: JSX.Element
}
