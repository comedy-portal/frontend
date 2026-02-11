import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '@/utils/redux/store'

interface UserState {
    lastEventId: number | null
    isCookieAccepted: boolean
}

export const initialState: UserState = {
    lastEventId: null,
    isCookieAccepted: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLastEventId(state, action) {
            state.lastEventId = action.payload
        },
        setCookieAccepted(state) {
            state.isCookieAccepted = true
        },
    },
})

export const getLastEventId = (state: RootState) => state.user.lastEventId
export const getIsCookieAccepted = (state: RootState) => state.user.isCookieAccepted

export const { setLastEventId, setCookieAccepted } = userSlice.actions

export default userSlice.reducer
