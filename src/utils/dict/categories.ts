import { ContentType } from '@/utils/enums/common'

type Category = {
    type: ContentType
    label: string
    toBackLabel?: string
}

export const categories: Category[] = [
    { type: ContentType.SPECIAL, label: 'Спешл', toBackLabel: 'Все спешлы' },
    { type: ContentType.STANDUP, label: 'Стендап', toBackLabel: 'Все стендапы' },
    { type: ContentType.BLOG, label: 'Блоги', toBackLabel: 'Все блоги' },
    { type: ContentType.DISCUSSION, label: 'Дискуссия', toBackLabel: 'Все дискуссии' },
    { type: ContentType.IMPROV_SHOW, label: 'Импровизация', toBackLabel: 'Все импровизации' },
    { type: ContentType.PODCAST, label: 'Подкаст', toBackLabel: 'Все подкасты' },
    { type: ContentType.ROAST_BATTLE, label: 'Прожарка', toBackLabel: 'Все прожарки' },
    { type: ContentType.SERIES, label: 'Сериалы', toBackLabel: 'Все сериалы' },
    { type: ContentType.SKETCH, label: 'Скетчи', toBackLabel: 'Все скетчи' },
    { type: ContentType.TALK_SHOW, label: 'Ток-шоу', toBackLabel: 'Все ток-шоу' },
    { type: ContentType.TEAM_SHOW, label: 'Командные', toBackLabel: 'Все командные шоу' },
]
