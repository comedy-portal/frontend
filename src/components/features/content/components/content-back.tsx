import { CircleArrowLeftIcon } from 'lucide-react'

import Link from 'next/link'

import { categories } from '@/utils/dict/categories'
import { ContentType } from '@/utils/enums/common'

type ContentBackProps = {
    contentType: ContentType
}

export const ContentBack = ({ contentType }: ContentBackProps) => {
    return (
        <Link href={`/content/${contentType.toLowerCase()}`} className="flex items-center gap-x-2 hover:text-black">
            <CircleArrowLeftIcon size={24} className="text-inherit" />
            {categories.find(category => category.type === contentType.toLowerCase())?.toBackLabel ||
                'Назад к контенту'}
        </Link>
    )
}
