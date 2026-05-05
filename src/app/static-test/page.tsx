import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Static Test | ComedyPortal',
    description: 'Static availability test page.',
    robots: {
        index: false,
        follow: false,
    },
}

export default function StaticTestPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-white px-6 text-gray-950">
            <section className="max-w-xl space-y-4 text-center">
                <h1 className="text-3xl font-bold">Static Test Page</h1>
                <p className="text-base text-gray-600">
                    This page is intentionally static and does not read cookies, headers, auth state, or server API
                    data.
                </p>
                <p className="text-sm text-gray-500">Path: /static-test</p>
            </section>
        </main>
    )
}
