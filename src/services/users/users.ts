import { notFound } from 'next/navigation'

import { GetUserByNameResponse } from './users.types'

export async function getUserByName(username: string): GetUserByNameResponse {
    const url = process.env.NEXT_PUBLIC_API_URL + '/users/' + username
    const res = await fetch(url)

    if (!res.ok) {
        if (res.status === 404) {
            notFound()
        }

        throw new Error(res.statusText)
    }

    return res.json()
}
