import { InfoIcon } from 'lucide-react'

import Link from 'next/link'

export const Welcome = () => {
    return (
        <div className="space-y-12">
            <div className="flex gap-x-4 rounded-lg border border-blue-100 bg-blue-50 p-4">
                <InfoIcon className="hidden shrink-0 text-blue-400 sm:block" />
                <div className="space-y-4">
                    <p>
                        Мы только начинаем, и поэтому внешний вид и функциональность сайта ещё активно развиваются и
                        улучшаются. Наш проект посвящён оценкам и отзывам на комедийные шоу и стендап, и мы очень ценим
                        Вашу помощь в его становлении.
                    </p>
                    <p>
                        Количество контента постоянно растёт, и каждый пользователь может внести свой вклад — просто
                        воспользуйтесь кнопкой <strong>«Предложить контент»</strong> в верхнем меню, чтобы мы быстрее
                        добавили отсутствующее на площадке шоу или выступление для оценки.
                    </p>
                    <p>
                        Если Вы заметили какие-либо проблемы или у Вас есть вопросы и предложения, пожалуйста, пишите
                        нам на{' '}
                        <Link href="mailto:comedyportal.team@gmail.com" className="text-blue-500 hover:text-blue-700">
                            comedyportal.team@gmail.com
                        </Link>
                        . <strong>Ваше мнение важно для нас!</strong>
                    </p>
                </div>
            </div>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Топы спешлов</h2>
                <p>
                    Основываясь на Ваших оценках, мы формируем топы спешл выступлений, которые помогут Вам найти лучшие
                    комедийные шоу и стендап-выступления.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Каталог контента</h2>
                <p>
                    Мы собираем и систематизируем все комедийные шоу и стендап-выступления, чтобы Вы могли легко
                    находить и оценивать их. Если Вы не нашли нужный контент, пожалуйста, воспользуйтесь кнопкой{' '}
                    <strong>«Предложить контент»</strong> в верхнем меню.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Каталог комиков</h2>
                <p>
                    Мы собираем и систематизируем информацию о комиках, чтобы Вы могли легко находить и оценивать их
                    выступления.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Подписки на любимых комиков</h2>
                <p>
                    Мы собираем и систематизируем информацию о комиках, чтобы Вы могли легко находить и оценивать их
                    выступления.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Площадки</h2>
                <p>
                    Мы собираем и систематизируем информацию о комиках, чтобы Вы могли легко находить и оценивать их
                    выступления.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Покупка билетов на выступления</h2>
                <p>
                    Мы собираем и систематизируем информацию о комиках, чтобы Вы могли легко находить и оценивать их
                    выступления.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Профиль и список рекомендаций</h2>
                <p>
                    Мы собираем и систематизируем информацию о комиках, чтобы Вы могли легко находить и оценивать их
                    выступления.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Избранное</h2>
                <p>
                    Мы собираем и систематизируем информацию о комиках, чтобы Вы могли легко находить и оценивать их
                    выступления.
                </p>
            </section>

            <p>
                <strong>Спасибо, что Вы с нами на этом пути к лучшему комедийному сервису!</strong>
            </p>
        </div>
    )
}
