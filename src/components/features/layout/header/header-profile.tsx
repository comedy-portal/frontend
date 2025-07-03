import { CircleUserRoundIcon } from 'lucide-react'

import Link from 'next/link'

type HeaderProfileProps = {
    username: string
}

export const HeaderProfile = ({ username }: HeaderProfileProps) => {
    return (
        <Link href={`/users/${username}`} className="flex items-center gap-x-2 text-white hover:underline sm:text-sm">
            {username}
            <CircleUserRoundIcon strokeWidth={1} />
        </Link>
    )
}
