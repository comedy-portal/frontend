'use client'

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
        <div className="relative flex h-130 w-full items-center justify-center overflow-hidden bg-gray-950">
            <div className="relative flex h-130.5 items-center justify-center">
                <div
                    className="h-130.5 w-auto bg-[url('/images/promo/comedy-portal.jpg')] mask-[linear-gradient(to_right,transparent_0%,black_30%,black_70%,transparent_100%)] bg-contain bg-center bg-no-repeat mask-contain mask-no-repeat"
                    style={{
                        aspectRatio: '1440 / 522',
                    }}
                />
            </div>

            <div className="absolute inset-0 m-auto flex h-130.5 w-full items-center justify-start px-8 text-center md:max-w-360 md:px-12.5 md:text-left lg:px-25 xl:px-50">
                <section className="text-white md:w-150">
                    <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                        Агрегатор лучших стендапов и&nbsp;популярных шоу
                    </h1>
                    <p className="mb-12 text-lg">
                        С&nbsp;оценками, рецензиями и&nbsp;Вашей персональной историей просмотров.
                    </p>
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
                        >
                            Узнать больше
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}
