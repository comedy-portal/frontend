import ProfileEntryPoint from '@/components/features/common/profile-entry-point'
import { Logo } from '@/components/ui/logo'

import { Nav } from './nav'

export const Header = () => {
    return (
        <header className="bg-black">
            <div className="container flex items-center justify-between gap-x-4 px-4 py-3">
                <div className="flex flex-row-reverse items-center justify-center gap-x-2 sm:flex-row! sm:gap-x-8">
                    <Logo className="text-white" />
                    <Nav />
                </div>
                <ProfileEntryPoint />
            </div>
        </header>
    )
}
