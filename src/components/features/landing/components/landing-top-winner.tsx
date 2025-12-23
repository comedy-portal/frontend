import { ChevronsRightIcon } from 'lucide-react'

import Link from 'next/link'

import { LandingTopWinnerItem } from './landing-top-winner-item'

const data = [
    {
        place: 1,
        contentName: '30 серебрянников',
        contentDescription:
            '«30 серебрянников мой второй концерт, он лучше первого, так что если он продастся хуже я ах*ею».',
        contentImage:
            'https://res.cloudinary.com/dmsuxn72e/image/upload/c_fill,w_1920,h_1080,g_auto/f_webp/q_auto/2f194b40-f46a-46b9-b35f-6c9fd194d840?_a=BAVAfVDW0',
        contentUrl: '/content/special/196',
        authorName: 'Василий Медведев',
        authorUrl: '/comedians/vasiliy-medvedev',
    },
    {
        place: 2,
        contentName: 'Это не я придумал',
        contentDescription:
            'В этом спешле Идрак в своей характерной провокационной и аналитической манере исследует широкий круг тем, включая политические взгляды, вопросы расы и гендера, сложности взаимоотношений и феномен «культуры отмены». Концерт наполнен острыми наблюдениями, абсурдной логикой и искренними размышлениями о современном обществе и личных переживаниях, бросая вызов стереотипам и общепринятым нормам.',
        contentImage: 'https://img.youtube.com/vi/bOzV0Okh2kw/maxresdefault.jpg',
        contentUrl: '/content/special/148',
        authorName: 'Идрак Мирзализаде',
        authorUrl: '/comedians/idrak-mirzalizade',
    },
    {
        place: 3,
        contentName: 'Живьём',
        contentDescription:
            'Первый сольный концерт Егора Александрова. О взрослении в Архангельске и Липецке, детстве в 90-е, бедности «умеренного уровня», семье моряков и танцоров, абсурдном родительском воспитании и формировании чувства юмора как способа выживания. Через истории о культе Евгения Гришковца, одержимости динозаврами, ненависти к печени, юрфаке, татуировках, спорте и травмах, комик выстраивает авторский стиль: тёплая ностальгия резко сменяется жёсткими темами — алкоголизм матери, смерть близкого человека, эмиграция после 2022 года и жизнь с виной и памятью. Концерт сочетает наблюдательную комедию, чёрный юмор, самоиронию и метакомментарии о сцене, показывая, как личные травмы, абсурд и честность становятся основой комедийного высказывания.',
        contentImage: 'https://img.youtube.com/vi/SM_ek9SeUoE/maxresdefault.jpg',
        contentUrl: '/content/special/384',
        authorName: 'Егор Александров',
        authorUrl: '/comedians/egor-aleksandrov',
    },
]

export const LandingTopWinner = () => {
    return (
        <section className="flex flex-col gap-y-8 rounded-lg bg-[#46CE62] bg-[linear-gradient(rgba(70,206,98,.75),rgba(70,206,98,.4)),url('/images/top-winner-bg.jpg')] bg-top bg-no-repeat px-4 py-8 sm:p-8">
            <div className="flex flex-col gap-y-4">
                <h2 className="text-center text-3xl font-bold text-white">Топ-3 стендап-спешла 2025 года</h2>
                <p className="m-auto text-center text-lg font-semibold text-white sm:w-2/3">
                    Итоги года по&nbsp;версии пользователей Comedy Portal. Три лучших стендап-концерта 2025
                    года&nbsp;&mdash; самые обсуждаемые, оценённые и&nbsp;запомнившиеся.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                {data.map(item => (
                    <LandingTopWinnerItem
                        key={`landing-top-winner-item-${item.place}`}
                        place={item.place}
                        contentName={item.contentName}
                        contentDescription={item.contentDescription}
                        contentImage={item.contentImage}
                        contentUrl={item.contentUrl}
                        authorName={item.authorName}
                        authorUrl={item.authorUrl}
                    />
                ))}
            </div>

            <div className="flex justify-end">
                <Link
                    href="/blog/top-3-specials-2025"
                    className="flex items-center gap-x-1 text-sm font-bold text-white"
                >
                    Подробнее
                    <ChevronsRightIcon size={16} />
                </Link>
            </div>
        </section>
    )
}
