import classNames from 'classnames'

type SwitcherProps = {
    checked: boolean
    isDisabled?: boolean
    onChange: () => void
}

export const Switcher = ({ checked, isDisabled, onChange }: SwitcherProps) => {
    return (
        <div
            className={classNames('relative h-5 w-7 flex-none cursor-pointer rounded-full', {
                'bg-gray-300': !checked,
                'bg-gray-500': checked,
                'cursor-no-drop opacity-30': isDisabled,
            })}
            onClick={isDisabled ? undefined : onChange}
        >
            <div
                className={classNames('absolute top-0.5 left-0.5 size-4 rounded-full bg-white transition-transform', {
                    'translate-x-2': checked,
                })}
            />
        </div>
    )
}
