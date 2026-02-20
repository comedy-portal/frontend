import { IContent } from '@/utils/types/content'

export function ContentSchema({ content }: { content: IContent }) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: content.name,
        description: content.metaInfo?.description,
        thumbnailUrl: content.contentImages?.[0]?.url,
        uploadDate: content.createdAt,
        ...(content.rating.reviewsCount > 0
            ? {
                  aggregateRating: {
                      '@type': 'AggregateRating',
                      ratingValue: content.rating.avgRating.toString(),
                      reviewCount: content.rating.reviewsCount.toString(),
                      bestRating: '10',
                      worstRating: '1',
                  },
              }
            : {}),
    }

    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}
