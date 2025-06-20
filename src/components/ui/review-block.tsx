import { StarIcon } from 'lucide-react'

import Link from 'next/link'

export const ReviewBlock = () => {
    return (
        <div className="space-y-4 rounded-lg border-l-4 border-green-100 bg-green-50 p-4">
            <div className="flex items-start justify-between">
                <div className="text-sm">
                    <Link
                        href="/users/oskolsky"
                        className="font-semibold text-black! no-underline! hover:text-blue-500!"
                    >
                        oskolsky
                    </Link>
                    <div className="text-gray-500">21 ноября 2025</div>
                </div>
                <div className="flex items-center gap-x-2 text-sm">
                    <StarIcon size={16} fill="rgb(245, 197, 24)" stroke="rgb(245, 197, 24)" />
                    <strong>10 / 10</strong>
                </div>
            </div>

            <div>
                Тестовый отзыв пользователя. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
        </div>
    )
}
