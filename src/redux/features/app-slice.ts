import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '@/redux/store'

interface AppState {
    tripadvancerBannerClosed?: boolean
    newFeatureDialogClosed?: boolean
}

export const initialState: AppState = {
    tripadvancerBannerClosed: false,
    newFeatureDialogClosed: false,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setTripadvancerBannerClosed(state, action: { payload: boolean }) {
            state.tripadvancerBannerClosed = action.payload
        },
        setNewFeatureDialogClosed(state, action: { payload: boolean }) {
            state.newFeatureDialogClosed = action.payload
        },
    },
})

export const getTripadvancerBannerClosed = (state: RootState) => state.app.tripadvancerBannerClosed
export const getNewFeatureDialogClosed = (state: RootState) => state.app.newFeatureDialogClosed

export const { setTripadvancerBannerClosed, setNewFeatureDialogClosed } = appSlice.actions

export default appSlice.reducer
