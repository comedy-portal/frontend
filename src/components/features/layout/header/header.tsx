import { HeaderDesktop } from './header-desktop'
import { HeaderMobile } from './header-mobile'
import { HeaderProfileEntryPoint } from './header-profile-entry-point'

export const Header = () => {
    return (
        <header className="sticky top-0 z-40 bg-black">
            <div className="wrapper-lg h-14">
                <div className="block h-full lg:hidden">
                    <HeaderMobile profileEntryPointComponent={<HeaderProfileEntryPoint />} />
                </div>

                <div className="hidden h-full lg:block">
                    <HeaderDesktop />
                </div>
            </div>
        </header>
    )
}
