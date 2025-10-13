'use client'

import AliceCarousel from 'react-alice-carousel'

import classNames from 'classnames'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/forms/button'

import 'react-alice-carousel/lib/alice-carousel.css'

export const LandingHero = () => {
    // const items = [
    //     <div
    //         key="landing-hero-item-2"
    //         className="mx-auto flex items-center justify-center sm:max-w-[1224px] sm:px-6 lg:px-8"
    //     >
    //         <section className="m-auto flex h-[400px] items-center justify-center bg-gray-950 bg-[url('/images/welcome/welcome.jpg')] bg-cover bg-center bg-no-repeat px-4 text-center text-white sm:px-6 lg:px-8">
    //             <div className="space-y-10 sm:w-2/3">
    //                 <h1 className="text-4xl font-bold sm:text-5xl">Комеди Портал</h1>
    //                 <p className="text-muted-foreground text-lg">
    //                     Место, где любители юмора собираются, чтобы открывать новое, делиться мнением и&nbsp;отслеживать
    //                     собственную историю просмотров.
    //                 </p>
    //                 <div className="flex justify-center gap-4">
    //                     <Button>Присоединиться</Button>
    //                     <Button variant="outline">Узнать больше</Button>
    //                 </div>
    //             </div>
    //         </section>
    //     </div>,
    //     <Link
    //         key="landing-hero-item-1"
    //         href="/top-special/2025"
    //         className="mx-auto flex items-center justify-center sm:max-w-[1224px] sm:px-6 lg:px-8"
    //     >
    //         <div className="relative max-h-[400px] w-full bg-gray-950 sm:overflow-hidden sm:rounded-2xl">
    //             <Image
    //                 src="/images/promo/top-special-banner.jpg"
    //                 alt="Топ Спешл 2025"
    //                 width={1224}
    //                 height={671}
    //                 className="aspect-video h-auto max-h-[400px] w-full object-cover"
    //             />
    //         </div>
    //     </Link>,
    // ]

    return (
        <div className="relative flex items-center justify-center border bg-gray-950 sm:pt-10 sm:pb-20">
            {/* <AliceCarousel
                mouseTracking
                disableButtonsControls
                infinite
                items={items}
                autoPlay
                autoPlayInterval={7000}
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
            /> */}

            <div
                key="landing-hero-item-2"
                className="mx-auto flex items-center justify-center sm:max-w-[1224px] sm:px-6 lg:px-8"
            >
                <section className="m-auto flex h-[400px] items-center justify-center bg-gray-950 bg-[url('/images/welcome/welcome.jpg')] bg-cover bg-center bg-no-repeat px-4 text-center text-white sm:px-6 lg:px-8">
                    <div className="space-y-10 sm:w-2/3">
                        <h1 className="text-4xl font-bold sm:text-5xl">Комеди Портал</h1>
                        <p className="text-muted-foreground text-lg">
                            Место, где любители юмора собираются, чтобы находить свежие стендапы и новые комедийные шоу,
                            делиться мнением и&nbsp;отслеживать собственную историю просмотров.
                        </p>

                        <div className="flex justify-center gap-4">
                            <button className="h-10 cursor-pointer rounded-lg bg-gray-700 px-6 text-sm font-bold text-white focus:outline-none">
                                Присоединиться
                            </button>
                            <Link
                                href="/welcome"
                                className="flex h-10 cursor-pointer items-center justify-center rounded-lg border border-white px-6 text-sm font-bold text-nowrap text-white"
                                target="_blank"
                            >
                                Узнать больше
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
