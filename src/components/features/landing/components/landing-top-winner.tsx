import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { Medal } from '@/components/ui/medal'

export const LandingTopWinner = () => {
    return (
        <div className="flex items-start gap-x-8 rounded-2xl bg-[#46CE62] bg-[linear-gradient(rgba(70,206,98,.75),rgba(70,206,98,.4)),url('/images/top-winner-bg.jpg')] bg-top bg-no-repeat p-4">
            <ImageWithFallback
                src="https://res.cloudinary.com/dmsuxn72e/image/upload/c_fill,w_1920,h_1080,g_auto/f_webp/q_auto/2f194b40-f46a-46b9-b35f-6c9fd194d840?_a=BAVAfVDW0"
                width={500}
                height={500}
                className="rounded-lg object-cover"
                alt=""
            />

            <div className="flex flex-col gap-y-8">
                <div className="flex items-center gap-x-4">
                    <Medal place={1} />
                    <div className="text-xl font-bold text-white">Первое места в рейтинге спешлов 2025 года!</div>
                </div>

                <div className="text-white">
                    <div className="text-2xl font-bold">30 серебрянников</div>
                    <div>Василий Медведев</div>
                </div>
            </div>
        </div>
    )
}
