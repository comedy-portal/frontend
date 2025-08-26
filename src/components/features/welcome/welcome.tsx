import Image from 'next/image'
import Link from 'next/link'

type WelcomeProps = {
    username?: string
    isAuth: boolean
}

export const Welcome = ({ username }: WelcomeProps) => {
    const features = [
        {
            title: '🔍 Удобный поиск и фильтры',
            text: (
                <div className="space-y-2">
                    <p>
                        Комиков, шоу и&nbsp;группы можно легко найти через строку поиска. В&nbsp;разделе{' '}
                        <Link href="/content" className="text-blue-500 hover:text-blue-700">
                            Контент
                        </Link>{' '}
                        доступен полный каталог с&nbsp;возможностью сортировки и&nbsp;фильтрации.{' '}
                        <Link href="/comedians" className="text-blue-500 hover:text-blue-700">
                            Комики
                        </Link>{' '}
                        собраны на&nbsp;отдельной странице, а&nbsp;в&nbsp;разделе{' '}
                        <Link href="/comedians/groups" className="text-blue-500 hover:text-blue-700">
                            Группы
                        </Link>{' '}
                        представлены объединения артистов.
                    </p>
                </div>
            ),
            img: '/images/welcome/content-many.jpg',
        },
        {
            title: '✍️ Оценивай и пиши рецензии',
            text: (
                <p>
                    Добавляй оценки и&nbsp;оставляй рецензии на&nbsp;стендап-спешлы и&nbsp;юмористические шоу. Все твои
                    записи сохраняются в&nbsp;профиле и&nbsp;становятся частью твоей личной истории.
                </p>
            ),
            img: '/images/welcome/review.jpg',
        },
        {
            title: '📊 Следи за своей статистикой',
            text: (
                <div className="space-y-2">
                    <p>
                        После регистрации ты&nbsp;получаешь собственный{' '}
                        <Link href={`/users/${username}`} className="text-blue-500 hover:text-blue-700">
                            профиль
                        </Link>
                        , где можно увидеть:
                    </p>
                    <ul className="space-y-1">
                        <li className="relative pl-4 before:absolute before:top-3 before:left-0 before:size-1.5 before:rounded-full before:bg-gray-950">
                            все твои оценки и&nbsp;рецензии;
                        </li>
                        <li className="relative pl-4 before:absolute before:top-3 before:left-0 before:size-1.5 before:rounded-full before:bg-gray-950">
                            наглядную статистику по&nbsp;просмотрам;
                        </li>
                        <li className="relative pl-4 before:absolute before:top-3 before:left-0 before:size-1.5 before:rounded-full before:bg-gray-950">
                            рекомендации, которыми легко поделиться с&nbsp;другими.
                        </li>
                    </ul>
                    <p className="mt-4">
                        💡 Совет: сразу{' '}
                        <Link href="/me/settings" className="text-blue-500 hover:text-blue-700">
                            поменяй свой никнейм
                        </Link>
                        . По&nbsp;умолчанию выдаётся базовый, а&nbsp;уникальное имя сделает твой профиль заметнее.
                    </p>
                </div>
            ),
            img: '/images/welcome/content-many.jpg',
        },
        {
            title: '🗂️ Формируй коллекцию рекомендаций',
            text: (
                <p>
                    Хочешь поделиться с&nbsp;друзьями тем, что понравилось? В&nbsp;твоём профиле вся{' '}
                    <Link href={`/users/${username}`} className="text-blue-500 hover:text-blue-700">
                        история просмотров и&nbsp;оценок
                    </Link>{' '}
                    доступна в&nbsp;удобном виде.
                </p>
            ),
            img: '/images/welcome/content-many.jpg',
        },
        {
            title: '⭐ Сохраняй в избранное',
            text: (
                <p>
                    Нашёл шоу или спешл, который хочется посмотреть позже? Просто добавь его в&nbsp;
                    <Link href={`/users/${username}/watchlists`} className="text-blue-500 hover:text-blue-700">
                        избранное
                    </Link>
                    &nbsp;&mdash; оно сохранится в твоём профиле и&nbsp;будет видно другим пользователям, чтобы они тоже
                    могли открыть для себя новые рекомендации.
                </p>
            ),
            img: '/images/welcome/content-many.jpg',
        },
        {
            title: '🏆 Топы лучших спешлов',
            text: (
                <>
                    <p>
                        Смотри топ стендап-спешлов за&nbsp;
                        <Link href="/top-special" className="text-blue-500 hover:text-blue-700">
                            всё время
                        </Link>{' '}
                        и&nbsp;за&nbsp;
                        <Link href="/top-special/2025" className="text-blue-500 hover:text-blue-700">
                            текущий год
                        </Link>
                        .
                    </p>
                    <p>
                        Каждая твоя оценка влияет на&nbsp;рейтинг&nbsp;&mdash; помоги любимому концерту подняться выше
                        в&nbsp;списке!
                    </p>
                </>
            ),
            img: '/images/welcome/top.jpg',
        },
        {
            title: '💡 Предлагай контент',
            text: (
                <p>
                    Не&nbsp;нашёл любимое шоу или новый спешл? Сообщи нам! У&nbsp;нас есть удобная{' '}
                    <Link href="/content/submit" className="text-blue-500 hover:text-blue-700">
                        форма
                    </Link>{' '}
                    для предложений&nbsp;&mdash; помоги расширить каталог Comedy Portal.
                </p>
            ),
            img: '/images/welcome/content-many.jpg',
        },
    ]

    return (
        <div>
            <section className="m-auto flex h-[400px] items-center justify-center bg-gray-950 bg-[url('/images/welcome/welcome.jpg')] bg-cover bg-center bg-no-repeat px-4 text-center text-white sm:px-6 lg:px-8">
                <div className="space-y-10 sm:w-2/5">
                    <h1 className="text-4xl font-bold sm:text-5xl">Добро пожаловать</h1>
                    <p className="text-muted-foreground text-lg">
                        Место, где любители юмора собираются, чтобы открывать новое, делиться мнением и&nbsp;отслеживать
                        собственную историю просмотров.
                    </p>
                </div>
            </section>

            <div className="wrapper flex flex-col gap-y-16 py-16 sm:gap-y-32">
                {features.map((f, i) => (
                    <section
                        key={i}
                        className={`flex flex-col items-center gap-8 sm:flex-row sm:gap-16 ${i % 2 === 1 ? 'sm:flex-row-reverse' : ''}`}
                    >
                        <div className="w-full space-y-4 sm:w-1/2">
                            <h2 className="text-2xl font-bold">{f.title}</h2>
                            <div className="text-muted-foreground text-base leading-relaxed">{f.text}</div>
                        </div>

                        <div className="w-full overflow-hidden rounded shadow-2xl sm:w-1/2">
                            <Image
                                src={f.img}
                                alt={f.title}
                                width={800}
                                height={600}
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </section>
                ))}
            </div>
        </div>
    )
}
