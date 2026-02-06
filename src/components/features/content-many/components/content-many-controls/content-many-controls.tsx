import { ContentManyControlsFilter } from './content-many-controls-filter'
import { ContentManyControlsSort } from './content-many-controls-sort'

type ContentManyControlsProps = {
    isAuth: boolean
}

export const ContentManyControls = ({ isAuth }: ContentManyControlsProps) => {
    return (
        <div className="flex items-center justify-between">
            <ContentManyControlsFilter isAuth={isAuth} />
            <ContentManyControlsSort />
        </div>
    )
}
