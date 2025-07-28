import { Layout } from '@/components/features/layout/layout/layout'

export default function TopSpecialLayout(props: { children: React.ReactNode }) {
    return (
        <Layout
            title="Топ спешлов"
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
                    href: '/top-special/2025',
                },
                {
                    label: 'За всё время',
                    href: '/top-special',
                },
            ]}
        >
            {props.children}
        </Layout>
    )
}
