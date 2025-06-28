import { Nav } from '@/components/ui/nav'

type LegalProps = {
    children: React.ReactNode
}

export const Comedians = ({ children }: LegalProps) => {
    return (
        <div className="wrapper-lg py-8 sm:py-16">
            <div className="flex flex-col gap-y-4 sm:gap-y-8">
                <h1 className="mb-0!">Комики</h1>
                <Nav
                    items={[
                        {
                            label: 'Соло-комики',
                            href: '/comedians',
                        },
                        {
                            label: 'Группы',
                            href: '/comedians/groups',
                        },
                    ]}
                />
                {children}
            </div>
        </div>
    )
}
