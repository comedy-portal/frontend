import { HeaderDesktop } from './header-desktop/header-desktop'
// TEMP TEST: auth wrappers are disabled to compare production behavior without SSR auth.
// Restore these imports together with the wrapper components below.
// import { HeaderDesktopAuthWrapper } from './header-desktop/header-desktop-auth-wrapper'
import { HeaderMobile } from './header-mobile/header-mobile'
// import { HeaderMobileAuthWrapper } from './header-mobile/header-mobile-auth-wrapper'

export const Header = () => {
    return (
        <header className="sticky top-0 z-40 bg-gray-950" data-nosnippet>
            <div className="wrapper block h-14 lg:hidden">
                {/* TEMP TEST: render anonymous header without reading auth cookies during SSR. */}
                {/* <HeaderMobileAuthWrapper /> */}
                <HeaderMobile username={null} isAuth={false} />
            </div>

            <div className="wrapper hidden h-16 lg:block">
                {/* TEMP TEST: render anonymous header without reading auth cookies during SSR. */}
                {/* <HeaderDesktopAuthWrapper /> */}
                <HeaderDesktop username={null} isAuth={false} />
            </div>
        </header>
    )
}
