import { HeaderDesktop } from './header-desktop'
import { HeaderMobile } from './header-mobile'

type HeaderProps = {
    username?: string
    isAuth: boolean
}

export const Header = ({ username, isAuth }: HeaderProps) => {
    return (
        <header className="sticky top-0 z-40 bg-gray-950">
            <div className="wrapper-lg block h-12 lg:hidden">
                <HeaderMobile username={username} isAuth={isAuth} />
            </div>

            <div className="wrapper-lg hidden h-16 lg:block">
                <HeaderDesktop username={username} isAuth={isAuth} />
            </div>
        </header>
    )
}
