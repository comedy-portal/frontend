import Link from 'next/link'

export const Footer = async () => {
    return (
        <div>
            <div className="wrapper-lg py-2 text-xs text-gray-500">
                * Министерством юстиции РФ признан иностранным агентом
            </div>
            <footer className="border-t border-gray-300">
                <div className="wrapper-lg flex flex-col items-center justify-between gap-2 py-6 text-sm sm:flex-row sm:gap-4">
                    <div>&copy; 2025 Comedy Portal</div>
                    <nav className="flex flex-col gap-x-4 sm:flex-row">
                        <Link href="/legal/terms-of-use" className="text-gray-500 hover:text-gray-950">
                            Пользовательское соглашение
                        </Link>
                        <Link href="/legal/privacy-policy" className="text-gray-500 hover:text-gray-950">
                            Политика конфиденциальности
                        </Link>
                    </nav>
                </div>
            </footer>
        </div>
    )
}
