'use client'

import { useDispatch } from 'react-redux'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/forms/button'
import { setNewFeatureDialogClosed } from '@/redux/features/app-slice'
import { useDialog } from '@/utils/providers/dialog-provider'

export const NewFeature = () => {
    const dispatch = useDispatch()
    const dialog = useDialog()
    const route = useRouter()

    const handleClose = () => {
        dispatch(setNewFeatureDialogClosed(true))
        dialog.close()
    }

    return (
        <div className="flex w-full flex-col gap-y-6 sm:w-104">
            <div className="relative -mt-8 -mr-8 -ml-8 flex h-46 items-center justify-center rounded-t-2xl bg-[url('/images/new-feature.jpg')] bg-cover bg-center sm:-mt-12 sm:-mr-12 sm:-ml-12">
                <div className="absolute inset-0 z-10 rounded-t-2xl bg-black/45" />
                <h1 className="relative z-20 text-center text-4xl font-bold text-white">
                    Новые видео?
                    <br />
                    Мы предупредим!
                </h1>
            </div>
            <div className="text-center">
                Подпишись на любимых комиков и получай уведомления о новых выступлениях прямо на сайте.
            </div>
            <div className="flex items-center justify-center gap-x-2">
                <Button
                    onClick={() => {
                        route.push('/welcome')
                        handleClose()
                    }}
                >
                    Подробнее
                </Button>
                <Button variant="outline" onClick={handleClose}>
                    Закрыть
                </Button>
            </div>
        </div>
    )
}
