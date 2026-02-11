import EmailVerificationWebJs from 'supertokens-web-js/recipe/emailverification'
import PasswordlessWebJs from 'supertokens-web-js/recipe/passwordless'
import SessionWebJs from 'supertokens-web-js/recipe/session'
import ThirdPartyWebJs from 'supertokens-web-js/recipe/thirdparty'
import { SuperTokensConfig } from 'supertokens-web-js/types'

import { api } from '@/utils/redux/services/api'
import { persistor } from '@/utils/redux/store'
import { store } from '@/utils/redux/store'

export const config = (): SuperTokensConfig => {
    return {
        appInfo: {
            appName: process.env.NEXT_PUBLIC_APP_NAME as string,
            apiDomain: process.env.NEXT_PUBLIC_API_DOMAIN as string,
            apiBasePath: (process.env.NEXT_PUBLIC_API_BASE_PATH + '/auth') as string,
        },
        recipeList: [
            ThirdPartyWebJs.init(),
            PasswordlessWebJs.init(),
            EmailVerificationWebJs.init(),
            SessionWebJs.init({
                override: {
                    functions: oI => {
                        return {
                            ...oI,
                            signOut: async function (input) {
                                await oI.signOut(input)
                                await persistor.purge()
                                store.dispatch(api.util.resetApiState())
                            },
                        }
                    },
                },
            }),
        ],
    }
}
