import Link from 'next/link'

import { FooterSubmitContent } from './footer-content-submit'

type FooterProps = {
    isAuth: boolean
}

export const Footer = async ({ isAuth }: FooterProps) => {
    return (
        <footer className="border-t border-gray-300" data-nosnippet>
            <div className="wrapper flex flex-col justify-between gap-x-12 gap-y-6 py-6 lg:flex-row">
                <section className="space-y-2">
                    <h6 className="font-bold">&copy; 2026 Comedy Portal</h6>
                    <div className="text-sm text-gray-500">
                        <p>Агрегатор лучших стендапов и шоу.</p>
                        <p>С оценками, рецензиями и твоей персональной историей просмотров.</p>
                    </div>
                    <div>18+</div>
                    <div className="text-xs text-gray-500 lg:text-left">
                        * Министерством юстиции РФ признан иностранным агентом
                    </div>
                </section>
                <div className="flex flex-col gap-x-12 gap-y-6 md:flex-row">
                    <section className="space-y-2">
                        <h6 className="font-bold">О проекте</h6>
                        <ul>
                            <li>
                                <Link href="/about" className="text-sm text-gray-500 hover:text-gray-950">
                                    Кто мы?
                                </Link>
                            </li>
                            <li>
                                <Link href="/about/formats" className="text-sm text-gray-500 hover:text-gray-950">
                                    Разбираемся в форматах
                                </Link>
                            </li>
                            <li>
                                <Link href="/about/faq" className="text-sm text-gray-500 hover:text-gray-950">
                                    Вопросы и ответы
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-950">
                                    Блог
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/terms-of-use" className="text-sm text-gray-500 hover:text-gray-950">
                                    Правила и политики
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="mailto:comedyportal.team@gmail.com"
                                    className="text-sm text-gray-500 hover:text-gray-950"
                                >
                                    Свяжитесь с нами
                                </Link>
                            </li>
                        </ul>
                    </section>
                    <section className="space-y-2">
                        <h6 className="font-bold">Контент</h6>
                        <ul>
                            <li>
                                <Link href="/content" className="text-sm text-gray-500 hover:text-gray-950">
                                    Все выступления
                                </Link>
                            </li>
                            <li>
                                <Link href="/top-special/2026" className="text-sm text-gray-500 hover:text-gray-950">
                                    Топ спешлов за 2026 год
                                </Link>
                            </li>
                            <li>
                                <Link href="/top-special/2025" className="text-sm text-gray-500 hover:text-gray-950">
                                    Топ спешлов за 2025 год
                                </Link>
                            </li>
                            <li>
                                <Link href="/top-special" className="text-sm text-gray-500 hover:text-gray-950">
                                    Топ спешлов за всё время
                                </Link>
                            </li>
                            <li>
                                <FooterSubmitContent isAuth={isAuth} />
                            </li>
                        </ul>
                    </section>
                    <section className="space-y-2">
                        <h6 className="font-bold">Комики</h6>
                        <ul>
                            <li>
                                <Link href="/comedians" className="text-sm text-gray-500 hover:text-gray-950">
                                    Все комики
                                </Link>
                            </li>
                            <li>
                                <Link href="/comedians/groups" className="text-sm text-gray-500 hover:text-gray-950">
                                    Группы
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog/comedians-rating"
                                    className="text-sm text-gray-500 hover:text-gray-950"
                                >
                                    Тирлист&nbsp;от&nbsp;Давида
                                </Link>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </footer>
    )
}
