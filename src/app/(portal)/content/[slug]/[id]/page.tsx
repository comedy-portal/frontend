import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Content } from '@/components/features/content/content'
import { getContentById } from '@/services/content'
import { categories } from '@/utils/dict/categories'

type Params = Promise<{ id: number }>

export default async function ContentPage(props: { params: Params }) {
    const params = await props.params
    const content = await getContentById(params.id)

    if (!content) {
        notFound()
    }

    return (
        <div className="flex flex-col gap-y-12">
            <nav className="flex gap-x-2">
                <Link href="/" className="text-blue-500 hover:underline">
                    Главная
                </Link>
                <span>|</span>
                <Link href={`/content/${content.type.toLowerCase()}`} className="text-blue-500 hover:underline">
                    {categories.find(category => category.type === content.type.toLowerCase())?.label}
                </Link>
                <span>|</span>
                <span>{content.name}</span>
            </nav>

            <Content name={content.name} imageUrl={content.contentImages[0].url} type={content.type} />
        </div>
    )
}
