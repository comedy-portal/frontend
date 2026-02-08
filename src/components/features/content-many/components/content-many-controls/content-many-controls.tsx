import { ContentManyControlsFilter } from './content-many-controls-filter'
import { ContentManyControlsSort } from './content-many-controls-sort'

type ContentManyControlsProps = {
    currentYear: number
    isAuth: boolean
}

export const ContentManyControls = ({ currentYear, isAuth }: ContentManyControlsProps) => {
    return (
        <div className="flex items-center justify-between">
            <ContentManyControlsFilter currentYear={currentYear} isAuth={isAuth} />
            <ContentManyControlsSort />
        </div>
    )
}
