import Image from 'next/image'

import { IGroup } from '@/utils/types/group'

type GroupDescriptionProps = {
    group: IGroup
}

export const GroupDescription = ({ group }: GroupDescriptionProps) => {
    return (
        <div className="space-y-4">
            <Image
                src={group.groupImages?.[0].url}
                width={500}
                height={500}
                className="aspect-video w-full rounded-lg object-cover"
                alt={group.name}
            />
            <div>{group.metaInfo?.description}</div>
        </div>
    )
}
