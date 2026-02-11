import { IImage, ILink } from './common'

export type IVenueMetaInfo = {
    links: ILink[]
    address: string
    description: string
}

export type IVenue = {
    id: number
    name: string
    city: string
    slug: string
    metaInfo: IVenueMetaInfo | null
    venueImages: IImage[]
    createdAt: string
    updatedAt: string
}
