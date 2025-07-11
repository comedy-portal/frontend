import Link from 'next/link'

type UserReviewsFeedItemAuthorProps = {
    comedians: {
        name: string
        surname: string
        slug: string
    }[]
    group: { name: string; slug: string } | null
}

export const UserReviewsFeedItemAuthor = ({ comedians, group }: UserReviewsFeedItemAuthorProps) => {
    if (group) {
        return (
            <Link href={`/comedians/groups/${group.slug}`} className="text-gray-500 hover:text-gray-950">
                {group.name}
            </Link>
        )
    }

    if (comedians.length === 1) {
        const comedian = comedians[0]
        return (
            <Link href={`/comedians/${comedian.slug}`} className="text-gray-500 hover:text-gray-950">
                {comedian.name} {comedian.surname}
            </Link>
        )
    }

    return (
        <Link href={`/comedians/${comedians[0].slug}`} className="text-gray-500 hover:text-gray-950">
            {comedians[0].name} {comedians[0].surname} +{comedians.length - 1}
        </Link>
    )
}
