import Link from 'next/link'

import { contentTypesDict } from '@/utils/dict/content-types'

export const ContentType = ({ type }: { type: string }) => {
    return (
        <section className="space-y-2">
            <h3 className="font-bold">Жанр</h3>
            <Link href={`/content/${type.toLowerCase()}`} className="text-blue-500 hover:text-blue-700">
                {contentTypesDict.find(contentType => contentType.slug === type.toLowerCase())?.label || ''}
            </Link>
        </section>
    )
}
