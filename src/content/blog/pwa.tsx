import Image from 'next/image'
import Link from 'next/link'

import InstallPWAButton from '@/components/features/layout/install-pwa-button/install-pwa-button'
import { BlogArticle } from '@/utils/types/blog'

// prettier-ignore
const article: BlogArticle = {
    slug: 'pwa',
    date: '2026-01-16',

    preview: {
        image: '/images/articles/pwa.jpg',
        title: 'Установите Камеди Портал как приложение на смартфон или компьютер',
        description: 'Мы рады сообщить, что теперь Камеди Портал доступен не только через браузер, но и как полноценное приложение на вашем устройстве! Узнайте, как установить его на смартфон или компьютер.',
    },

    metadata: {
        title: 'Установите Камеди Портал как приложение на смартфон или компьютер',
        description: 'Мы рады сообщить, что теперь Камеди Портал доступен не только через браузер, но и как полноценное приложение на вашем устройстве! Узнайте, как установить его на смартфон или компьютер.',
        keywords: [
            'pwa',
            'progressive web app',
            'установка приложения',
            'комеди портал',
            'комедия онлайн',
            'стендап приложение',
            'юмористический контент',
            'скачать комеди портал',
            'комедия на смартфоне',
            'комедия на компьютере',
        ],
        openGraph: {
            type: 'article',
            title: 'Установите Камеди Портал как приложение на смартфон или компьютер',
            description: 'Мы рады сообщить, что теперь Камеди Портал доступен не только через браузер, но и как полноценное приложение на вашем устройстве! Узнайте, как установить его на смартфон или компьютер.',
            url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/blog/pwa`,
            siteName: 'Comedy Portal',
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/images/articles/pwa.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Установите Камеди Портал как приложение на смартфон или компьютер',
                },
            ],
            locale: 'ru_RU',
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Установите Камеди Портал как приложение на смартфон или компьютер',
            description: 'Мы рады сообщить, что теперь Камеди Портал доступен не только через браузер, но и как полноценное приложение на вашем устройстве! Узнайте, как установить его на смартфон или компьютер.',
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/images/articles/pwa.jpg`,
                    alt: 'Установите Камеди Портал как приложение на смартфон или компьютер',
                },
            ],
        },
    },

    title: 'Установите Камеди Портал как приложение на смартфон или компьютер',
    content: (
        <>
            <p>Мы&nbsp;рады сообщить, что теперь <strong>Comedy&nbsp;Portal</strong> доступен не&nbsp;только через браузер, но&nbsp;и&nbsp;как полноценное приложение на&nbsp;Вашем устройстве! С&nbsp;помощью технологии <strong>PWA (Progressive Web App)</strong> Вы&nbsp;сможете запускать наш портал прямо с&nbsp;экрана телефона или с&nbsp;рабочего стола, без лишних вкладок браузера.</p>
            <div className="space-y-4">
                <h2 className="text-lg font-semibold">Что такое PWA?</h2>
                <p><strong>PWA (Progressive Web App)</strong>&nbsp;&mdash; это сайт, который ведет себя как приложение.</p>
                <p>С PWA вы получаете:</p>
                <ul className="list-disc pl-12">
                    <li>Отдельное окно без адресной строки</li>
                    <li>Быстрый доступ и&nbsp;экономию трафика</li>
                    <li>Возможность получать уведомления</li>
                </ul>
                <p>И&nbsp;всё это <strong>без необходимости скачивать приложение из&nbsp;Google Play или App Store</strong>&nbsp;&mdash; достаточно открыть сайт в&nbsp;браузере.</p>
            </div>
            
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

                <div>
                    <h4 className="mb-2 font-bold">Для устройств Apple (iPhone/iPad) с браузером Safari:</h4>
                    <ol className="mb-4 list-decimal space-y-2 pl-6">
                        <li>Откройте наш сайт в браузере Safari.</li>
                        <li>Нажмите на кнопку «Поделиться» (квадрат со стрелкой вверх) в нижней части экрана.</li>
                        <li>В появившемся меню прокрутите вниз и выберите «Добавить на домашний экран».</li>
                        <li>
                            Нажмите «Добавить» в правом верхнем углу, и иконка нашего сайта появится среди Ваших
                            приложений.
                        </li>
                    </ol>

                    <h4 className="mb-2 font-bold">Для устройств Android с браузером Chrome:</h4>
                    <ol className="list-decimal space-y-2 pl-6">
                        <li>Откройте наш сайт в браузере Chrome.</li>
                        <li>Нажмите на кнопку меню (три точки) в правом верхнем углу экрана.</li>
                        <li>
                            В выпадающем меню выберите «Установить приложение» (или «Добавить на главный экран»).
                        </li>
                        <li>
                            Подтвердите действие, нажав «Установить» (или «Добавить»), и иконка нашего сайта
                            появится на Вашем главном экране.
                        </li>
                    </ol>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-lg font-semibold">Быстрая установка через кнопку в&nbsp;подвале сайта</h2>
                <p>На&nbsp;всех страницах <strong>Comedy&nbsp;Portal</strong> внизу сайта есть специальная кнопка &laquo;Установить приложение&raquo;, которая позволяет мгновенно добавить <strong>PWA</strong> на&nbsp;Ваше устройство.</p>
                <ul className="list-disc pl-12">
                    <li>На&nbsp;Android и&nbsp;Desktop&nbsp;&mdash; откроется стандартный диалог установки.</li>
                    <li>На&nbsp;iOS&nbsp;&mdash; будет подсказка использовать &laquo;На&nbsp;экран Домой&raquo; через Safari.</li>
                </ul>
                <InstallPWAButton width={200} height={60} />
            </div>

            <div className="space-y-4">
                <h2 className="text-lg font-semibold">Преимущества установки</h2>
                <ul className="list-disc pl-12">
                    <li>Быстрый доступ с&nbsp;домашнего экрана или рабочего стола</li>
                    <li>Удобный интерфейс без лишних вкладок браузера</li>
                    <li>Возможность сохранять прогресс в&nbsp;просмотре контента</li>
                    <li>Поддержка всех устройств: Android, iOS, Windows, Mac</li>
                </ul>
            </div>

            <p>Устанавливайте <strong>Comedy&nbsp;Portal</strong> как приложение и&nbsp;наслаждайтесь контентом быстрее и&nbsp;удобнее, где&nbsp;бы вы&nbsp;ни&nbsp;были! А&nbsp;если есть идеи или пожелания по&nbsp;функционалу PWA&nbsp;&mdash; <Link href="mailto:comedyportal.team@gmail.com" className="text-blue-500 hover:text-blue-700">пишите нам</Link>.</p>
        </>
    ),
}

export default article
