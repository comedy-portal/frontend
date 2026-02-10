import { HeaderDesktopAuthWrapper } from './header-desktop/header-desktop-auth-wrapper'
import { HeaderMobileAuthWrapper } from './header-mobile/header-mobile-auth-wrapper'

export const Header = () => {
    return (
        <header className="sticky top-0 z-40 bg-gray-950" data-nosnippet>
            <div className="wrapper block h-14 lg:hidden">
                <HeaderMobileAuthWrapper />
            </div>

            <div className="wrapper hidden h-16 lg:block">
                <HeaderDesktopAuthWrapper />
            </div>
        </header>
    )
}
