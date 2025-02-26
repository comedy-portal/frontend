import ProfileEntryPoint from '@/components/features/profile-entry-point'
import { Logo } from '@/components/ui/logo'

export const Header = () => {
    return (
        <header className="bg-red-100">
            <div className="container flex items-center justify-between gap-x-4 px-4 py-3">
                <Logo />
                <ProfileEntryPoint />
            </div>
        </header>
    )
}
