import Link from 'next/link'

import { Layout } from '@/components/features/layout/layout/layout'

export default function VenuesLayout(props: { children: React.ReactNode }) {
    return (
        <Layout
            title="Площадки"
            info={
                <div className="space-y-2 sm:w-2/3">
                    <p>
                        На этой странице собраны стендап клубы, бары и концертные площадки, где регулярно проходят
                        выступления русскоязычных комиков. Здесь Вы найдёте информацию о стендап клубах в разных
                        странах, узнаете, где проходят концерты, открытые микрофоны и туры популярных артистов.
                    </p>
                    <p className="text-sm text-gray-400">
                        Некоторые данные могут быть неактуальными. Пожалуйста, проверяйте информацию на официальном
                        сайте площадки. Если Вы заметили ошибку или какой-то стендап-клуб отсутствует в списке, напишите
                        нам на{' '}
                        <Link href="mailto:comedyportal.team@gmail.com" className="link">
                            почту
                        </Link>{' '}
                        или сообщите через форму добавления контента.
                    </p>
                </div>
            }
            size="lg"
        >
            {props.children}
        </Layout>
    )
}
