import { IImage, ILink } from './common'

export type IVenueMetaInfo = {
    links: ILink[]
}

export type IVenue = {
    id: number
    name: string
    description: string
    slug: string
    city: string
    address: string
    lat: number
    lng: number
    metaInfo: IVenueMetaInfo | null
    venueImages: IImage[]
    createdAt: string
    updatedAt: string
}
