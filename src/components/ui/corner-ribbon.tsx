type CornerRibbonProps = {
    text: string
}

export const CornerRibbon = ({ text }: CornerRibbonProps) => {
    return (
        <div className="absolute top-2 right-2 rounded-lg bg-red-500 px-2 py-1 text-center text-xs font-semibold text-white shadow-lg">
            {text}
        </div>
    )
}
