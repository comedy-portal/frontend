import { ReactNode } from 'react'

import { ContentCategories } from '@/components/features/content/components/content-categories'
import { ContentSortDropdown } from '@/components/features/content/components/content-sort-dropdown'
import { ContentType } from '@/types/content'

type Params = Promise<{ slug: ContentType }>

export default async function ContentLayout(props: { params: Params; children: ReactNode }) {
    const params = await props.params

    return (
        <div className="flex flex-col gap-y-12">
            <div>
                <div className="flex items-end justify-between">
                    <h1 className="mb-0 text-2xl font-bold">Контент</h1>
                    <ContentSortDropdown />
                </div>
                <hr />
                <ContentCategories slug={params.slug} />
            </div>

            {props.children}
        </div>
    )
}
