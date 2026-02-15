import { Metadata } from 'next'

import { VenueSchema } from '@/components/features/common/seo/venue-schema'
import { Venue } from '@/components/features/venue/venue'
import { getVenueBySlug } from '@/services/venues/venues'

type Params = Promise<{ slug: string }>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params
    const venue = await getVenueBySlug(params.slug)

    const title = `${venue.name} — ${venue.city}`

    return {
        title,
        description: venue.metaInfo?.description || 'Площадка для стендапа и шоу.',

        openGraph: {
            type: 'website',
            title,
            description: venue.metaInfo?.description,
            images: [
                {
                    url:
                        venue.venueImages[0]?.url ||
                        `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/images/venues/${venue.slug}.jpg`,
                    width: 800,
                    height: 600,
                    type: 'image/jpeg',
                    alt: venue.name,
                },
            ],
            url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/venues/${venue.slug}`,
        },

        twitter: {
            title,
            description: venue.metaInfo?.description,
            card: 'summary_large_image',
        },
    }
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
