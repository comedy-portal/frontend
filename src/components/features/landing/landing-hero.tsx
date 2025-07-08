'use client'

import AliceCarousel from 'react-alice-carousel'

import classNames from 'classnames'

import Image from 'next/image'
import Link from 'next/link'

import 'react-alice-carousel/lib/alice-carousel.css'

export const LandingHero = () => {
    const items = [
        <Link
            key="landing-hero-item-1"
            href="https://comedyportal.ru/content/improv_show/119"
            className="mx-auto flex items-center justify-center sm:max-w-[1224px] sm:rounded-xl sm:px-6 lg:px-8"
        >
            <div
                className="relative max-h-[400px] w-full overflow-hidden bg-gray-950"
                style={{
                    WebkitMaskImage: `
                linear-gradient(to top, transparent 0%, white 20%, white 80%, transparent 100%),
                linear-gradient(to left, transparent 0%, white 20%, white 80%, transparent 100%)
            `,
                    WebkitMaskComposite: 'intersect',
                    maskComposite: 'intersect',
                    maskImage: `
                linear-gradient(to top, transparent 0%, white 20%, white 80%, transparent 100%),
                linear-gradient(to left, transparent 0%, white 20%, white 80%, transparent 100%)
            `,
                    maskSize: 'cover',
                    WebkitMaskSize: 'cover',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                }}
            >
                <Image
                    src="/images/promo/promo.jpg"
                    alt="Три Гиены"
                    width={1224}
                    height={671}
                    className="h-auto max-h-[400px] w-full object-cover"
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
