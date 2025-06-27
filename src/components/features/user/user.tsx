import { Nav } from '@/components/ui/nav'

type UserProps = {
    username: string
    children: React.ReactNode
}

export const User = ({ username, children }: UserProps) => {
    const lowerUsername = username.toLowerCase()

    return (
        <div className="wrapper-sm py-8 sm:py-16">
            <div className="flex flex-col gap-y-4 sm:gap-y-8">
                <h1 className="mb-0!">{username}</h1>
                <Nav
                    items={[
                        {
                            label: 'Рецензии',
                            href: `/users/${lowerUsername}/reviews`,
                        },
                        {
                            label: 'Избранное',
                            href: `/users/${lowerUsername}/watchlists`,
                        },
                    ]}
                />
                {children}
            </div>
        </div>
    )
}
