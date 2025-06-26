import { CircleUserRoundIcon } from 'lucide-react'

import Link from 'next/link'

type HeaderProfileProps = {
    slug: string
}

export const HeaderProfile = ({ slug }: HeaderProfileProps) => {
    return (
        <Link
            href={`/users/${slug}`}
            className="flex items-center gap-x-2 text-white no-underline! hover:underline! sm:text-sm"
        >
            <CircleUserRoundIcon strokeWidth={1} />
            Профиль
        </Link>
    )
}
