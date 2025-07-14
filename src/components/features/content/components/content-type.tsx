import Link from 'next/link'

import { categories } from '@/utils/dict/categories'

export const ContentType = ({ type }: { type: string }) => {
    return (
        <section className="space-y-2">
            <h3 className="font-bold">Жанр</h3>
            <Link href={`/content/${type.toLowerCase()}`} className="text-gray-500 hover:text-gray-950">
                {categories.find(category => category.type === type.toLowerCase())?.label || ''}
            </Link>
        </section>
    )
}
