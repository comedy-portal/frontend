import { notFound } from 'next/navigation'

import { GetComedianBySlugResponse } from './comedians.types'

export async function getComedianBySlug(slug: string): GetComedianBySlugResponse {
    const url = process.env.NEXT_PUBLIC_API_URL + '/comedians/' + slug
    const res = await fetch(url)

    if (!res.ok) {
        if (res.status === 404) {
            notFound()
        }

        throw new Error(res.statusText)
    }

    return res.json()
}
