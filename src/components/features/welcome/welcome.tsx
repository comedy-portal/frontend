import Image from 'next/image'
import Link from 'next/link'

const features = [
    {
        title: '🔍 Удобный поиск и фильтры',
        text: (
            <div className="space-y-2">
                <p>
                    Комиков, шоу и группы можно легко найти через строку поиска. В разделе «
                    <Link href="/content" className="text-blue-500 hover:text-blue-700">
                        Контент
                    </Link>
                    » доступен полный каталог с возможностью сортировки и фильтрации. «
                    <Link href="/comedians" className="text-blue-500 hover:text-blue-700">
                        Комики
                    </Link>
                    » собраны на отдельной странице, а в разделе «
                    <Link href="/comedians/groups" className="text-blue-500 hover:text-blue-700">
                        Группы
                    </Link>
                    » представлены объединения артистов.
                </p>
                {/* <ul className="space-y-1">
                    <li className="relative pl-4 before:absolute before:top-2.5 before:left-0 before:size-1.5 before:rounded-full before:bg-gray-950">
                        На странице{' '}
                        <Link href="/content" className="font-bold text-blue-500 hover:text-blue-700">
                            Контент
                        </Link>{' '}
                        можно просматривать весь каталог, сортировать по популярности и дате, фильтровать по типу.
                    </li>
                    <li className="relative pl-4 before:absolute before:top-2.5 before:left-0 before:size-1.5 before:rounded-full before:bg-gray-950">
                        На странице{' '}
                        <Link href="/comedians" className="font-bold text-blue-500 hover:text-blue-700">
                            Комики
                        </Link>{' '}
                        собраны все артисты, представленные на площадке.
                    </li>
                    <li className="relative pl-4 before:absolute before:top-2.5 before:left-0 before:size-1.5 before:rounded-full before:bg-gray-950">
                        На странице{' '}
                        <Link href="/comedians/groups" className="font-bold text-blue-500 hover:text-blue-700">
                            Группы
                        </Link>{' '}
                        собраны объединения комиков.
                    </li>
                </ul> */}
            </div>
        ),
        img: '/images/welcome/content-many.jpg',
    },
    {
        title: '✍️ Оценивай и пиши рецензии',
        text: (
            <p>
                Добавляй оценки и оставляй рецензии на стендап-спешлы и юмористические шоу. Все твои записи сохраняются
                в профиле и становятся частью твоей личной истории.
            </p>
        ),
        img: '/images/welcome/content-many.jpg',
    },
    {
        title: '📊 Следи за своей статистикой',
        text: (
            <div className="space-y-2">
                <p>После регистрации ты получаешь собственный профиль, где можно увидеть:</p>
                <ul className="space-y-1">
                    <li className="relative pl-4 before:absolute before:top-3 before:left-0 before:size-1.5 before:rounded-full before:bg-gray-950">
                        все твои оценки и рецензии;
                    </li>
                    <li className="relative pl-4 before:absolute before:top-3 before:left-0 before:size-1.5 before:rounded-full before:bg-gray-950">
                        наглядную статистику по просмотрам;
                    </li>
                    <li className="relative pl-4 before:absolute before:top-3 before:left-0 before:size-1.5 before:rounded-full before:bg-gray-950">
                        рекомендации, которыми легко поделиться с другими.
                    </li>
                </ul>
                <p className="mt-4">
                    💡 Совет: сразу поменяй свой никнейм. По умолчанию выдаётся базовый, а уникальное имя сделает твой
                    профиль заметнее.
                </p>
            </div>
        ),
        img: '/images/welcome/content-many.jpg',
    },
    {
        title: '🗂️ Формируй коллекцию рекомендаций',
        text: (
            <p>
                Хочешь поделиться с друзьями тем, что понравилось? В твоём профиле вся история просмотров и оценок
                доступна в удобном виде.
            </p>
        ),
        img: '/images/welcome/content-many.jpg',
    },
    {
        title: '⭐ Сохраняй в избранное',
        text: (
            <p>
                Нашёл шоу или спешл, который хочется посмотреть позже? Просто добавь его в избранное — оно сохранится в
                твоём профиле и будет видно другим пользователям, чтобы они тоже могли открыть для себя новые
                рекомендации.
            </p>
        ),
        img: '/images/welcome/content-many.jpg',
    },
    {
        title: '🏆 Топы лучших спешлов',
        text: (
            <>
                <p>Смотри топ стендап-спешлов за всё время и за текущий год.</p>
                <p>Каждая твоя оценка влияет на рейтинг — помоги любимому концерту подняться выше в списке!</p>
            </>
        ),
        img: '/images/welcome/content-many.jpg',
    },
    {
        title: '💡 Предлагай контент',
        text: (
            <p>
                Не нашёл любимое шоу или новый спешл? Сообщи нам! У нас есть удобная форма для предложений — помоги
                расширить каталог Comedy Portal.
            </p>
        ),
        img: '/images/welcome/content-many.jpg',
    },
]

export const Welcome = () => {
    return (
        <div>
            <section className="m-auto flex h-[400px] items-center justify-center bg-gray-950 bg-[url('/images/welcome/welcome.jpg')] bg-cover bg-center bg-no-repeat px-4 text-center text-white sm:px-6 lg:px-8">
                <div className="space-y-10 sm:w-2/5">
                    <h1 className="text-4xl font-bold sm:text-5xl">Добро пожаловать</h1>
                    <p className="text-muted-foreground text-lg">
                        Место, где любители юмора собираются, чтобы открывать новое, делиться мнением и отслеживать
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
        // <div className="flex flex-col gap-y-32 py-8 sm:py-16">
        // <section className="m-auto space-y-8 bg-gray-950 text-center text-white">
        //     <h1 className="text-4xl font-bold">Добро пожаловать в Comedy Portal</h1>
        //     <p className="text-muted-foreground text-lg">
        //         Место, где любители юмора собираются, чтобы открывать новое, делиться мнением и отслеживать
        //         собственную историю просмотров.
        //     </p>
        // </section>

        //     <div className="wrapper">
        // {features.map((f, i) => (
        //     <section
        //         key={i}
        //         className={`flex flex-col items-center gap-8 sm:flex-row sm:gap-16 ${i % 2 === 1 ? 'sm:flex-row-reverse' : ''}`}
        //     >
        //         <div className="w-full space-y-4 sm:w-1/2">
        //             <h2 className="text-2xl font-bold">{f.title}</h2>
        //             <div className="text-muted-foreground text-base leading-relaxed">{f.text}</div>
        //         </div>

        //         <div className="w-full sm:w-1/2">
        //             <Image
        //                 src={f.img}
        //                 alt={f.title}
        //                 width={800}
        //                 height={600}
        //                 className="h-auto w-full object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
        //             />
        //         </div>
        //     </section>
        // ))}
        //     </div>
        // </div>
    )
}
