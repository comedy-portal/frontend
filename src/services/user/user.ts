import { authFetch } from '../auth-fetch'
import { GetUserDataResponse } from './user.types'

export function getUserData() {
    return authFetch<GetUserDataResponse>(process.env.NEXT_PUBLIC_API_URL + '/user')
}
