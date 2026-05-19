import Link from 'next/link'

export const LegalCookiePolicy = () => {
    return (
        <div className="flex flex-col gap-y-8">
            <div className="space-y-4">
                <p className="text-gray-500">Дата вступления в&nbsp;силу: 19&nbsp;мая 2026&nbsp;года.</p>
                <p>
                    Настоящая Политика объясняет, какие cookies, локальное хранилище и&nbsp;счётчики могут
                    использоваться на&nbsp;сайте Камеди Портал.
                </p>
            </div>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">1. Необходимые cookies</h2>
                <p>
                    Необходимые cookies и&nbsp;локальное хранилище используются для входа, поддержания сессии,
                    безопасности, работы интерфейса, запоминания выбранных настроек и&nbsp;отображения сервисных
                    сообщений. Эти технологии нужны для корректной работы Сервиса и&nbsp;не&nbsp;отключаются через
                    баннер cookies.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">2. Аналитические cookies</h2>
                <p>
                    Аналитические cookies и&nbsp;счётчики помогают понимать, как пользователи взаимодействуют
                    с&nbsp;Сервисом, какие страницы работают нестабильно и&nbsp;какие функции требуют улучшения. Они
                    включаются только после отдельного согласия пользователя.
                </p>
                <p>
                    Для пользователей из&nbsp;Российской Федерации Google Analytics не&nbsp;загружается. Яндекс.Метрика
                    загружается только после согласия на&nbsp;аналитику.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">3. Внешние сервисы</h2>
                <p>
                    При наличии согласия или при переходе по&nbsp;внешним ссылкам могут использоваться технологии
                    Vercel, Google Analytics, Яндекс.Метрики, Яндекс Static Maps, YouTube/Google APIs, Telegram
                    и&nbsp;других технических провайдеров. Такие сервисы могут обрабатывать данные за&nbsp;пределами
                    Российской Федерации.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">4. Управление согласием</h2>
                <p>
                    Пользователь может выбрать только необходимые cookies или разрешить аналитику в&nbsp;баннере
                    cookies. Также пользователь может удалить cookies и&nbsp;данные сайта в&nbsp;настройках браузера.
                    Если нужно отозвать согласие вручную, напишите на&nbsp;адрес{' '}
                    <Link href="mailto:comedyportal.team@gmail.com" className="text-blue-500 hover:text-blue-700">
                        comedyportal.team@gmail.com
                    </Link>
                    .
                </p>
            </section>
        </div>
    )
}
