import Image from 'next/image'

import { IComedian } from '@/utils/types/comedian'

type ComedianDescriptionProps = {
    comedian: IComedian
}

export const ComedianDescription = ({ comedian }: ComedianDescriptionProps) => {
    return (
        <div className="space-y-4">
            <Image
                src={`/images/comedians/${comedian.slug}.jpg`}
                width={500}
                height={500}
                className="aspect-video w-full rounded-lg object-cover"
                alt={comedian.name}
            />
            <div>{comedian.metaInfo?.description}</div>
        </div>
    )
}
