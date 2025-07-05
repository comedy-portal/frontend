import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit'

import { api } from '@/redux/services/api'

export const store = configureStore({
    reducer: combineReducers({
        [api.reducerPath]: api.reducer,
    }),
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat([api.middleware]),
    devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
