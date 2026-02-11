'use client'

import { BookmarkIcon, CircleUserIcon, SettingsIcon, StarIcon, UsersIcon } from 'lucide-react'
import { useScrollLock } from 'usehooks-ts'

import { Search } from '@/components/features/common/search/search'

import { HeaderLogin } from '../../components/header-login'
import { HeaderSubmitContent } from '../../components/header-submit-content'
import { HeaderMobileMenuLink, HeaderMobileMenuLinkProps } from './header-mobile-menu-link'
import { HeaderMobileSignoutButton } from './header-mobile-signout-button'

type HeaderMobileMenuProps = {
    closeMobileMenu: () => void
    isAuth: boolean
    username: string | null
}

export const HeaderMobileMenu = ({ closeMobileMenu, isAuth, username }: HeaderMobileMenuProps) => {
    useScrollLock()

    const mainNav: HeaderMobileMenuLinkProps[] = [
        { href: '/top-special/2026', label: 'Топ спешлов', highlight: true },
        { href: '/content', label: 'Контент' },
        { href: '/comedians', label: 'Комики' },
        { href: '/blog', label: 'Блог' },
        { href: '/about', label: 'О проекте' },
    ]

    const userNav: HeaderMobileMenuLinkProps[] =
        isAuth && username
            ? [
                  {
                      href: `/users/${username}`,
                      label: username,
                      Icon: CircleUserIcon,
                      scroll: false,
                  },
                  {
                      href: `/users/${username}`,
                      label: 'Оценки и рецензии',
                      Icon: StarIcon,
                  },
                  {
                      href: `/users/${username}/watchlists`,
                      label: 'Избранное',
                      Icon: BookmarkIcon,
                  },
                  {
                      href: '/me/subscriptions',
                      label: 'Подписки',
                      Icon: UsersIcon,
                  },
                  {
                      href: '/me/settings',
                      label: 'Настройки',
                      Icon: SettingsIcon,
                  },
              ]
            : []

    return (
        <div className="wrapper absolute top-full right-0 left-0 flex h-screen flex-col gap-y-6 bg-gray-950 py-3">
            <Search closeMobileMenu={closeMobileMenu} />

            <nav className="flex flex-col gap-y-4 text-sm text-gray-300">
                {mainNav.map(item => (
                    <HeaderMobileMenuLink key={item.href} {...item} onClick={closeMobileMenu} />
                ))}
            </nav>

            <hr className="border-gray-700" />

            <nav className="flex flex-col gap-y-4 text-sm text-gray-300">
                {isAuth && username ? (
                    userNav.map(item => <HeaderMobileMenuLink key={item.label} {...item} onClick={closeMobileMenu} />)
                ) : (
                    <div className="flex flex-col gap-y-6">
                        <HeaderSubmitContent isAuth={isAuth} onClick={closeMobileMenu} />
                        <HeaderLogin onClick={closeMobileMenu} />
                    </div>
                )}
            </nav>

            {isAuth && (
                <>
                    <hr className="border-gray-700" />
                    <div className="flex flex-col gap-y-4 text-sm text-gray-300">
                        <HeaderSubmitContent isAuth={isAuth} onClick={closeMobileMenu} />
                        <HeaderMobileSignoutButton onClick={closeMobileMenu} />
                    </div>
                </>
            )}
        </div>
    )
}
