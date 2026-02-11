import { api } from '@/redux/services/api'

import {
    ChangeUserEmailInputs,
    ChangeUserEmailResponse,
    ChangeUserNameInputs,
    ChangeUserNameInputsResponse,
    ConfirmUserDeletionInputs,
    ConfirmUserDeletionResponse,
    GetUserDataResponse,
    RestoreUserInputs,
    RestoreUserResponse,
} from './user.types'

export const userAPI = api.injectEndpoints({
    endpoints: build => ({
        getUserData: build.query<GetUserDataResponse, void>({
            query: () => ({
                url: 'user',
            }),
        }),
        changeUsername: build.mutation<ChangeUserNameInputsResponse, ChangeUserNameInputs>({
            query: body => ({
                url: 'user/username',
                method: 'PATCH',
                body,
            }),
        }),
        changeUserEmail: build.mutation<ChangeUserEmailResponse, ChangeUserEmailInputs>({
            query: inputs => ({
                url: 'user/email',
                method: 'PATCH',
                body: inputs,
            }),
        }),
        requestPersonalData: build.mutation<void, void>({
            query: () => 'user/personal-data',
        }),
        requestUserDeletion: build.mutation<void, void>({
            query: () => ({
                url: 'user',
                method: 'DELETE',
            }),
        }),
        confirmUserDeletion: build.mutation<ConfirmUserDeletionResponse, ConfirmUserDeletionInputs>({
            query: ({ token }) => ({
                url: 'user/confirm-deletion',
                method: 'POST',
                body: { token },
            }),
        }),
        restoreUser: build.mutation<RestoreUserResponse, RestoreUserInputs>({
            query: ({ token }) => ({
                url: 'user/restore',
                method: 'POST',
                body: { token },
            }),
        }),
        revokeSessions: build.mutation<void, void>({
            query: () => ({
                url: 'user/revoke-sessions',
                method: 'POST',
            }),
        }),
    }),
    overrideExisting: false,
})
