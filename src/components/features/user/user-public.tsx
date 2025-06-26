import { UserHeader } from './components/user-header'

type UserPublicProps = {
    username: string
}

export const UserPublic = ({ username }: UserPublicProps) => {
    return (
        <div>
            <UserHeader username={username} />
            <div className="container py-12">
                <p className="text-center text-gray-500">
                    This is the public user profile area for <strong>{username}</strong>.
                </p>
                {/* You can add more user-specific components or content here */}
            </div>
        </div>
    )
}
