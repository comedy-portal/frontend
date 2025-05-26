import { notFound } from 'next/navigation'

import { ContentManyCategories } from '@/components/features/content-many/components/content-many-categories'
import { ContentManySortDropdown } from '@/components/features/content-many/components/content-many-sort-dropdown'
import { ContentMany } from '@/components/features/content-many/content-many'
import { ContentType } from '@/utils/enums/common'

type Params = Promise<{ slug: ContentType }>

export default async function ContentManyPage(props: { params: Params }) {
    const params = await props.params

    // Check if the slug is included in the ContentType enum
    if (!Object.values(ContentType).includes(params.slug.toLocaleLowerCase() as ContentType)) {
        notFound()
    }

    return (
        <div className="flex flex-col gap-y-12">
            <div>
                <div className="flex items-end justify-between">
                    <h1 className="mb-0 text-2xl font-bold">Контент</h1>
                    <ContentManySortDropdown />
                </div>
                <hr />
                <ContentManyCategories slug={params.slug} />
            </div>

            <ContentMany slug={params.slug} />
        </div>
    )
}
