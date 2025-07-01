import { MicIcon } from 'lucide-react'

export default function Loading() {
    return (
        <div className="flex h-screen w-screen animate-pulse flex-col items-center justify-center gap-y-4 font-semibold">
            <MicIcon size={48} />
            <div>Загрузка ...</div>
        </div>
    )
}
