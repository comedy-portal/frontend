import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

import appReducer from '@/redux/features/app-slice'
import userReducer from '@/redux/features/user-slice'
import { api } from '@/redux/services/api'

import { internalApi } from './services/internal/internal.api'

const createNoopStorage = () => {
    return {
        getItem() {
            return Promise.resolve(null)
        },
        setItem(value: string) {
            return Promise.resolve(value)
        },
        removeItem() {
            return Promise.resolve()
        },
    }
}

const storage = typeof window === 'undefined' ? createNoopStorage() : createWebStorage('local')

const persistConfig = {
    key: 'comedyportal:store:v1.0.0',
    storage,
    whitelist: ['app', 'user'],
}

const reducers = combineReducers({
    app: appReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
    [internalApi.reducerPath]: internalApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ serializableCheck: false }).concat([api.middleware, internalApi.middleware]),
    devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
