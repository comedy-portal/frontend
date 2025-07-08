import { CircleArrowLeftIcon } from 'lucide-react'

import Link from 'next/link'

export const ComedianBack = () => {
    return (
        <Link href="/comedians" className="flex items-center gap-x-2 hover:text-black">
            <CircleArrowLeftIcon size={24} className="text-inherit" />
            Все комики
        </Link>
    )
}
