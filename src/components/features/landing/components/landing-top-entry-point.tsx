import Link from 'next/link'

export const LandingTopEntryPoint = () => {
    return (
        <Link
            href="/top-special/2025"
            className="flex h-20 items-center justify-center rounded-2xl bg-[#46CE62] bg-[url('/images/top-entry-point-bg.png')] bg-cover bg-center px-4 text-center text-lg font-bold text-white md:text-2xl"
            target="_blank"
        >
            Рейтинг обсуждаемых спешлов 2025 года
        </Link>
    )
}
