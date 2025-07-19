import { Layout } from '@/components/features/layout/layout/layout'

export default function Top50SpecialLayout(props: { children: React.ReactNode }) {
    return (
        <Layout
            title="Топ-50 спешлов"
            info={
                <div>
                    Этот топ выступлений сформирован на основе Ваших оценок и является результатом выбора сообщества.
                    Хотите внести свой вклад в формирование этого рейтинга? Ставьте свои оценки на нашей платформе!
                </div>
            }
            size="sm"
            nav={[
                {
                    label: 'За 2025 год',
                    href: '/top-50-special/2025',
                },
                {
                    label: 'За всё время',
                    href: '/top-50-special',
                },
            ]}
        >
            {props.children}
        </Layout>
    )
}
