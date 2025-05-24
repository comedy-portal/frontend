import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-white text-center">
            <div className="container flex items-center justify-between p-4 text-sm">
                <div>&copy; Comedy Portal 2025</div>

                <div>
                    <Link href="/privacy">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    )
}
