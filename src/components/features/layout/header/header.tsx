import { HeaderDesktop } from './header-desktop'
import { HeaderMobile } from './header-mobile'
import { HeaderProfileEntryPoint } from './header-profile-entry-point'

export const Header = () => {
    return (
        <header className="sticky top-0 z-[1001] bg-black">
            <div className="relative container py-3">
                <div className="block sm:hidden">
                    <HeaderMobile profileEntryPointComponent={<HeaderProfileEntryPoint />} />
                </div>

                <div className="hidden sm:block">
                    <HeaderDesktop />
                </div>
            </div>
        </header>
    )
}
