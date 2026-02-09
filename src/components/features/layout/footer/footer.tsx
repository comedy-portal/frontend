import Link from 'next/link'

import InstallPWAButton from '../install-pwa-button/install-pwa-button'
import { FooterSubmitContent } from './footer-content-submit'

type FooterProps = {
    isAuth: boolean
}

export const Footer = async ({ isAuth }: FooterProps) => {
    return (
        <footer className="bg-gray-950 text-gray-300" data-nosnippet>
            <div className="wrapper space-y-5 py-10">
                <div className="flex flex-col justify-between gap-x-12 gap-y-6 lg:flex-row">
                    <div className="flex flex-col gap-x-20 gap-y-6 md:flex-row">
                        <section className="space-y-2">
                            <h6 className="font-bold text-white">О проекте</h6>
                            <ul>
                                <li>
                                    <Link href="/about" className="text-sm text-nowrap hover:text-white">
                                        О проекте
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/content-formats" className="text-sm text-nowrap hover:text-white">
                                        Разбираемся в форматах
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq" className="text-sm text-nowrap hover:text-white">
                                        Вопросы и ответы
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="text-sm text-nowrap hover:text-white">
                                        Блог
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/legal/terms-of-use" className="text-sm text-nowrap hover:text-white">
                                        Правила и политики
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="mailto:comedyportal.team@gmail.com"
                                        className="text-sm text-nowrap hover:text-white"
                                    >
                                        Свяжитесь с нами
                                    </Link>
                                </li>
                            </ul>
                        </section>
                        <section className="space-y-2">
                            <h6 className="font-bold text-white">Контент</h6>
                            <ul>
                                <li>
                                    <Link href="/content" className="text-sm text-nowrap hover:text-white">
                                        Все выступления
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/top-special/2026" className="text-sm text-nowrap hover:text-white">
                                        Топ спешлов за 2026 год
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/top-special/2025" className="text-sm text-nowrap hover:text-white">
                                        Топ спешлов за 2025 год
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/top-special" className="text-sm text-nowrap hover:text-white">
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
                                    <Link href="/comedians" className="text-sm text-nowrap hover:text-white">
                                        Все комики
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/comedians/groups" className="text-sm text-nowrap hover:text-white">
                                        Группы
                                    </Link>
                                </li>
                            </ul>
                        </section>
                        <section className="space-y-2">
                            <h6 className="font-bold text-white">Площадки</h6>
                            <ul>
                                <li>
                                    <Link href="/comedians" className="text-sm text-nowrap hover:text-white">
                                        Все площадки
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/comedians/groups" className="text-sm text-nowrap hover:text-white">
                                        Предложить площадку
                                    </Link>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
                <hr className="border-gray-500" />
                <section className="space-y-4 sm:flex sm:items-center sm:justify-between sm:space-y-0">
                    <div className="space-y-2">
                        <h6 className="flex items-center gap-x-4 text-sm text-nowrap text-white">
                            <div>&copy; 2025 - 2026 Камеди Портал</div>
                            <div>18+</div>
                        </h6>
                        <div className="text-xs lg:text-left">
                            * Министерством юстиции РФ признан иностранным агентом
                        </div>
                    </div>
                    <InstallPWAButton width={140} height={44} />
                </section>
            </div>
        </footer>
    )
}
