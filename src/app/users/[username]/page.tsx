import { redirect } from 'next/navigation'

type Params = Promise<{ username: string }>

export default async function UserPage(props: { params: Params }) {
    const params = await props.params
    redirect(`/users/${params.username.toLowerCase()}/reviews`)
}
