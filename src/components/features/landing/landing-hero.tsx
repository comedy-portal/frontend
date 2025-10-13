'use client'

import AliceCarousel from 'react-alice-carousel'

import classNames from 'classnames'

import Image from 'next/image'
import Link from 'next/link'

import 'react-alice-carousel/lib/alice-carousel.css'

export const LandingHero = () => {
    const items = [
        <div
            key="landing-hero-item-2"
            className="mx-auto flex items-center justify-center sm:max-w-[1224px] sm:px-6 lg:px-8"
        >
            <div className="relative max-h-[400px] w-full bg-gray-950 sm:overflow-hidden sm:rounded-2xl">
                <Image
                    src="/images/promo/comedy-portal.png"
                    alt="Comedy Portal"
                    width={1224}
                    height={671}
                    className="aspect-video h-auto max-h-[400px] w-full object-cover"
                />
            </div>
            ,
        </div>,
        <Link
            key="landing-hero-item-1"
            href="/top-special/2025"
            className="mx-auto flex items-center justify-center sm:max-w-[1224px] sm:px-6 lg:px-8"
        >
            <div className="relative max-h-[400px] w-full bg-gray-950 sm:overflow-hidden sm:rounded-2xl">
                <Image
                    src="/images/promo/top-special-banner.jpg"
                    alt="Топ Спешл 2025"
                    width={1224}
                    height={671}
                    className="aspect-video h-auto max-h-[400px] w-full object-cover"
                />
            </div>
        </Link>,
    ]

    return (
        <div className="relative flex items-center justify-center border bg-gray-950 sm:pt-10 sm:pb-20">
            <AliceCarousel
                mouseTracking
                disableButtonsControls
                infinite
                items={items}
                autoPlay
                autoPlayInterval={5000}
                responsive={{
                    0: {
                        items: 1,
                    },
                }}
                renderDotsItem={e => (
                    <div
                        className={classNames('relative h-2 w-6 cursor-pointer rounded-full border-2 border-white', {
                            'bg-white': e.isActive,
                        })}
                    />
                )}
            />
        </div>
    )
}
