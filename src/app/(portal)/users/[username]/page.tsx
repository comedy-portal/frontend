import { redirect } from 'next/navigation'

type Params = Promise<{ username: string }>

export default async function UserPage(props: { params: Params }) {
    const params = await props.params
    // const user = await getUserByName(params.username)

    // const { accessTokenPayload, hasToken } = await getSSRSessionHelper()

    // if (!accessTokenPayload) {
    //     if (!hasToken) {
    //         /**
    //          * This means that the user is not logged in. If you want to display some other UI in this
    //          * case, you can do so here.
    //          */
    //         return <UserPublic username={params.username} />
    //     }

    //     /**
    //      * This means that the session does not exist but we have session tokens for the user. In this case
    //      * the `TryRefreshComponent` will try to refresh the session.
    //      *
    //      * To learn about why the 'key' attribute is required refer to: https://github.com/supertokens/supertokens-node/issues/826#issuecomment-2092144048
    //      */
    //     return <TryRefreshComponent key={Date.now()} />
    // }

    // if (accessTokenPayload.userId === user.id) {
    //     return <UserPrivate username={params.username} />
    // }

    // return <UserPublic username={params.username} />

    redirect(`/users/${params.username.toLowerCase()}/watchlists`)
}
