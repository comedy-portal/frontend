import { Nav } from '@/components/ui/nav'

type LegalProps = {
    children: React.ReactNode
}

export const Legal = ({ children }: LegalProps) => {
    return (
        <div className="wrapper-sm py-8 sm:py-16">
            <div className="flex flex-col gap-y-4 sm:gap-y-8">
                <h1 className="mb-0!">Юридические документы</h1>
                <Nav
                    items={[
                        {
                            label: 'Пользовательское соглашение',
                            href: '/legal/terms-of-use',
                        },
                        {
                            label: 'Политика конфиденциальности',
                            href: '/legal/privacy-policy',
                        },
                    ]}
                />
                {children}
            </div>
        </div>
    )
}
