import { redirect } from 'next/navigation'

import { GetVenueBySlugResponse } from './venues.types'

export async function getVenueBySlug(slug: string): GetVenueBySlugResponse {
    const url = process.env.NEXT_PUBLIC_API_URL + '/venues/' + slug

    const res = await fetch(url)

    if (!res.ok) {
        if (res.status === 404) {
            redirect('/404')
        }

        throw new Error(res.statusText)
    }

    return res.json()
}
