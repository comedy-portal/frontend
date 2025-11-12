import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '@/redux/store'

interface UserState {
    lastEventId: number | null
}

export const initialState: UserState = {
    lastEventId: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLastEventId(state, action) {
            state.lastEventId = action.payload
        },
    },
})

export const getLastEventId = (state: RootState) => state.user.lastEventId

export const { setLastEventId } = userSlice.actions

export default userSlice.reducer
