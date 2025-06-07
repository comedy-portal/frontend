import { ContentType } from '@/utils/enums/common'

type Category = {
    type: ContentType
    label: string
}

export const categories: Category[] = [
    { type: ContentType.SPECIAL, label: 'Спешл' },
    { type: ContentType.STANDUP, label: 'Стендап' },
    { type: ContentType.BLOG, label: 'Блоги' },
    { type: ContentType.DISCUSSION, label: 'Дискуссия' },
    { type: ContentType.IMPROV_SHOW, label: 'Импровизация' },
    { type: ContentType.PODCAST, label: 'Подкаст' },
    { type: ContentType.ROAST_BATTLE, label: 'Прожарка' },
    { type: ContentType.SERIES, label: 'Сериалы' },
    { type: ContentType.SKETCH, label: 'Скетчи' },
    { type: ContentType.TALK_SHOW, label: 'Ток-шоу' },
]
