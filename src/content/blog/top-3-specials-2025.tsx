import Image from 'next/image'
import Link from 'next/link'

import { BlogArticle } from '@/utils/types/blog'

// prettier-ignore
const article: BlogArticle = {
    slug: 'top-3-specials-2025',
    date: '2026-01-01',

    preview: {
        image: '/images/articles/top-3-specials-2025.jpg',
        title: 'Топ спешлов 2025&nbsp;года',
        description: 'Итоги года в&nbsp;русскоязычной комедии: лучший стендап-спешл 2025&nbsp;года, победители рейтинга, рекомендации к&nbsp;просмотру и&nbsp;главные комедийные концерты года.',
    },
    
    metadata: {
        title: '',
        description: '',
        keywords: [
            'топ спешлов 2025',
            'лучший стендап 2025',
            'лучший комедийный спешл года',
            'русскоязычный стендап 2025',
            'лучшие стендап концерты',
            'рейтинг стендап спешлов',
            'топ стендап концертов',
            'комедия 2025 итоги года',
            'лучшие комики 2025',
        ],
        openGraph: {
            type: 'article',
            title: 'Топ спешлов 2025 года: итоги года в русскоязычной комедии',
            description: 'Итоги года в русскоязычной комедии: лучший стендап-спешл 2025 года, победители рейтинга, рекомендации к просмотру и главные комедийные концерты года.',
            url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/blog/top-3-specials-2025`,
            siteName: 'Comedy Portal',
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/images/articles/top-3-specials-2025.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Топ спешлов 2025 года: итоги года в русскоязычной комедии',
                },
            ],
            locale: 'ru_RU',
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Топ спешлов 2025 года: итоги года в русскоязычной комедии',
            description: 'Итоги года в русскоязычной комедии: лучший стендап-спешл 2025 года, победители рейтинга, рекомендации к просмотру и главные комедийные концерты года.',
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/images/articles/top-3-specials-2025.jpg`,
                    alt: 'Топ спешлов 2025 года: итоги года в русскоязычной комедии',
                },
            ],
        },
    },

    title: 'Топ спешлов 2025&nbsp;года: итоги года в&nbsp;русскоязычной комедии',
    content: (
        <>
            <p>
                Год подошёл к&nbsp;концу&nbsp;&mdash; и&nbsp;можно уверенно сказать: 2025-й получился по-настоящему
                интересным и насыщенным для русскоязычной комедии. Новые имена, громкие возвращения, эксперименты
                с&nbsp;форматом и десятки сильных стендап-спешлов сделали выбор лучшего концерта непростым.
            </p>
            <Image
                src="/images/articles/top-3-specials-2025.jpg"
                width={700}
                height={467}
                className="w-full"
                alt="Топ спешлов 2025 года: итоги года в русскоязычной комедии"
            />
            <p>
                Тем не&nbsp;менее, в&nbsp;напряжённой борьбе за&nbsp;первое место уверенную победу одержал спешл
                &laquo;
                <strong>
                    <Link href="/content/special/196" className="link" target="_blank">
                        30&nbsp;серебрянников
                    </Link>
                </strong>
                &raquo; от&nbsp;
                <Link href="/comedians/vasiliy-medvedev" className="link" target="_blank">
                    Василия Медведева
                </Link>
                . Даже несмотря на&nbsp;то, что концерт доступен только на&nbsp;платной платформе, он&nbsp;собрал
                максимальную поддержку зрителей и&nbsp;заслуженно стал топ спешлом 2025&nbsp;года.
            </p>
            <p>
                <strong>Поздравляем победителя с этим результатом!</strong>
            </p>
            <p>
                Второе место занял сольник &laquo;
                <strong>
                    <Link href="/content/special/148" className="link" target="_blank">
                        Это не&nbsp;я&nbsp;придумал
                    </Link>
                </strong>
                &raquo; от&nbsp;
                <Link href="/comedians/idrak-mirzalizade" className="link" target="_blank">
                    Идрака Мирзализаде
                </Link>
                , а&nbsp;третье место&nbsp;&mdash; &laquo;
                <strong>
                    <Link href="/content/special/226" className="link" target="_blank">
                        Крот-Банкрот
                    </Link>
                </strong>
                &raquo;{' '}
                <Link href="/comedians/igor-tarletskiy" className="link" target="_blank">
                    Игоря Тарлецкого
                </Link>
                . Эти концерты совершенно заслуженно получают свои награды и&nbsp;также настоятельно рекомендуются
                к&nbsp;просмотру всем поклонникам стендапа.
            </p>
            <p>
                Спешлы, которые по&nbsp;итогам года занимают первые три позиции рейтинга, получают специальные
                медали&nbsp;&mdash; за&nbsp;1-е, 2-е и&nbsp;3-е место соответственно. Эти награды навсегда
                закрепляются за концертами и&nbsp;отражают их&nbsp;итоговый результат в&nbsp;рейтинге года.
            </p>
            <p>
                В&nbsp;случае если несколько выступлений набирают одинаковый рейтинг, их&nbsp;позиции в&nbsp;списке
                определяются по&nbsp;количеству полученных оценок: более высокое место занимает концерт
                с&nbsp;большим числом голосов.
            </p>
            <p>
                Поздравляем всех победителей и&nbsp;участников рейтинга! А&nbsp;тем, кто ещё не&nbsp;видел эти
                спешлы, самое время это исправить&nbsp;&mdash; посмотреть концерты и&nbsp;поставить свою оценку.
            </p>
            <p>
                Желаем вам счастливого Нового года, моря комедийного контента, громкого смеха и&nbsp;ярких премьер.
                Оставайтесь с&nbsp;нами и&nbsp;выбирайте лучший спешл следующего года!
            </p>
            <p className="italic">
                <strong>Важно:</strong> результаты рейтинга подводятся и&nbsp;фиксируются в&nbsp;декабре
                2025&nbsp;года, до окончания календарного года. На&nbsp;момент прочтения статьи позиции
                в&nbsp;рейтинге могут меняться в зависимости от&nbsp;новых оценок и&nbsp;активности зрителей. Тем
                не&nbsp;менее, награды присуждаются на&nbsp;основании зафиксированных результатов и&nbsp;отражают
                итоговое голосование за&nbsp;2025&nbsp;год.
            </p>
            <p>
                По&nbsp;
                <Link
                    href="/images/top-specials/2025.jpg"
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                >
                    ссылке
                </Link>{' '}
                доступен скриншот полного рейтинга спешлов по&nbsp;состоянию на&nbsp;конец 2025 года&nbsp;&mdash;
                для истории и&nbsp;сохранения финальной картины года в&nbsp;том виде, в&nbsp;котором она была
                зафиксирована.
            </p>
        </>
    ),
}

export default article
