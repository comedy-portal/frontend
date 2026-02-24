import Image from 'next/image'

import { BlogArticle } from '@/utils/types/blog'

// prettier-ignore
const article: BlogArticle = {
    slug: 'profile',
    date: '2026-02-04',

    preview: {
        image: '/images/articles/profile.jpg',
        title: 'Профиль пользователя на Камеди Портал',
        description: 'Профиль пользователя на ComedyPortal: статистика просмотров, оценки, избранное и рекомендации. Узнайте, какие возможности доступны после регистрации.',
    },

    metadata: {
        title: 'Профиль пользователя на Камеди Портал',
        description: 'Профиль пользователя на ComedyPortal: статистика просмотров, оценки, избранное и рекомендации. Узнайте, какие возможности доступны после регистрации.',
        keywords: [
            'ComedyPortal',
            'Камеди Портал',
            'профиль пользователя',
            'регистрация',
            'комедия',
            'стендап',
            'комедийные шоу',
            'избранное',
            'рекомендации',
            'статистика просмотров',
            'рейтинг стендапа',
            'персональный рейтинг стендапа',
        ],
    },

    title: 'Профиль пользователя на Камеди Портал',
    content: (
        <>
            <p>Регистрация на&nbsp;<strong>Камеди Портал</strong> открывает доступ к&nbsp;персональному профилю&nbsp;&mdash; Вашему центру управления юмором. В&nbsp;нём собраны все инструменты, которые помогают следить за&nbsp;своей активностью, делиться рекомендациями и&nbsp;находить новый комедийный контент.</p>
            <section className="space-y-4">
                <h2 className="text-lg font-semibold">Следите за своей статистикой</h2>
                <p>Сразу после регистрации у&nbsp;Вас появляется <strong>личный профиль</strong>, где в&nbsp;удобном и&nbsp;наглядном виде отображается вся Ваша активность на&nbsp;сайте.</p>
                <p className="bg-blue-100 p-4 rounded-lg">💡 <strong>Совет: сразу поменяйте свой никнейм.</strong> По&nbsp;умолчанию выдаётся базовый, а&nbsp;уникальное имя сделает Ваш профиль заметнее.</p>
                <p>В&nbsp;профиле&nbsp;Вы можете увидеть:</p>
                <ul className="list-disc sm:pl-12 pl-8 space-y-1">
                    <li>все ваши <strong>оценки и&nbsp;рецензии</strong> на&nbsp;<strong>шоу</strong> и&nbsp;<strong>стендап-спешлы</strong>;</li>
                    <li>подробную <strong>статистику</strong> Вашего профиля;</li>
                    <li>гибкую систему фильтров и&nbsp;сортировки для анализа своих оценок и&nbsp;формирования <strong>рекомендаций</strong>.</li>
                </ul>
                <p>Это отличный способ вспомнить, что&nbsp;Вы уже смотрели, и&nbsp;показать другим пользователям <strong>Камеди Портал</strong>, какой юмор Вам близок.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-lg font-semibold">Формируйте коллекцию рекомендаций</h2>
                <p>Понравился <strong>стендап</strong> или <strong>шоу</strong> и&nbsp;хотите посоветовать его друзьям? Профиль на&nbsp;<strong>Камеди Портал</strong> идеально подходит для этого.</p>
                <p>Вся история Ваших <strong>оценок и рецензий</strong> хранится в&nbsp;одном месте и&nbsp;доступна в&nbsp;удобном формате. Вы&nbsp;можете использовать свой профиль как <strong>личную коллекцию рекомендаций</strong>, возвращаться к&nbsp;любимым выступлениям и&nbsp;делиться ими с&nbsp;другими.</p>
                <div className="hidden w-full overflow-hidden rounded shadow-2xl sm:block">
                    <Image
                        src="/images/screenshots/desktop/reviews.jpg"
                        width={1280}
                        height={1231}
                        alt="Профиль пользователя на Камеди Портал"
                    />
                </div>
    
                <div className="sm:hidden">
                    <Image
                        src="/images/screenshots/mobile/reviews.png"
                        width={800}
                        height={1576}
                        alt="Профиль пользователя на Камеди Портал"
                    />
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-lg font-semibold">Сохраняйте в избранное</h2>
                <p>Нашли <strong>шоу</strong> или <strong>комедийный спешл</strong>, который хотите посмотреть позже? Просто добавьте его в&nbsp;избранное.</p>
                <p>Все избранные материалы:</p>
                <ul className="list-disc sm:pl-12 pl-8 space-y-1">
                    <li>сохраняются в&nbsp;Вашем профиле;</li>
                    <li>всегда доступны с&nbsp;любого устройства;</li>
                    <li>видны другим пользователям.</li>
                </ul>
                <p>Это удобно не&nbsp;только для Вас, но&nbsp;и&nbsp;для сообщества&nbsp;&mdash; Ваши избранные могут стать отличным источником новых открытий для других любителей комедии.</p>
                <div className="hidden w-full overflow-hidden rounded shadow-2xl sm:block">
                    <Image
                        src="/images/screenshots/desktop/watchlists.jpg"
                        width={1280}
                        height={1231}
                        alt="Профиль пользователя на Камеди Портал"
                    />
                </div>
    
                <div className="sm:hidden">
                    <Image
                        src="/images/screenshots/mobile/watchlists.png"
                        width={800}
                        height={1576}
                        alt="Профиль пользователя на Камеди Портал"
                    />
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-lg font-semibold">Делитесь своим профилем</h2>
                <p>Ваш профиль на&nbsp;<strong>Камеди Портал</strong> &mdash; это не&nbsp;просто личная страница, а&nbsp;полноценная визитка Вашего юмористического вкуса.</p>
                <p>Вы можете:</p>
                <ul className="list-disc sm:pl-12 pl-8 space-y-1">
                    <li>делиться ссылкой на&nbsp;профиль в&nbsp;соцсетях;</li>
                    <li>отправлять её&nbsp;друзьям;</li>
                    <li>использовать профиль как подборку лучших рекомендаций.</li>
                </ul>
                <p className="font-bold">Пусть другие узнают, что действительно стоит посмотреть</p>
                <div className="sm:hidden">
                    <Image
                        src="/images/screenshots/mobile/profile.png"
                        width={800}
                        height={1576}
                        alt="Профиль пользователя на Камеди Портал"
                    />
                </div>
            </section>
        </>
    ),
}

export default article
