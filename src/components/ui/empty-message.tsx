type EmptyMessageProps = {
    children: React.ReactNode
}

export const EmptyMessage = ({ children }: EmptyMessageProps) => {
    return <div className="text-gray-400">{children}</div>
}
