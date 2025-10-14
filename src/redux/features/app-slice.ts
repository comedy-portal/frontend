import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '@/redux/store'

interface AppState {
    tripadvancerBannerClosed?: boolean
}

export const initialState: AppState = {
    tripadvancerBannerClosed: false,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setTripadvancerBannerClosed(state, action: { payload: boolean }) {
            state.tripadvancerBannerClosed = action.payload
        },
    },
})

export const getTripadvancerBannerClosed = (state: RootState) => state.app.tripadvancerBannerClosed

export const { setTripadvancerBannerClosed } = appSlice.actions

export default appSlice.reducer
