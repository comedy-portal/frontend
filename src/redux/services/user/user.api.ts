import { api } from '@/redux/services/api'

import {
    ChangeUserEmailInputs,
    ChangeUserEmailResponse,
    ChangeUserNameInputs,
    RequestUserEmailChangeInputs,
    RequestUserEmailChangeResponse,
} from './user.types'

export const userAPI = api.injectEndpoints({
    endpoints: build => ({
        changeUsername: build.mutation<void, ChangeUserNameInputs>({
            query: body => ({
                url: 'user/username',
                method: 'PATCH',
                body,
            }),
        }),
        requestUserEmailChange: build.mutation<RequestUserEmailChangeResponse, RequestUserEmailChangeInputs>({
            query: inputs => ({
                url: 'user/request-email-change',
                method: 'PATCH',
                body: inputs,
            }),
        }),
        changeUserEmail: build.mutation<ChangeUserEmailResponse, ChangeUserEmailInputs>({
            query: inputs => ({
                url: 'user/change-email',
                method: 'POST',
                body: inputs,
            }),
        }),
        requestPersonalData: build.mutation<void, void>({
            query: () => 'user/personal-data',
        }),
    }),
    overrideExisting: false,
})
