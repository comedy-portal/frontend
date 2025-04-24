import { notFound } from 'next/navigation'

import { GetContentManyRequest, GetContentManyResponse } from './content.types'

export async function getContentMany(getContentManyRequest: GetContentManyRequest): Promise<GetContentManyResponse> {
    const url = process.env.NEXT_PUBLIC_API_URL + '/content' + '?' + new URLSearchParams(getContentManyRequest)
    const res = await fetch(url)

    if (!res.ok) {
        if (res.status === 404) {
            notFound()
        }

        throw new Error(res.statusText)
    }

    return res.json()
}
