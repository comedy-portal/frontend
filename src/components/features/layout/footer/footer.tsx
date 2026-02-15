import Link from 'next/link'

import InstallPWAButton from '../../common/install-pwa-button'
import { FooterSubmitContent } from './footer-content-submit'

type FooterProps = {
    currentYear: number
    isAuth: boolean
}

export const Footer = async ({ currentYear, isAuth }: FooterProps) => {
    return (
        <footer className="bg-gray-950 text-gray-300" data-nosnippet>
            <div className="wrapper flex flex-col justify-between gap-x-12 gap-y-6 py-10 lg:flex-row">
                <section className="space-y-6">
                    <div className="space-y-3">
                        <div className="flex items-center gap-x-2">
                            <h6 className="text-white">
                                &copy;&nbsp;2025&nbsp;-&nbsp;{currentYear}&nbsp;Камеди&nbsp;Портал
                            </h6>
                            <div className="text-sm text-gray-500">18+</div>
                        </div>
                        <div className="text-sm">
                            <p>Агрегатор лучших стендапов и шоу.</p>
                            <p>С оценками, рецензиями и Вашей персональной историей просмотров.</p>
                        </div>
                        <div className="text-xs lg:text-left">
                            * Министерством юстиции РФ признан иностранным агентом
                        </div>
                    </div>
                    <InstallPWAButton width={135} height={40} />
                </section>
                <div className="flex flex-col gap-x-12 gap-y-6 md:flex-row">
                    <section className="space-y-2">
                        <h6 className="font-bold text-white">О проекте</h6>
                        <ul>
                            <li>
                                <Link href="/about" className="text-sm hover:text-white">
                                    Кто мы?
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog/content-formats" className="text-sm hover:text-white">
                                    Разбираемся в форматах
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-sm hover:text-white">
                                    Вопросы и ответы
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-sm hover:text-white">
                                    Блог
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/terms-of-use" className="text-sm hover:text-white">
                                    Правила и политики
                                </Link>
                            </li>
                            <li>
                                <Link href="mailto:comedyportal.team@gmail.com" className="text-sm hover:text-white">
                                    Свяжитесь с нами
                                </Link>
                            </li>
                        </ul>
                    </section>
                    <section className="space-y-2">
                        <h6 className="font-bold text-white">Контент</h6>
                        <ul>
                            <li>
                                <Link href="/content" className="text-sm hover:text-white">
                                    Все выступления
                                </Link>
                            </li>
                            <li>
                                <Link href="/top-special/2026" className="text-sm hover:text-white">
                                    Топ спешлов за 2026 год
                                </Link>
                            </li>
                            <li>
                                <Link href="/top-special/2025" className="text-sm hover:text-white">
                                    Топ спешлов за 2025 год
                                </Link>
                            </li>
                            <li>
                                <Link href="/top-special" className="text-sm hover:text-white">
                                    Топ спешлов за всё время
                                </Link>
                            </li>
                            <li>
                                <FooterSubmitContent isAuth={isAuth} />
                            </li>
                        </ul>
                    </section>
                    <section className="space-y-2">
                        <h6 className="font-bold text-white">Комики</h6>
                        <ul>
                            <li>
                                <Link href="/comedians" className="text-sm hover:text-white">
                                    Все комики
                                </Link>
                            </li>
                            <li>
                                <Link href="/comedians/groups" className="text-sm hover:text-white">
                                    Группы комиков
                                </Link>
                            </li>
                        </ul>
                    </section>
                    <section className="space-y-2">
                        <h6 className="font-bold text-white">Плащадки</h6>
                        <ul>
                            <li>
                                <Link href="/venues" className="text-sm hover:text-white">
                                    Все площадки
                                </Link>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </footer>
    )
}
