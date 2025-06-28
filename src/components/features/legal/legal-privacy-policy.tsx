import Link from 'next/link'

export const LegalPrivacyPolicy = () => {
    return (
        <div className="flex flex-col gap-y-8">
            <div>
                <p className="text-gray-500">Дата вступления в&nbsp;силу: 1&nbsp;июня 2025&nbsp;года.</p>

                <p>
                    Настоящая Политика конфиденциальности объясняет, какие данные мы&nbsp;собираем, как
                    мы&nbsp;их&nbsp;используем и какие права вы&nbsp;имеете как пользователь сервиса Comedy Portal
                    (далее&nbsp;&mdash; &laquo;Сервис&raquo;, &laquo;мы&raquo;, &laquo;наш&raquo;).
                </p>
            </div>

            <section>
                <h5 className="mb-4!">1. Какие данные мы&nbsp;собираем</h5>
                <p>
                    Мы&nbsp;собираем только адрес электронной почты при регистрации пользователя. Он&nbsp;необходим для:
                </p>
                <ul className="list-disc">
                    <li>создания учётной записи;</li>
                    <li>возможности оставлять рецензии и&nbsp;оценки;</li>
                    <li>отправки уведомлений и&nbsp;новостных рассылок (если пользователь дал согласие).</li>
                </ul>
                <p>Для просмотра контента регистрация не&nbsp;требуется.</p>
            </section>

            <section>
                <h5 className="mb-4!">2. Файлы cookies и&nbsp;аналитика</h5>
                <p>Мы&nbsp;используем файлы cookies для:</p>
                <ul className="list-disc">
                    <li>обеспечения корректной работы Сервиса (например, сохранения сессии входа);</li>
                    <li>аналитики и&nbsp;улучшения качества работы через сервис Google Analytics.</li>
                </ul>
                <p>Вы&nbsp;можете отключить cookies в&nbsp;настройках вашего браузера.</p>
            </section>

            <section>
                <h5 className="mb-4!">3. Хранение и&nbsp;удаление данных</h5>
                <p>
                    Email хранится в&nbsp;облачном сервисе SuperTokens до&nbsp;удаления аккаунта пользователем. После
                    удаления все данные удаляются без восстановления.
                </p>
            </section>

            <section>
                <h5 className="mb-4!">4. Возрастные ограничения</h5>
                <p>Сервис предназначен только для пользователей, достигших 18&nbsp;лет.</p>
            </section>

            <section>
                <h5 className="mb-4!">5. Контент и&nbsp;модерация</h5>
                <p>
                    Отзывы не&nbsp;должны содержать персональные данные, спам или оскорбления. Мы&nbsp;применяем
                    постмодерацию и можем удалять нарушения.
                </p>
            </section>

            <section>
                <h5 className="mb-4!">6. Рассылка</h5>
                <p>
                    Пользователь может отказаться от&nbsp;получения писем в&nbsp;любой момент по&nbsp;ссылке
                    в&nbsp;письме или в&nbsp;профиле.
                </p>
            </section>

            <section>
                <h5 className="mb-4!">7. Безопасность</h5>
                <p>
                    Мы&nbsp;используем технические меры для защиты данных, включая шифрование и&nbsp;контроль доступа.
                </p>
            </section>

            <section>
                <h5 className="mb-4!">8. Юрисдикция</h5>
                <p>
                    Сервис Comedy Portal создаётся командой из&nbsp;ЕС и&nbsp;ориентирован на&nbsp;русскоязычных
                    пользователей. Мы соблюдаем стандарты конфиденциальности, совместимые с&nbsp;GDPR.
                </p>
            </section>

            <section>
                <h5 className="mb-4!">9. Контакты</h5>
                <p>
                    По&nbsp;вопросам свяжитесь с&nbsp;нами{' '}
                    <Link href="mailto:comedyportal.team@gmail.com">comedyportal.team@gmail.com</Link>.
                </p>
            </section>
        </div>
    )
}
