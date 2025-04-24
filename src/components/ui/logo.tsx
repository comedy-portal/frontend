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
            className={classNames('flex items-center gap-x-2 font-bold text-white uppercase no-underline!', className)}
        >
            <MicIcon strokeWidth={2.5} />
            Comedy Portal
        </Link>
    )
}
