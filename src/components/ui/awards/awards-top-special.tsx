import Link from 'next/link'

import { Medal } from '@/components/ui/medal'

type AwardsTopSpecialType = {
    name: string
}

const TOP_SPECIAL_CONFIG: Record<string, { place: 1 | 2 | 3; text: string }> = {
    '2025-top-special-1': {
        place: 1,
        text: 'Первое место в рейтинге спешлов 2025 года!',
    },
    '2025-top-special-2': {
        place: 2,
        text: 'Второе место в рейтинге спешлов 2025 года!',
    },
    '2025-top-special-3': {
        place: 3,
        text: 'Третье место в рейтинге спешлов 2025 года!',
    },
}

export const AwardsTopSpecial = ({ name }: AwardsTopSpecialType) => {
    const config = TOP_SPECIAL_CONFIG[name]

    if (!config) return null

    return (
        <Link
            href="/blog/top-3-specials-2025"
            target="_blank"
            className="flex h-20 items-center justify-center gap-x-4 rounded-2xl bg-[#46CE62] bg-[linear-gradient(rgba(70,206,98,1),rgba(70,206,98,.4)),url('/images/top-entry-point-bg.png')] bg-top-left px-4 text-lg font-bold text-white md:text-xl"
        >
            <Medal place={config.place} />
            <div>{config.text}</div>
        </Link>
    )
}
