import Link from 'next/link'

export const LegalNewsletterConsent = () => {
    return (
        <div className="flex flex-col gap-y-8">
            <div className="space-y-4">
                <p className="text-gray-500">Дата вступления в&nbsp;силу: 19&nbsp;мая 2026&nbsp;года.</p>
                <p>
                    Настоящее согласие является добровольным и&nbsp;оформляется отдельно от&nbsp;регистрации,
                    Пользовательского соглашения и&nbsp;согласия на&nbsp;обработку персональных данных.
                </p>
            </div>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">1. Что пользователь разрешает</h2>
                <p>
                    Пользователь разрешает Камеди Портал отправлять на&nbsp;адрес электронной почты новости проекта,
                    уведомления об&nbsp;обновлениях, подборки контента, информационные сообщения и&nbsp;иные материалы,
                    связанные с&nbsp;развитием Сервиса.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">2. Какие данные используются</h2>
                <p>
                    Для рассылки используется адрес электронной почты и&nbsp;служебные данные аккаунта, необходимые для
                    подготовки, отправки, учёта статуса доставки и&nbsp;обработки отказа от&nbsp;рассылки.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">3. Добровольность</h2>
                <p>
                    Отказ от&nbsp;рассылки не&nbsp;ограничивает доступ к&nbsp;основным функциям Сервиса. Сервисные
                    письма, связанные с&nbsp;входом, безопасностью, удалением, восстановлением и&nbsp;запросами
                    пользователя, могут отправляться независимо от&nbsp;согласия на&nbsp;новостную рассылку.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">4. Отзыв согласия</h2>
                <p>
                    Пользователь может отказаться от&nbsp;рассылки по&nbsp;ссылке в&nbsp;письме, через настройки
                    профиля после появления такой функции или письмом на&nbsp;адрес{' '}
                    <Link href="mailto:comedyportal.team@gmail.com" className="text-blue-500 hover:text-blue-700">
                        comedyportal.team@gmail.com
                    </Link>
                    .
                </p>
            </section>
        </div>
    )
}
