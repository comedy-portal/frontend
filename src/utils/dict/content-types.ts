import { ContentType } from '@/utils/enums/common'

type ContentTypesDict = {
    slug: ContentType
    label: string
    toBackLabel?: string
}

export const contentTypesDict: ContentTypesDict[] = [
    { slug: ContentType.SPECIAL, label: 'Спешл', toBackLabel: 'Все спешлы' },
    { slug: ContentType.STANDUP, label: 'Стендап', toBackLabel: 'Все стендапы' },
    { slug: ContentType.BLOG, label: 'Блоги', toBackLabel: 'Все блоги' },
    { slug: ContentType.DISCUSSION, label: 'Дискуссия', toBackLabel: 'Все дискуссии' },
    { slug: ContentType.IMPROV_SHOW, label: 'Импровизация', toBackLabel: 'Все импровизации' },
    { slug: ContentType.PODCAST, label: 'Подкаст', toBackLabel: 'Все подкасты' },
    { slug: ContentType.ROAST_BATTLE, label: 'Прожарка', toBackLabel: 'Все прожарки' },
    { slug: ContentType.SERIES, label: 'Сериалы', toBackLabel: 'Все сериалы' },
    { slug: ContentType.SKETCH, label: 'Скетчи', toBackLabel: 'Все скетчи' },
    { slug: ContentType.TALK_SHOW, label: 'Ток-шоу', toBackLabel: 'Все ток-шоу' },
    { slug: ContentType.TEAM_SHOW, label: 'Командные', toBackLabel: 'Все командные шоу' },
]
