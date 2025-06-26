import { ReactNode } from 'react'

import { UserNav } from './components/user-nav'

type UserProps = {
    username: string
    children: ReactNode
}

export const User = ({ username, children }: UserProps) => {
    return (
        <div className="container py-8 sm:py-16">
            <div className="m-auto flex flex-col gap-y-4 sm:gap-y-8 lg:w-2/3">
                <h1 className="mb-0!">{username}</h1>
                <UserNav slug={username} />
                {children}
            </div>
        </div>
    )
}
