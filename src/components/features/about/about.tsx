import { Nav } from '@/components/ui/nav'

type Props = {
    children: React.ReactNode
}

export const About = ({ children }: Props) => {
    return (
        <div className="wrapper-sm py-8 sm:py-16">
            <div className="flex flex-col gap-y-4 sm:gap-y-8">
                <h1 className="mb-0!">О проекте</h1>
                <Nav
                    items={[
                        {
                            label: 'Кто мы?',
                            href: '/about',
                        },
                        {
                            label: 'Разбираемся в форматах',
                            href: '/about/formats',
                        },
                    ]}
                />
                {children}
            </div>
        </div>
    )
}
