import Image from 'next/image'
import Link from 'next/link'

import { categories } from '@/utils/dict/categories'
import { ContentType } from '@/utils/enums/common'

type ContentProps = {
    type: ContentType
    name: string
    imageUrl: string | null
}

export const Content = ({ imageUrl, name, type }: ContentProps) => {
    return (
        <div className="flex flex-col gap-y-12">
            <nav className="flex gap-x-2">
                <Link href="/" className="text-blue-500 hover:underline">
                    Главная
                </Link>
                <span>|</span>
                <Link href={`/content/${type}`} className="text-blue-500 hover:underline">
                    {categories.find(category => category.type === type.toLocaleLowerCase())?.label}
                </Link>
                <span>|</span>
                <span>{name}</span>
            </nav>

            {imageUrl && <Image src={imageUrl} width={300} height={200} className="aspect-video" alt={name} />}
        </div>
    )
}
