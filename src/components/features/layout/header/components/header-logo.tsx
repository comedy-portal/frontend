import classNames from 'classnames'
import { MicIcon } from 'lucide-react'

import Link from 'next/link'

type LogoProps = {
    className?: string
}

export const Logo = ({ className }: LogoProps) => {
    return (
        <Link href="/" className={classNames('relative flex h-full items-center gap-x-2 whitespace-nowrap', className)}>
            <MicIcon size={26} strokeWidth={2.5} />
            <div>
                <div className="text-[10px] leading-none font-semibold text-white">Alpha</div>
                <div className="leading-none font-bold uppercase">ComedyPortal</div>
            </div>
        </Link>
    )
}
