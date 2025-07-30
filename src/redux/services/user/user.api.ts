import { api } from '@/redux/services/api'

import { ChangeUserEmailInputs, ChangeUserEmailResponse, ChangeUserNameInputs } from './user.types'

export const userAPI = api.injectEndpoints({
    endpoints: build => ({
        changeUsername: build.mutation<void, ChangeUserNameInputs>({
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
    }),
    overrideExisting: false,
})
