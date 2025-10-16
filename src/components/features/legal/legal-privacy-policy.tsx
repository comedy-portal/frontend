import Link from 'next/link'

export const LegalPrivacyPolicy = () => {
    return (
        <div className="flex flex-col gap-y-8">
            <div className="space-y-4">
                <p className="text-gray-500">Дата вступления в&nbsp;силу: 1&nbsp;июня 2025&nbsp;года.</p>

                <p>
                    Настоящая Политика конфиденциальности объясняет, какие данные мы&nbsp;собираем, как
                    мы&nbsp;их&nbsp;используем и какие права вы&nbsp;имеете как пользователь сервиса Камеди Портал
                    (далее&nbsp;&mdash; &laquo;Сервис&raquo;, &laquo;мы&raquo;, &laquo;наш&raquo;).
                </p>
            </div>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">1. Какие данные мы&nbsp;собираем</h2>
                <p>
                    Мы&nbsp;собираем только адрес электронной почты при регистрации пользователя. Он&nbsp;необходим для:
                </p>
                <ul className="list-disc pl-12">
                    <li>создания учётной записи;</li>
                    <li>возможности оставлять рецензии и&nbsp;оценки;</li>
                    <li>отправки уведомлений и&nbsp;новостных рассылок (если пользователь дал согласие).</li>
                </ul>
                <p>Для просмотра контента регистрация не&nbsp;требуется.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">2. Файлы cookies и&nbsp;аналитика</h2>
                <p>Мы&nbsp;используем файлы cookies для:</p>
                <ul className="list-disc pl-12">
                    <li>обеспечения корректной работы Сервиса (например, сохранения сессии входа);</li>
                    <li>аналитики и&nbsp;улучшения качества работы через сервис Google Analytics.</li>
                </ul>
                <p>Вы&nbsp;можете отключить cookies в&nbsp;настройках Вашего браузера.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">3. Хранение и&nbsp;удаление данных</h2>
                <p>
                    Email хранится в&nbsp;облачном сервисе SuperTokens до&nbsp;удаления аккаунта пользователем. После
                    удаления все данные удаляются без восстановления.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">4. Возрастные ограничения</h2>
                <p>Сервис предназначен только для пользователей, достигших 18&nbsp;лет.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">5. Контент и&nbsp;модерация</h2>
                <p>
                    Отзывы не&nbsp;должны содержать персональные данные, спам или оскорбления. Мы&nbsp;применяем
                    постмодерацию и можем удалять нарушения.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">6. Рассылка</h2>
                <p>
                    Пользователь может отказаться от&nbsp;получения писем в&nbsp;любой момент по&nbsp;ссылке
                    в&nbsp;письме или в&nbsp;профиле.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">7. Безопасность</h2>
                <p>
                    Мы&nbsp;используем технические меры для защиты данных, включая шифрование и&nbsp;контроль доступа.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">8. Юрисдикция</h2>
                <p>
                    Сервис Камеди Портал создаётся командой из&nbsp;ЕС и&nbsp;ориентирован на&nbsp;русскоязычных
                    пользователей. Мы соблюдаем стандарты конфиденциальности, совместимые с&nbsp;GDPR.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">9. Контакты</h2>
                <p>
                    По&nbsp;вопросам свяжитесь с&nbsp;нами{' '}
                    <Link href="mailto:comedyportal.team@gmail.com" className="text-blue-500 hover:text-blue-700">
                        comedyportal.team@gmail.com
                    </Link>
                    .
                </p>
            </section>
        </div>
    )
}
