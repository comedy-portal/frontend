import { UserHeader } from './components/user-header'

type UserPrivateProps = {
    username: string
}

export const UserPrivate = ({ username }: UserPrivateProps) => {
    return (
        <div>
            <UserHeader username={username} />
            <div className="container py-12">
                <p className="text-center text-gray-500">
                    This is private user profile area for <strong>{username}</strong>.<br />
                    Only the user can see this content.
                </p>
                {/* You can add more user-specific components or content here */}
            </div>
        </div>
    )
}
