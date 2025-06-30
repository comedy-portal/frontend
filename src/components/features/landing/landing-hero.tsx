'use client'

import { Carousel } from 'react-bootstrap'

import Image from 'next/image'

export const LandingHero = () => {
    return (
        <Carousel className="w-full rounded-lg bg-gray-500">
            <Carousel.Item>
                <div className="h-[400px] w-full">
                    <Image src="/images/hero/hero-1.webp" alt="Landing Hero" fill className="rounded-lg object-cover" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="h-[400px] w-full">
                    <Image src="/images/hero/hero-2.webp" alt="Landing Hero" fill className="rounded-lg object-cover" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="h-[400px] w-full">
                    <Image src="/images/hero/hero-3.jpg" alt="Landing Hero" fill className="rounded-lg object-cover" />
                </div>
            </Carousel.Item>
        </Carousel>
    )
}
