import { HeaderDesktop } from './header-desktop'
import { HeaderMobile } from './header-mobile'

type HeaderProps = {
    username?: string
    isAuth: boolean
}

export const Header = ({ username, isAuth }: HeaderProps) => {
    return (
        <header className="sticky top-0 z-40 bg-black">
            <div className="wrapper-lg h-14">
                <div className="block h-full lg:hidden">
                    <HeaderMobile username={username} isAuth={isAuth} />
                </div>

                <div className="hidden h-full lg:block">
                    <HeaderDesktop username={username} isAuth={isAuth} />
                </div>
            </div>
        </header>
    )
}
