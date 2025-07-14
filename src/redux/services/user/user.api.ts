import { api } from '@/redux/services/api'

import { ChangeUserNameInputs } from './user.types'

export const userAPI = api.injectEndpoints({
    endpoints: build => ({
        changeUsername: build.mutation<void, ChangeUserNameInputs>({
            query: body => ({
                url: 'user/username',
                method: 'PATCH',
                body,
            }),
        }),
    }),
    overrideExisting: false,
})
