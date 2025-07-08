'use client'

import AliceCarousel from 'react-alice-carousel'

import classNames from 'classnames'

import Image from 'next/image'

import 'react-alice-carousel/lib/alice-carousel.css'

export const LandingHero = () => {
    const items = [
        <div
            className="mx-auto flex items-center justify-center sm:max-w-[1224px] sm:px-6 lg:px-8"
            key={`landing-hero-item-1`}
        >
            <Image
                src="/images/hero/hero-2.webp"
                alt="Landing Hero"
                width={1216}
                height={400}
                className="align-top sm:rounded-xl"
            />
        </div>,
        <div
            className="mx-auto flex items-center justify-center sm:max-w-[1224px] sm:px-6 lg:px-8"
            key={`landing-hero-item-2`}
        >
            <Image
                src="/images/hero/hero-2.webp"
                alt="Landing Hero"
                width={1216}
                height={400}
                className="align-top sm:rounded-xl"
            />
        </div>,
        <div
            className="mx-auto flex items-center justify-center sm:max-w-[1224px] sm:px-6 lg:px-8"
            key={`landing-hero-item-3`}
        >
            <Image
                src="/images/hero/hero-2.webp"
                alt="Landing Hero"
                width={1216}
                height={400}
                className="align-top sm:rounded-xl"
            />
        </div>,
    ]

    return (
        <div className="relative flex items-center justify-center border bg-gray-950 sm:pt-10 sm:pb-20">
            <AliceCarousel
                mouseTracking
                disableButtonsControls
                infinite
                items={items}
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
