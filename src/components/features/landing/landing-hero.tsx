'use client'

import Image from 'next/image'

export const LandingHero = () => {
    return (
        <div className="flex items-center justify-center bg-black sm:pt-10 sm:pb-20">
            <Image
                src="/images/hero/hero-2.webp"
                alt="Landing Hero"
                width={1216}
                height={400}
                className="align-top sm:rounded-xl"
            />
        </div>
    )
}
