import { Metadata } from 'next'

import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Внешние ссылки',
}

export default function LinksPage() {
    return (
        <ul className="p-8">
            <li>
                <Link href="https://www.imdb.com/title/tt39319619" className="link">
                    Andrey Ayrapetov: Zapros na iskrennost
                </Link>
            </li>
            <li>
                <Link href="https://www.imdb.com/title/tt39319650/" className="link">
                    Andrey Ayrapetov: Schastlivyy chelovek
                </Link>
            </li>
        </ul>
    )
}
