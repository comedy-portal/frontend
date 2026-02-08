import { Switcher } from '@/components/ui/forms/switcher'

type FilterByWithTextProps = {
    isChecked: boolean
    onChange: () => void
}

export const FilterByWithText = ({ isChecked, onChange }: FilterByWithTextProps) => {
    return (
        <div className="flex items-center justify-between gap-x-2">
            <div className="cursor-pointer text-sm" onClick={onChange}>
                Показать только с рецензиями
            </div>
            <Switcher checked={isChecked} onChange={onChange} />
        </div>
    )
}
