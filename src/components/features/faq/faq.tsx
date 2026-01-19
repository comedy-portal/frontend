import Image from 'next/image'
import Link from 'next/link'

import { FaqExpander } from './components/faq-expander'

export const Faq = () => {
    return (
        <div className="space-y-4">
            <FaqExpander title="Как устроены рейтинги на Камеди Портал?">
                <p>
                    Почему одни стендап-концерты попадают в&nbsp;топ, а&nbsp;другие нет? Всё решают оценки
                    пользователей. В&nbsp;этой{' '}
                    <Link href="/blog/rating" className="link">
                        статье
                    </Link>{' '}
                    мы&nbsp;расскажем, как формируются рейтинги на&nbsp;<strong>Камеди Портал</strong> и&nbsp;почему
                    каждая оценка действительно важна.
                </p>
            </FaqExpander>

            <FaqExpander title="Как установить Камеди Портал на&nbsp;смартфон или компьютер?">
                <div className="flex items-center space-x-4">
                    <div className="hidden w-1/3 shrink-0 sm:block">
                        <Image
                            src="/images/screenshots/mobile/content-many.png"
                            alt="Full Screen Mode"
                            width={800}
                            height={1576}
                            className="w-full"
                        />
                    </div>

                    <div className="space-y-4">
                        <p>
                            Наш сайт поддерживает технологию <strong>PWA (Progressive Web App)</strong>, что позволяет
                            Вам устанавливать его на&nbsp;главный экран Вашего устройства, будь&nbsp;то смартфон,
                            планшет или компьютер. Это обеспечивает быстрый доступ к&nbsp;порталу и&nbsp;удобство
                            использования, словно это&nbsp;настоящее приложение.
                        </p>
                        <p>
                            <Link href="/blog/pwa" className="text-blue-500 hover:text-blue-700">
                                Подробная инструкция по установке
                            </Link>
                             на&nbsp;разные устройства и&nbsp;платформы доступна в&nbsp;нашем блоге.
                        </p>
                    </div>
                </div>
            </FaqExpander>

            <FaqExpander title="Как предложить контент для Камеди Портал?">
                <div className="space-y-4">
                    <p>
                        Вы&nbsp;можете легко предложить новый контент&nbsp;&mdash; будь&nbsp;то спешл, подкаст или шоу.
                        Просто заполните форму с ссылкой на&nbsp;видео и&nbsp;кратким описанием.
                    </p>
                    <p>
                        <Link href="/blog/content-submit" className="text-blue-500 hover:text-blue-700">
                            Подробная инструкция по&nbsp;заполнению формы
                        </Link>{' '}
                        доступна в&nbsp;нашем блоге.
                    </p>
                </div>
            </FaqExpander>
        </div>
    )
}
