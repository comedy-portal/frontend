import Image from 'next/image'
import Link from 'next/link'

import InstallPWAButton from '../layout/install-pwa-button/install-pwa-button'
import { AboutFaqExpander } from './components/about-faq-expander'

export const AboutFaq = () => {
    return (
        <div className="space-y-4">
            <AboutFaqExpander title="Как формируется рейтинг?">
                <ul className="list-disc space-y-2 pl-6">
                    <li>
                        <strong>Ваш голос важен:</strong> Рейтинги формируются исключительно{' '}
                        <strong>пользователями</strong> нашего сервиса. Каждая Ваша оценка имеет значение!
                    </li>
                    <li>
                        <strong>От&nbsp;1&nbsp;до&nbsp;10:</strong> Вы&nbsp;можете поставить любому комедийному контенту
                        (будь&nbsp;то стендап-концерт, шоу или подкаст) оценку{' '}
                        <strong>от&nbsp;1&nbsp;до&nbsp;10&nbsp;баллов</strong>. Мы&nbsp;принимаем только целые числа,
                        чтобы сделать процесс максимально простым и&nbsp;понятным.
                    </li>
                    <li>
                        <strong>Ежедневный пересчёт:</strong> Все оценки пересчитываются <strong>каждый день</strong>.
                        Это значит, что рейтинг всегда актуален и&nbsp;отражает свежие впечатления сообщества.
                    </li>
                    <li>
                        <strong>Средний балл:</strong> Итоговый рейтинг контента&nbsp;&mdash; это его{' '}
                        <strong>средний балл</strong>. Мы&nbsp;рассчитываем его по&nbsp;простой формуле:{' '}
                        <strong>сумма всех оценок делится на&nbsp;их&nbsp;общее количество</strong>. Результат всегда
                        отображается с&nbsp;точностью до&nbsp;одной десятой (например, <strong>8.4</strong>).
                    </li>
                    <li>
                        <strong>Прозрачность:</strong> Количество оценок, из&nbsp;которых складывается рейтинг,{' '}
                        <strong>всегда видно</strong> в описании контента.
                    </li>
                    <li>
                        <strong>Рецензии по&nbsp;желанию:</strong> На&nbsp;странице каждого контента вы&nbsp;найдёте
                        не&nbsp;только рейтинг, но&nbsp;и&nbsp;рецензии от&nbsp;пользователей, которые захотели
                        поделиться своими впечатлениями более подробно. При этом&nbsp;Вы всегда можете поставить оценку,{' '}
                        <strong>не&nbsp;оставляя рецензию</strong>.
                    </li>
                </ul>
            </AboutFaqExpander>

            <AboutFaqExpander title="Почему рейтинги так важны?">
                <p>
                    Только благодаря Вашим оценкам мы&nbsp;
                    <strong>вместе можем понять (конечно&nbsp;же, субъективно)</strong>, какой комедийный контент
                    посмотреть в&nbsp;первую очередь. Это не&nbsp;только помогает в&nbsp;<strong>рекомендациях</strong>{' '}
                    для других пользователей, но&nbsp;и&nbsp;позволяет Вам{' '}
                    <strong>сформировать собственный список</strong> просмотренного. Так Вы&nbsp;не&nbsp;забудете свои
                    впечатления и&nbsp;сможете легко порекомендовать полюбившиеся шоу или концерты своим друзьям
                    и&nbsp;знакомым.
                </p>
            </AboutFaqExpander>

            <AboutFaqExpander title="Как установить Камеди Портал на&nbsp;смартфон или компьютер?">
                <div className="flex items-center space-x-4">
                    <div className="hidden w-1/3 shrink-0 sm:block">
                        <Image
                            src="/images/about/faq/full-screen.png"
                            alt="Full Screen Mode"
                            width={800}
                            height={1565}
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
                                Подробная инструкция по установке PWA
                            </Link>
                             на&nbsp;разные устройства и&nbsp;платформы доступна в&nbsp;нашем блоге.
                        </p>
                    </div>
                </div>
            </AboutFaqExpander>

            <AboutFaqExpander title="Как предложить контент для Камеди Портал?">
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
            </AboutFaqExpander>
        </div>
    )
}
