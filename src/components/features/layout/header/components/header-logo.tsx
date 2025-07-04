import classNames from 'classnames'
import { MicIcon } from 'lucide-react'

import Link from 'next/link'

type LogoProps = {
    className?: string
}

export const Logo = ({ className }: LogoProps) => {
    return (
        <Link href="/" className={classNames('relative flex h-full items-center gap-x-2 whitespace-nowrap', className)}>
            <MicIcon strokeWidth={2.5} />
            <div className="font-bold uppercase">ComedyPortal</div>
            <div className="absolute top-1.5 right-0 text-[10px] font-semibold text-white">Alpha</div>
        </Link>
    )
}
