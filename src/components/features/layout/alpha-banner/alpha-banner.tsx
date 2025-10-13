'use client'

import { XIcon } from 'lucide-react'

import Link from 'next/link'

import { getTripadvancerBannerClosed, setTripadvancerBannerClosed } from '@/redux/features/app-slice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

export const AlphaBanner = () => {
    const dispatch = useAppDispatch()
    const isClosed = useAppSelector(getTripadvancerBannerClosed)

    if (isClosed) {
        return null
    }

    const handleClose = () => {
        dispatch(setTripadvancerBannerClosed(true))
    }

    return (
        <div className="relative bg-blue-50 px-4 py-2 text-center text-sm sm:px-6 lg:px-8">
            <Link
                href="https://tripadvancer.com"
                className="text-gray-700 hover:text-gray-950"
                target="_blank"
                rel="noopener noreferrer"
            >
                Tripadvancer – находите лучшие достопримечательности, делитесь отзывами и ведите журнал своих
                путешествий!
            </Link>
            <div
                className="hover:text-black-950 absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                onClick={handleClose}
            >
                <XIcon size={16} />
            </div>
        </div>
    )
}
