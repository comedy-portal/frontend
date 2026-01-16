import { Layout } from '@/components/features/layout/layout/layout'

export default function FaqLayout(props: { children: React.ReactNode }) {
    return (
        <Layout title="Вопросы и ответы" size="sm">
            {props.children}
        </Layout>
    )
}
