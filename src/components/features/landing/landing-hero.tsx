'use client'

import Snowfall from 'react-snowfall'

import Link from 'next/link'

import { SignUp } from '@/components/features/auth/sign-up'
import { useDialog } from '@/utils/providers/dialog-provider'

type LandingHeroProps = {
    isAuth: boolean
}

export const LandingHero = ({ isAuth }: LandingHeroProps) => {
    const dialog = useDialog()

    const handleClick = () => {
        dialog.open(<SignUp />)
    }

    return (
        <div className="relative flex h-[522px] w-full items-center justify-center overflow-hidden bg-gray-950">
            <Snowfall style={{ zIndex: '50' }} />
            <div className="relative flex h-[522px] items-center justify-center">
                <div
                    className="h-[522px] w-auto bg-[url('/images/promo/comedy-portal.jpg')] [mask-image:linear-gradient(to_right,transparent_0%,black_30%,black_70%,transparent_100%)] bg-contain bg-center bg-no-repeat [mask-size:contain] [mask-repeat:no-repeat]"
                    style={{
                        aspectRatio: '1440 / 522',
                    }}
                />
            </div>

            <div className="absolute inset-0 m-auto flex h-[522px] w-full items-center justify-start px-8 text-center md:max-w-[1440px] md:px-[50px] md:text-left lg:px-[100px] xl:px-[200px]">
                <section className="text-white md:w-[600px]">
                    <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                        Твой агрегатор лучших стендапов и&nbsp;популярных шоу
                    </h1>
                    <p className="mb-12 text-lg">Оценки, рецензии и&nbsp;персональная история просмотра!</p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start" data-nosnippet>
                        {!isAuth && (
                            <button
                                className="h-12 cursor-pointer rounded-lg bg-white px-6 font-bold text-gray-950 focus:outline-none"
                                onClick={handleClick}
                            >
                                Присоединиться
                            </button>
                        )}
                        <Link
                            href="/welcome"
                            className="flex h-12 cursor-pointer items-center justify-center rounded-lg border border-white px-6 font-bold text-nowrap text-white"
                            target="_blank"
                        >
                            Узнать больше
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}
