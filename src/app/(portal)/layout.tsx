import { AlphaBanner } from '@/components/features/layout/alpha-banner/alpha-banner'
import { FooterAuthWrapper } from '@/components/features/layout/footer/footer-auth-wrapper'
import { HeaderAuthWrapper } from '@/components/features/layout/header/header-auth-wrapper'
import ScrollToTopButton from '@/components/features/layout/scroll-to-top-button/scroll-to-top-button'

export default function PortalLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex min-h-full flex-col">
            <AlphaBanner />
            <HeaderAuthWrapper />
            <main className="flex-1">{children}</main>
            <FooterAuthWrapper />
            <ScrollToTopButton />
        </div>
    )
}
