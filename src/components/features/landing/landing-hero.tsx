'use client'

import Link from 'next/link'

import { useDialog } from '@/utils/providers/dialog-provider'

import { SignUp } from '../auth/sign-up'

type LandingHeroProps = {
    isAuth: boolean
}

export const LandingHero = ({ isAuth }: LandingHeroProps) => {
    const dialog = useDialog()

    const handleClick = () => {
        dialog.open(<SignUp />)
    }

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
                        <h1 className="text-4xl font-bold sm:text-5xl">Камеди Портал</h1>
                        <p className="text-muted-foreground text-lg">
                            Место, где любители юмора собираются, чтобы находить свежие стендапы и новые комедийные шоу,
                            делиться мнением и&nbsp;отслеживать собственную историю просмотров.
                        </p>

                        <div className="flex justify-center gap-4">
                            {!isAuth && (
                                <button
                                    className="h-10 cursor-pointer rounded-lg bg-gray-700 px-6 text-sm font-bold text-white focus:outline-none"
                                    onClick={handleClick}
                                >
                                    Присоединиться
                                </button>
                            )}
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
