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
                <div>
                    Мы&nbsp;ценим вклад нашей аудитории и&nbsp;комиков. Если у&nbsp;Вас есть идея для нового
                    контента&nbsp;&mdash; будь&nbsp;то спешл, юмористический подкаст или шоу, Вы&nbsp;можешь легко
                    предложить его для добавления в&nbsp;сервис. Подробности о&nbsp;подходящем контенте можно посмотреть{' '}
                    <Link href="/about/formats" className="text-blue-500 hover:text-blue-700" target="_blank">
                        здесь
                    </Link>
                    .
                </div>
            }
            size="sm"
        >
            {props.children}
        </Layout>
    )
}
