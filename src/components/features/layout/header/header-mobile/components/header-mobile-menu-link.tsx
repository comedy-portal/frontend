import { ComponentType } from 'react'

import { ChevronRightIcon } from 'lucide-react'

import Link from 'next/link'

export type HeaderMobileMenuLinkProps = {
    href: string
    label: string
    Icon?: ComponentType<{ size?: number }>
    highlight?: boolean
    scroll?: boolean
}

export const HeaderMobileMenuLink = ({
    href,
    label,
    Icon = ChevronRightIcon,
    onClick,
    highlight,
    scroll = true,
}: HeaderMobileMenuLinkProps & { onClick: () => void }) => {
    return (
        <Link
            href={href}
            className={
                highlight
                    ? 'flex items-center justify-between rounded bg-[#46CE62] bg-[linear-gradient(rgba(70,206,98,.75),rgba(70,206,98,.4)),url("/images/top-entry-point-bg.png")] bg-cover bg-top bg-no-repeat p-2 font-bold text-white'
                    : 'flex items-center justify-between px-2 font-bold'
            }
            scroll={scroll}
            onClick={onClick}
        >
            {label}
            <div className={highlight ? 'text-white' : 'text-gray-700'}>
                <Icon size={20} />
            </div>
        </Link>
    )
}
