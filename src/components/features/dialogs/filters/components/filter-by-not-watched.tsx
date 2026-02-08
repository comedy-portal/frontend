import { Switcher } from '@/components/ui/forms/switcher'

type FilterByNotWatchedProps = {
    isChecked: boolean
    onChange: () => void
}

export const FilterByNotWatched = ({ isChecked, onChange }: FilterByNotWatchedProps) => {
    return (
        <div className="flex items-center justify-between gap-x-2">
            <div className="cursor-pointer text-sm" onClick={onChange}>
                Скрыть просмотренные
            </div>
            <Switcher checked={isChecked} onChange={onChange} />
        </div>
    )
}
