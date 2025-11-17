'use client'

import { ArrowRightIcon, XIcon } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

import { getTripadvancerBannerClosed, setTripadvancerBannerClosed } from '@/redux/features/app-slice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { internalApi } from '@/redux/services/internal/internal.api'

export const AlphaBanner = () => {
    const dispatch = useAppDispatch()
    const { data, isLoading } = internalApi.useGetEdgeGeoQuery()
    const isClosed = useAppSelector(getTripadvancerBannerClosed)

    if (isLoading || isClosed || data?.countryCode?.toUpperCase() === 'RU') {
        return null
    }

    const handleClose = () => {
        dispatch(setTripadvancerBannerClosed(true))
    }

    return (
        <div className="relative flex h-8 items-center bg-[#1890FF] px-6 sm:justify-center sm:px-0" data-nosnippet>
            <Link
                href="https://tripadvancer.com?utm_source=comedy_portal"
                className="flex items-center gap-x-4"
                target="_blank"
                rel="noreferrer"
            >
                <Image
                    src="/images/tripadvancer.png"
                    alt="Tripadvancer"
                    width={288}
                    height={32}
                    className="absolute top-0 left-0 z-0 opacity-50 md:static md:opacity-100"
                />
                <span className="relative z-10 flex items-center gap-x-1 whitespace-nowrap text-white">
                    <span className="hidden sm:block">Ваш журнал путешествий на</span> <strong>Tripadvancer</strong>
                    <ArrowRightIcon size={16} />
                </span>
            </Link>

            <div
                className="absolute top-2 right-2 h-4 w-4 cursor-pointer text-white lg:top-1/2 lg:right-4 lg:-translate-y-1/2"
                onClick={handleClose}
            >
                <XIcon size={16} />
            </div>
        </div>
    )
}
