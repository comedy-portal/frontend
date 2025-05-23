import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '@/redux/store'
import { ContentSortBy } from '@/utils/enums/common'

interface ContentState {
    cursor: number
    sortBy: ContentSortBy
}

export const initialState: ContentState = {
    cursor: 0,
    sortBy: ContentSortBy.DATE_DESC,
}

export const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setContentCursor: (state, action) => {
            state.cursor = action.payload
        },
        setContentSortBy: (state, action) => {
            state.sortBy = action.payload
            state.cursor = 0 // Reset cursor when changing sort
        },
    },
})

export const getContentCursor = (state: RootState) => state.content.cursor
export const getContentSortBy = (state: RootState) => state.content.sortBy

export const { setContentCursor, setContentSortBy } = contentSlice.actions

export default contentSlice.reducer
