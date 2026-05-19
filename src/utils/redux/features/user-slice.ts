import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '@/utils/redux/store'

interface UserState {
    lastEventId: number | null
    isCookieAccepted: boolean
    isCookieConsentAnswered: boolean
    isAnalyticsAccepted: boolean
}

export const initialState: UserState = {
    lastEventId: null,
    isCookieAccepted: false,
    isCookieConsentAnswered: false,
    isAnalyticsAccepted: false,
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
            state.isCookieConsentAnswered = true
        },
        acceptNecessaryCookies(state) {
            state.isCookieAccepted = true
            state.isCookieConsentAnswered = true
            state.isAnalyticsAccepted = false
        },
        acceptAnalyticsCookies(state) {
            state.isCookieAccepted = true
            state.isCookieConsentAnswered = true
            state.isAnalyticsAccepted = true
        },
    },
})

export const getLastEventId = (state: RootState) => state.user.lastEventId
export const getIsCookieAccepted = (state: RootState) => state.user.isCookieAccepted
export const getIsCookieConsentAnswered = (state: RootState) =>
    state.user.isCookieConsentAnswered || state.user.isCookieAccepted
export const getIsAnalyticsAccepted = (state: RootState) => Boolean(state.user.isAnalyticsAccepted)

export const { acceptAnalyticsCookies, acceptNecessaryCookies, setCookieAccepted, setLastEventId } = userSlice.actions

export default userSlice.reducer
