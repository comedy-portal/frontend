import Link from 'next/link'

export const Footer = async () => {
    return (
        <footer className="border-t border-gray-300">
            <div className="wrapper space-y-4 py-6 lg:space-y-2">
                <div className="flex flex-col items-center justify-between gap-2 text-sm sm:flex-row sm:gap-4">
                    <div className="font-bold">&copy; 2025 Comedy Portal</div>
                    <nav className="flex flex-col gap-x-4 sm:flex-row">
                        <Link href="/legal/terms-of-use" className="text-gray-500 hover:text-gray-950">
                            Пользовательское соглашение
                        </Link>
                        <Link href="/legal/privacy-policy" className="text-gray-500 hover:text-gray-950">
                            Политика конфиденциальности
                        </Link>
                    </nav>
                </div>

                <div className="text-center text-xs text-gray-500 lg:text-left">
                    * Министерством юстиции РФ признан иностранным агентом
                </div>
            </div>
        </footer>
    )
}
