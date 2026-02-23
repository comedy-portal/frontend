import { Metadata } from 'next'

import Link from 'next/link'

import { Layout } from '@/components/features/layout/layout/layout'
import { createMetadata } from '@/utils/helpers/metadata'

// prettier-ignore
export const metadata: Metadata = createMetadata({
    title: 'Предложить контент',
    description: 'Если Вы знаете спешл, шоу, комика или площадку, которых ещё нет на Камеди Портал, Вы можете предложить этот контент для добавления в сервис.',
    path: '/content/submit',
    type: 'website',
    noindex: true,
})

export default function ContentSubmitLayout(props: { children: React.ReactNode }) {
    return (
        <Layout
            title="Предложить контент"
            size="sm"
            sidebar={{
                component: (
                    <div className="space-y-3">
                        <p>
                            Мы&nbsp;ценим вклад нашей аудитории и&nbsp;комиков. Если Вы&nbsp;знаете спешл/шоу, комика
                            или стендап площадку, которых ещё нет у&nbsp;нас на&nbsp;сайте, Вы&nbsp;можете легко
                            предложить такой контент для добавления в&nbsp;сервис. Чтобы информация была добавлена
                            быстрее, дайте как можно более подробное описание.
                        </p>
                        <p>
                            Подробности о&nbsp;подходящем видео контенте можно посмотреть{' '}
                            <Link href="/blog/content-formats" className="text-blue-500 hover:text-blue-700">
                                здесь
                            </Link>
                            .
                        </p>
                    </div>
                ),
                showOnMobile: true,
            }}
        >
            {props.children}
        </Layout>
    )
}
