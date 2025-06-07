import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Comedian } from '@/components/features/comedian/comedian'
import { getComedianBySlug } from '@/services/comedians'

type Params = Promise<{ slug: string }>

export default async function ComedianPage(props: { params: Params }) {
    const params = await props.params
    const comedian = await getComedianBySlug(params.slug)

    if (!comedian) {
        notFound()
    }

    return (
        <div className="flex flex-col gap-y-12">
            <nav className="flex gap-x-2">
                <Link href="/" className="text-blue-500 hover:underline">
                    Главная
                </Link>
                <span>|</span>
                <Link href="/comedians" className="text-blue-500 hover:underline">
                    Комики
                </Link>
                <span>|</span>
                <span>
                    {comedian.name} {comedian.surname}
                </span>
            </nav>

            <Comedian {...comedian} />
        </div>
    )
}
