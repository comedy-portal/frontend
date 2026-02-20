import { Metadata } from 'next'

import Link from 'next/link'

import { Layout } from '@/components/features/layout/layout/layout'

// prettier-ignore
export const metadata: Metadata = {
    title: 'Предложить контент',
}

export default function ContentSubmitLayout(props: { children: React.ReactNode }) {
    return (
        <Layout
            title="Предложить контент"
            info={
                <div className="space-y-2">
                    <p>
                        Мы&nbsp;ценим вклад нашей аудитории и&nbsp;комиков. Если Вы&nbsp;знаете спешл/шоу, комика или
                        стендап площадку, которых ещё нет у&nbsp;нас на&nbsp;сайте, Вы&nbsp;можете легко предложить
                        такой контент для добавления в&nbsp;сервис. Чтобы информация была добавлена быстрее, дайте как
                        можно более подробное описание.
                    </p>
                    <p>
                        Подробности о&nbsp;подходящем видео контенте можно посмотреть{' '}
                        <Link href="/blog/content-formats" className="text-blue-500 hover:text-blue-700">
                            здесь
                        </Link>
                        .
                    </p>
                </div>
            }
            size="sm"
        >
            {props.children}
        </Layout>
    )
}
