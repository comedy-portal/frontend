import { MicIcon } from 'lucide-react'

import Link from 'next/link'

type HeaderMobileLogoProps = {
    closeMobileMenu: () => void
}

export const HeaderMobileLogo = ({ closeMobileMenu }: HeaderMobileLogoProps) => {
    return (
        <Link
            href="/"
            className="relative flex h-full items-center gap-x-2 whitespace-nowrap text-white"
            onClick={closeMobileMenu}
        >
            <MicIcon size={28} strokeWidth={2} />
            <div className="text-[20px] leading-none font-extrabold uppercase">ComedyPortal</div>
        </Link>
    )
}
