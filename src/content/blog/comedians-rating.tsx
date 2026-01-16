import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { BlogArticle } from '@/utils/types/blog'

type Category = {
    title: string
    color: string
    bgColor: string
    comedians: Comedian[]
}

type Comedian = {
    name: string
    slug?: string
    percent?: string
}

const categories: Category[] = [
    {
        title: 'Элита/топ ру комедии',
        color: 'bg-red-300',
        bgColor: 'bg-red-100',
        comedians: [
            { name: 'Дима Гаврилов', percent: '61%', slug: 'dima-gavrilov' },
            { name: 'Кирилл Селегей', percent: '58%', slug: 'kirill-selegey' },
            { name: 'Артур Чапарян', percent: '54%', slug: 'artur-chaparyan' },
            { name: 'Иван Усович', percent: '52%', slug: 'vanya-usovich' },
            { name: 'Идрак Мирзализаде', percent: '52%', slug: 'idrak-mirzalizade' },
            { name: 'Василий Медведев', percent: '46%', slug: 'vasiliy-medvedev' },
            { name: 'Сергей Орлов', percent: '45%', slug: 'sergey-orlov' },
            { name: 'Гарик Оганисян', percent: '45%', slug: 'garik-oganisian' },
            { name: 'Александр Долгополов', percent: '38%', slug: 'aleksandr-dolgopolov' },
            { name: 'Костя Широков', percent: '31%', slug: 'kostya-shirokov' },
        ],
    },
    {
        title: 'Хороший комик',
        color: 'bg-orange-300',
        bgColor: 'bg-orange-100',
        comedians: [
            { name: 'Никита Дубровский', slug: 'nikita-dubrovskiy' },
            { name: 'Вера Котельникова', slug: 'vera-kotelnikova' },
            { name: 'Павел Дедищев', slug: 'pavel-dedishchev' },
            { name: 'Саша Малой', slug: 'sasha-maloy' },
            { name: 'Евгений Сидоров', slug: 'zhenya-sidorov' },
            { name: 'Лиза-Варвара Аранова', slug: 'elizaveta-varvara-aranova' },
            { name: 'Нурлан Сабуров', slug: 'nurlan-saburov' },
            { name: 'Дмитрий Коваль', slug: 'dmitry-koval' },
            { name: 'Сева Ловкачёв', slug: 'seva-lovkachyov' },
            { name: 'Расул Чабдаров', slug: 'rasul-chabdarov' },
            { name: 'Гурам Амарян', slug: 'guram-amaryan' },
            { name: 'Артём Винокур', slug: 'artyom-vinokur' },
        ],
    },
    {
        title: 'Средний комик',
        color: 'bg-yellow-300',
        bgColor: 'bg-yellow-100',
        comedians: [
            { name: 'Роман Косицын', slug: 'roman-kositsyn' },
            { name: 'Карина Мейханаджян', slug: 'karina-meykhanadzhyan' },
            { name: 'Ирина Мягкова', slug: 'irina-miagkova' },
            { name: 'Владимир Бухаров', slug: 'vladimir-buharov' },
            { name: 'Ольга Малащенко', slug: 'olga-malashchenko' },
            { name: 'Илья Соболев', slug: 'ilya-sobolev' },
            { name: 'Ярослава Тринадцатко', slug: 'yaroslava-trinadtsatko' },
            { name: 'Евгений Чебатков', slug: 'eugene-chebatkov' },
        ],
    },
    {
        title: 'Полный отстой',
        color: 'bg-blue-300',
        bgColor: 'bg-blue-100',
        comedians: [{ name: 'Стас Старовойтов', slug: 'stas-starovoytov' }],
    },
]

