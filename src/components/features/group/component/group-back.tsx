import { CircleArrowLeftIcon } from 'lucide-react'

import Link from 'next/link'

export const GroupBack = () => {
    return (
        <Link href="/comedians/groups" className="flex items-center gap-x-2 hover:text-black">
            <CircleArrowLeftIcon size={24} className="text-inherit" />
            Все группы
        </Link>
    )
}
