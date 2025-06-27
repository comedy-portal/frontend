import { ReactNode } from 'react'

import type { Metadata } from 'next/types'

import { Content } from '@/components/features/content/content'
import { getContentById } from '@/services/content'

export const metadata: Metadata = {
    robots: 'noindex, nofollow',
}

type Params = Promise<{ id: number }>

export default async function ContentLayout(props: { children: ReactNode; params: Params }) {
    const params = await props.params
    const content = await getContentById(params.id)
    return <Content content={content}>{props.children}</Content>
}
