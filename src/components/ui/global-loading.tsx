import { MicIcon } from 'lucide-react'

export const GlobalLoading = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-y-8 bg-gray-950 font-semibold text-white">
            <div className="relative flex items-center justify-center">
                <div className="absolute h-20 w-20 animate-spin rounded-full border-4 border-gray-500 border-t-white" />
                <MicIcon size={48} className="z-10" />
            </div>
            <div>Загрузка</div>
        </div>
    )
}
