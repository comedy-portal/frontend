import ProfileEntryPoint from '@/components/features/profile-entry-point'
import { Logo } from '@/components/ui/logo'

export const Header = () => {
    return (
        <header className="flex items-center justify-between gap-x-4 p-4">
            <Logo />
            <ProfileEntryPoint />
        </header>
    )
}
