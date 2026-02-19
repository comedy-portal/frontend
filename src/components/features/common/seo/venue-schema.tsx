import { getPlatformUrl } from '@/utils/helpers/common'
import { IVenue } from '@/utils/types/venues'

export function VenueSchema({ venue }: { venue: IVenue }) {
    const sameAs = venue.metaInfo?.links?.map(link => getPlatformUrl(link)?.href).filter((v): v is string => Boolean(v))

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Place',

        name: venue.name,
        description: venue.description,

        address: venue.address && {
            '@type': 'PostalAddress',
            streetAddress: venue.address,
            addressLocality: venue.city,
        },

        geo: {
            '@type': 'GeoCoordinates',
            latitude: venue.lat,
            longitude: venue.lng,
        },

        url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/venues/${venue.slug}`,

        image: venue.venueImages?.[0]?.url,

        ...(sameAs && sameAs.length > 0 ? { sameAs } : {}),
    }

    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}
