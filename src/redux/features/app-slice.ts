import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '@/redux/store'

interface ContentState {
    isMobileMenuOpen: boolean
}

export const initialState: ContentState = {
    isMobileMenuOpen: false,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleMobileMenu: (state, action) => {
            state.isMobileMenuOpen = action.payload
        },
    },
})

export const getIsMobileMenuOpen = (state: RootState) => state.app.isMobileMenuOpen

export const { toggleMobileMenu } = appSlice.actions

export default appSlice.reducer
