import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="container flex flex-col-reverse gap-y-1 p-4 text-sm sm:flex-row sm:items-center sm:justify-between">
                <div>&copy; Comedy Portal 2025</div>

                <nav>
                    <Link href="/privacy">Политика конфиденциальности</Link>
                </nav>
            </div>
        </footer>
    )
}
