import classNames from 'classnames'
import { MicIcon } from 'lucide-react'

import Link from 'next/link'

type LogoProps = {
    className?: string
}

export const Logo = ({ className }: LogoProps) => {
    return (
        <Link
            href="/"
            className={classNames(
                'flex items-center gap-x-2 font-bold whitespace-nowrap uppercase no-underline!',
                className,
            )}
        >
            <MicIcon strokeWidth={2.5} className="hidden sm:block" />
            Comedy Portal
        </Link>
    )
}
