type UserHeaderProps = {
    username: string
}

export const UserHeader = ({ username }: UserHeaderProps) => {
    return (
        <div className="border-b border-gray-200 bg-white py-12">
            <div className="container">
                <div className="flex items-end justify-between">
                    <h1 className="mb-0! text-2xl font-bold">{username}</h1>
                </div>
            </div>
        </div>
    )
}
