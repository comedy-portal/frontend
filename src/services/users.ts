import { GetUserByNameResponse } from './users.type'

export async function getUserByName(username: string): GetUserByNameResponse {
    const url = process.env.NEXT_PUBLIC_API_URL + '/users/' + username
    const res = await fetch(url)

    if (!res.ok) {
        if (res.status === 404) {
            throw new Error('User not found')
        }

        throw new Error(res.statusText)
    }

    return res.json()
}
