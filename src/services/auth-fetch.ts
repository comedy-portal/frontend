import { cookies } from 'next/headers'

const SILENT_AUTH_STATUSES = new Set([401, 403, 404])

export async function authFetch<T>(url: string, init?: RequestInit): Promise<T | null> {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('sAccessToken')?.value

    if (!accessToken) {
        return null
    }

    const res = await fetch(url, {
        ...init,
        cache: 'no-cache',
        headers: {
            ...init?.headers,
            Authorization: `Bearer ${accessToken}`,
        },
    })

    if (SILENT_AUTH_STATUSES.has(res.status)) {
        return null
    }

    if (!res.ok) {
        console.error('[authFetch] unexpected error', res.status, await res.text())
        return null
    }

    return res.json()
}
