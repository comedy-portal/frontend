import { cookies } from 'next/headers'

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
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('sAccessToken')?.value
    const url = process.env.NEXT_PUBLIC_API_URL + '/content/' + id
    const res = await fetch(url, {
        cache: 'no-cache',
        headers: {
            Authorization: 'Bearer ' + accessToken,
        },
    })

    if (!res.ok) {
        throw new Error(res.statusText)
    }

    return res.json()
}
