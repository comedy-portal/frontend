import { Metadata } from 'next'

import { VenueSchema } from '@/components/features/common/seo/venue-schema'
import { Venue } from '@/components/features/venue/venue'
import { getVenueBySlug } from '@/services/venues/venues'
import { createMetadata } from '@/utils/helpers/metadata'

type Params = Promise<{ slug: string }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params
    const venue = await getVenueBySlug(params.slug)

    return createMetadata({
        title: `${venue.name} — ${venue.city}`,
        description: venue.description || 'Площадка для стендапа и шоу.',
        path: `/venues/${venue.slug}`,
        image: `/images/venues/${venue.slug}.jpg`,
        type: 'website',
        keywords: [
            venue.name,
            venue.city,
            'стендап',
            'стендап-клуб',
            'русский стендап',
            'комедийное шоу',
            'standup club',
            'russian comedy club',
            'концертная площадка',
            'open mic',
        ],
    })
}

export default async function VenuePage(props: { params: Params }) {
    const params = await props.params
    const venue = await getVenueBySlug(params.slug)

    return (
        <>
            <VenueSchema venue={venue} />
            <Venue slug={params.slug} />
        </>
    )
}
