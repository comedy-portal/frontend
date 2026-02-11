import { AlphaBanner } from '@/components/features/common/alpha-banner'
import { CookieBanner } from '@/components/features/common/cookie-banner'
import ScrollToTopButton from '@/components/features/common/scroll-to-top-button'
import { TGBanner } from '@/components/features/common/tg-banner'
import { FooterAuthWrapper } from '@/components/features/layout/footer/footer-auth-wrapper'
import { Header } from '@/components/features/layout/header/header'

export default function PortalLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex min-h-full flex-col">
            <AlphaBanner />
            <Header />
            <main className="flex-1">{children}</main>
            <TGBanner />
            <FooterAuthWrapper />
            <ScrollToTopButton />
            <CookieBanner />
        </div>
    )
}
