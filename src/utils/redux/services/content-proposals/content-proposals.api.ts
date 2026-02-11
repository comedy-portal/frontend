import { api } from '@/utils/redux/services/api'

import { CreateProposalsInputs } from './content-proposals.types'

export const ContentProposalsAPI = api.injectEndpoints({
    endpoints: build => ({
        createProposal: build.mutation<void, CreateProposalsInputs>({
            query: body => ({
                url: 'content-proposals',
                method: 'POST',
                body,
            }),
        }),
    }),
    overrideExisting: false,
})
