import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '@/utils/redux/store'

interface UserState {
    countryCode: string | null
    lastEventId: number | null
    isCookieAccepted: boolean
}

export const initialState: UserState = {
    countryCode: null,
    lastEventId: null,
    isCookieAccepted: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserCountry(state, action) {
            state.countryCode = action.payload
        },
        setLastEventId(state, action) {
            state.lastEventId = action.payload
        },
        setCookieAccepted(state) {
            state.isCookieAccepted = true
        },
    },
})

export const getUserCountry = (state: RootState) => state.user.countryCode
export const getLastEventId = (state: RootState) => state.user.lastEventId
export const getIsCookieAccepted = (state: RootState) => state.user.isCookieAccepted

export const { setUserCountry, setLastEventId, setCookieAccepted } = userSlice.actions

export default userSlice.reducer
