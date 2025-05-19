import { LogInIcon } from 'lucide-react'

import Link from 'next/link'

export const ProfileLogin = () => {
    return (
        <Link href="/auth" className="flex items-center gap-x-2 text-white no-underline! sm:text-sm">
            <LogInIcon size={16} className="hidden sm:block" />
            Войти
        </Link>
    )
}
