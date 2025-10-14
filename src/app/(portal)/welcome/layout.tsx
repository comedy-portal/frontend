import { Layout } from '@/components/features/layout/layout/layout'

export default function WelcomeLayout(props: { children: React.ReactNode }) {
    return (
        <Layout
            title="Добро пожаловать!"
            info="Мы рады, что Вы присоединились к нам! Ниже, Вы найдете краткое руководство по основным фичам нашего портала. Надеемся, что они помогут Вам максимально эффективно использовать наш сервис."
        >
            {props.children}
        </Layout>
    )
}
