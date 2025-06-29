import { BirdIcon } from 'lucide-react'

type EmptyMessageProps = {
    children: React.ReactNode
}

export const EmptyMessage = ({ children }: EmptyMessageProps) => {
    return (
        <div className="flex items-start gap-x-4">
            <BirdIcon strokeWidth={1} size={40} className="text-gray-400" />
            <div className="text-sm text-gray-400">{children}</div>
        </div>
    )
}
