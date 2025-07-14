import { notFound } from 'next/navigation'

import { GetContentByIdResponse, GetContentManyParams, GetContentManyResponse } from './content.types'

export async function getContentMany(getContentManyParams: GetContentManyParams): GetContentManyResponse {
    const filteredParams = Object.fromEntries(
        // Filter out undefined values from params
        // and convert all values to strings
        Object.entries(getContentManyParams).flatMap(([k, v]) => (v !== undefined ? [[k, String(v)]] : [])),
    )

    const url = process.env.NEXT_PUBLIC_API_URL + '/content' + '?' + new URLSearchParams(filteredParams).toString()
    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(res.statusText)
    }

    return res.json()
}

export async function getContentById(id: number): GetContentByIdResponse {
    const url = process.env.NEXT_PUBLIC_API_URL + '/content/' + id
    const res = await fetch(url)

    if (!res.ok) {
        if (res.status === 404) {
            notFound()
        }

        throw new Error(res.statusText)
    }

    return res.json()
}
