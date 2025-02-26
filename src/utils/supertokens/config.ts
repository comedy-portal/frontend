import PasswordlessWebJs from 'supertokens-web-js/recipe/passwordless'
import SessionWebJs from 'supertokens-web-js/recipe/session'
import ThirdPartyWebJs from 'supertokens-web-js/recipe/thirdparty'
import { SuperTokensConfig } from 'supertokens-web-js/types'

export const config = (): SuperTokensConfig => {
    return {
        appInfo: {
            appName: process.env.NEXT_PUBLIC_APP_NAME as string,
            apiDomain: process.env.NEXT_PUBLIC_API_DOMAIN as string,
            apiBasePath: (process.env.NEXT_PUBLIC_API_BASE_PATH + '/auth') as string,
        },
        recipeList: [ThirdPartyWebJs.init(), PasswordlessWebJs.init(), SessionWebJs.init()],
    }
}
