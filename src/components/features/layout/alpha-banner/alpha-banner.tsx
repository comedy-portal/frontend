import Link from 'next/link'

export const AlphaBanner = () => {
    return (
        <div className="bg-red-50 px-4 py-2 text-center text-sm sm:px-6 lg:px-8">
            Проект находится в разработке, и мы будем рады вашим отзывам и предложениям.
            <br />
            <Link href="/about/alpha" className="text-blue-500 hover:text-blue-700">
                Узнать больше об альфа-версии
            </Link>
        </div>
    )
}
