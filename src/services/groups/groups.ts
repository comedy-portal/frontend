import { redirect } from 'next/navigation'

import { GetGroupsBySlugResponse } from './groups.types'

export async function getGroupsBySlug(slug: string): GetGroupsBySlugResponse {
    const url = process.env.NEXT_PUBLIC_API_URL + '/groups/' + slug
    const res = await fetch(url)

    if (!res.ok) {
        if (res.status === 404) {
            redirect('/404')
        }

        throw new Error(res.statusText)
    }

    return res.json()
}
