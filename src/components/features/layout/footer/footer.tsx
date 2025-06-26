import Link from 'next/link'

export const Footer = async () => {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="container space-y-1 py-3 text-sm">
                <div>&copy; 2025 Comedy Portal</div>
                <nav className="flex flex-col gap-x-2 sm:flex-row">
                    <Link href="/legal/terms-of-service" className="text-gray-500! no-underline! hover:text-black!">
                        Пользовательское соглашение
                    </Link>
                    <span className="hidden sm:block">•</span>
                    <Link href="/legal/privacy-policy" className="text-gray-500! no-underline! hover:text-black!">
                        Политика конфиденциальности
                    </Link>
                </nav>
            </div>
        </footer>
    )
}
