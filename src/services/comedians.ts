import { GetComedianBySlugResponse } from './comedians.types'

export async function getComedianBySlug(slug: string): Promise<GetComedianBySlugResponse | undefined> {
    const url = process.env.NEXT_PUBLIC_API_URL + '/comedians/' + slug
    const res = await fetch(url)

    if (!res.ok) {
        return undefined
    }

    return res.json()
}
