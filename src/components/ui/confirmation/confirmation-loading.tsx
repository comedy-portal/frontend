'use client'

type ConfirmationLoadingProps = {
    title: string
    message: string
}

export const ConfirmationLoading = ({ title, message }: ConfirmationLoadingProps) => {
    return (
        <div className="flex w-full flex-col gap-y-4 sm:w-104">
            <h1 className="text-lg font-semibold">{title}</h1>
            <hr className="border-gray-400" />
            <p>{message}</p>
        </div>
    )
}
