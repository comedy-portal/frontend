import { LogInIcon } from 'lucide-react'

import Link from 'next/link'

export const ProfileLogin = () => {
    return (
        <Link href="/auth" className="flex items-center gap-x-2 text-sm text-black no-underline!">
            <LogInIcon size={16} />
            Войти
        </Link>
    )
}