// prettier-ignore
const article: BlogArticle = {
    slug: 'comedians-rating',
    date: '2025-12-12',

    preview: {
        image: '/images/articles/comedians-rating.jpg',
        title: 'Тирлист от&nbsp;Давида Квахаджелидзе',
        description: 'Комик Давид Квахаджелидзе провёл в&nbsp;своём Telegram-канале серию опросов, в&nbsp;которых подписчики распределили различных комиков по&nbsp;тирлисту, основываясь лишь на&nbsp;личных ощущениях.',
    },
    
    metadata: {
        title: 'Тирлист комиков по версии подписчиков Давида Квахаджелидзе',
        description: 'Подписчики комика Давида Квахаджелидзе составили собственный tier list комиков в его Telegram-канале. Камеди Портал публикует результаты опросов.',
        keywords: [
            'тирлист комиков',
            'tier list комиков',
            'Давид Квахаджелидзе опрос',
            'тирлист подписчиков',
            'рейтинг комиков 2025',
            'юмористы тирлист',
            'телеграм опрос комики',
            'субъективный рейтинг комиков',
            'Давид Квахаджелидзе tier list',
            'комики голосование подписчиков',
        ],
        openGraph: {
            type: 'article',
            title: 'Тирлист комиков по версии подписчиков Давида Квахаджелидзе',
            description: 'Подписчики комика Давида Квахаджелидзе составили собственный tier list комиков в его Telegram-канале. Камеди Портал публикует результаты опросов.',
            url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/blog/`,
            siteName: 'Comedy Portal',
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/images/articles/comedians-rating.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Тирлист комиков по версии подписчиков Давида Квахаджелидзе',
                },
            ],
            locale: 'ru_RU',
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Тирлист комиков по версии подписчиков Давида Квахаджелидзе',
            description: 'Подписчики комика Давида Квахаджелидзе составили собственный tier list комиков в его Telegram-канале. Камеди Портал публикует результаты опросов.',
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/images/articles/comedians-rating.jpg`,
                    alt: 'Тирлист комиков по версии подписчиков Давида Квахаджелидзе',
                },
            ],
        },
    },

    title: 'Тирлист комиков по&nbsp;версии подписчиков Давида Квахаджелидзе',
    content: (
        <>
            <p>
                Стендап-комик{' '}
                <Link
                    href="/comedians/dato-kadze"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                >
                    Давид Квахаджелидзе
                </Link>{' '}
                провёл у себя в{' '}
                <Link
                    href="https://t.me/dato_kadze"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                >
                    Telegram-канале
                </Link>{' '}
                серию опросов, которые вызвали большой интерес у&nbsp;его аудитории. Он&nbsp;предложил подписчикам
                поучаствовать в&nbsp;необычном эксперименте: распределить разных стендап-комиков
                по&nbsp;тирлисту**&nbsp;&mdash; от сильнейших до&nbsp;тех, кого зрители воспринимают более
                прохладно. При этом не&nbsp;было задано критериев ни по&nbsp;уровню мастерства,
                ни&nbsp;по&nbsp;качеству материала, ни&nbsp;по&nbsp;популярности. Участники опроса руководствовались
                исключительно личными ощущениями, симпатиями и&nbsp;собственным опытом просмотра выступлений.
            </p>
            <p>
                Именно поэтому итоговый тирлист стоит рассматривать только как любопытный срез мнений конкретной
                аудитории. Подобные инициативы часто помогают заметить, как различается восприятие комиков среди
                самых разных групп зрителей, и&nbsp;дают возможность взглянуть на&nbsp;индустрию через призму
                предпочтений живой, активной фан-базы.
            </p>
            <p>
                Ниже мы&nbsp;публикуем результаты опросов, то&nbsp;есть тот самый тирлист, составленный подписчиками
                Давида Квахаджелидзе. Это целиком и&nbsp;полностью отражение их&nbsp;субъективного мнения,
                сформированного исключительно в&nbsp;рамках его телеграм канала. Для «элиты» Давид также указал
                процент голосов, отданных за&nbsp;этот&nbsp;вариант. Это&nbsp;позволяет понять, насколько единодушно
                аудитория оценивает тех или&nbsp;иных комиков.
            </p>
            <div className="flex flex-col gap-y-4">
                {categories.map((category, index) => (
                    <div
                        className={`mx-auto grid w-full grid-cols-1 gap-x-4 gap-y-10 rounded-xl p-4 lg:grid-cols-[200px_1fr] ${category.bgColor}`}
                        key={`category-${index}`}
                    >
                        <div
                            className={`${category.color} flex items-center justify-center rounded-xl p-4 text-center text-xl font-semibold lg:min-h-40`}
                        >
                            {category.title}
                        </div>

                        <div className="grid h-auto grid-cols-[repeat(auto-fit,minmax(144px,1fr))] gap-4">
                            {category.comedians.map((c, i) => (
                                <div key={i} className="flex flex-col items-start justify-start text-center">
                                    <Link
                                        href={`/comedians/${c.slug}`}
                                        className="text-gray-700 hover:text-gray-950"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ImageWithFallback
                                            src={`/images/comedians/${c.slug}.jpg`}
                                            alt={c.name}
                                            width={144}
                                            height={144}
                                            className="mb-2 h-36 w-36 rounded-lg object-cover"
                                        />
                                        <p className="text-sm leading-tight whitespace-nowrap">{c.name}</p>
                                        {c.percent && <p className="text-xs font-bold">{c.percent}</p>}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-sm italic">
                <strong>**тирлист (от&nbsp;англ. tier list)</strong>&nbsp;&mdash; это ранжированный список,
                в&nbsp;котором участники или объекты распределяются по&nbsp;уровням (тирам)&nbsp;&mdash;
                от&nbsp;самых сильных или предпочтительных до&nbsp;менее значимых. Чаще всего используется
                в&nbsp;играх, спорте и&nbsp;развлечениях, чтобы показать субъективную иерархию персонажей,
                участников или авторов.
            </p>
        </>
    ),
}

export default article
