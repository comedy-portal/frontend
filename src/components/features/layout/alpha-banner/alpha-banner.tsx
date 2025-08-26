import Link from 'next/link'

export const AlphaBanner = () => {
    return (
        <div className="border-t border-gray-300 bg-red-50 px-4 py-2 text-center text-sm text-gray-500 sm:px-6 lg:px-8">
            Проект находится в{' '}
            <Link href="/about/alpha" className="text-blue-500 hover:text-blue-700">
                разработке
            </Link>
            , и мы будем рады Вашим отзывам и предложениям.
        </div>
    )
}
