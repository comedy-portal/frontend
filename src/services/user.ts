import { cookies } from 'next/headers'

import { GetUserDataResponse } from './user.type'

export async function getUserData(): GetUserDataResponse {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('sAccessToken')?.value
    const url = process.env.NEXT_PUBLIC_API_URL + '/user'

    // todo: handle refresh token
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
