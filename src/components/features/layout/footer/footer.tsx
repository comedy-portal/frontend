import Link from 'next/link'

export const Footer = async () => {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="container flex flex-col items-center gap-y-4 py-8 text-sm">
                <div className="flex flex-col sm:gap-y-1">
                    <nav className="text-black-40 flex flex-col flex-wrap items-center justify-center gap-x-2 sm:flex-row">
                        <Link href="/legal/terms-of-service">Пользовательское соглашение</Link>
                        <span className="hidden sm:block">•</span>
                        <Link href="/legal/privacy-policy">Политика конфиденциальности</Link>
                    </nav>
                </div>

                <div className="text-black-40 text-center">
                    <div className="text-black-40">&copy; Comedy Portal 2025</div>
                </div>
            </div>
        </footer>
    )
}
