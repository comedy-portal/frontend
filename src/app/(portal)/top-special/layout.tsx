import { Layout } from '@/components/features/layout/layout/layout'

export default function TopSpecialLayout(props: { children: React.ReactNode }) {
    return (
        <Layout
            title="Топ спешлов"
            info={
                <div>
                    Этот топ сформирован на&nbsp;основе мнения сообщества. В&nbsp;рейтинг попадают выступления,
                    набравшие <strong>не&nbsp;менее 10&nbsp;оценок</strong>. Оценивайте выступления и&nbsp;влияйте
                    на&nbsp;результаты!
                </div>
            }
            size="sm"
            nav={[
                {
                    label: '2026',
                    href: '/top-special/2026',
                },
                {
                    label: '2025',
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
