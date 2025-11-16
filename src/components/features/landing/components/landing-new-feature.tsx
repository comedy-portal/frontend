'use client'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { NewFeature } from '@/components/features/dialogs/new-feature/new-feature'
import { getNewFeatureDialogClosed } from '@/redux/features/app-slice'
import { useDialog } from '@/utils/providers/dialog-provider'

export const LandingNewFeature = () => {
    const dialog = useDialog()
    const newFeatureDialogClosed = useSelector(getNewFeatureDialogClosed)

    useEffect(() => {
        if (!newFeatureDialogClosed) {
            dialog.open(<NewFeature />)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return null
}
