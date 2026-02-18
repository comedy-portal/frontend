import { useMemo } from 'react'

import Link from 'next/link'

type VenueMapProps = {
    lat: number
    lng: number
}

export const VenueMap = ({ lat, lng }: VenueMapProps) => {
    const { imgSrc, mapUrl } = useMemo(() => {
        const params = new URLSearchParams({
            ll: `${lng},${lat}`, // Yandex uses lng,lat order
            z: '18',
            l: 'map',
            size: '450,450',
            pt: `${lng},${lat},pm2rdm`, // red marker
        })

        return {
            imgSrc: `https://static-maps.yandex.ru/1.x/?${params.toString()}`,
            mapUrl: `https://yandex.ru/maps/?ll=${lng}%2C${lat}&z=18&pt=${lng},${lat}`,
        }
    }, [lat, lng])

    return (
        <Link
            href={mapUrl}
            className="block overflow-hidden rounded-lg shadow"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src={imgSrc}
                alt="Map preview"
                width={450}
                height={450}
                className="aspect-square w-full object-cover"
                loading="lazy"
            />
        </Link>
    )
}
