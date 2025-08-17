import { Share2Icon, ShareIcon } from 'lucide-react'

import { Rating } from '@/components/ui/rating'

const Item = ({ label, value }: { label: string; value: number }) => {
    return (
        <li className="flex items-center justify-between gap-x-1">
            <div className="text-sm whitespace-nowrap">{label}</div>
            <div
                className="grow border-b border-dotted"
                style={{
                    borderBottomColor: 'rgba(0, 0, 0, 0.4)',
                    borderBottomWidth: '2px',
                    height: '5px',
                    marginTop: '4px',
                }}
            ></div>
            <div className="text-sm font-medium">{value}</div>
        </li>
    )
}

export const UserSidebar = async () => {
    return (
        <div className="sticky top-[115px] space-y-6 rounded-xl bg-gray-50 p-6 lg:p-8">
            <div className="hidden items-center justify-between lg:flex">
                <div>
                    <h2 className="text-xl font-bold">oskolsky</h2>
                    <div className="text-sm">22 дня на сайте</div>
                </div>
                <div className="cursor-pointer text-gray-500 hover:text-gray-950">
                    <Share2Icon />
                </div>
            </div>
            <hr className="hidden border-t border-gray-200 lg:block" />
            <div className="flex items-center gap-x-2">
                <Rating value={5} className="size-8!" />
                <div>Средняя оценка</div>
            </div>
            <hr className="border-t border-gray-200" />
            <div className="space-y-2">
                <div>Статистика:</div>
                <ul className="flex flex-col gap-y-2">
                    <Item label="Оценок" value={50} />
                    <Item label="Рецензий" value={45} />
                    <Item label="В избранном" value={45} />
                </ul>
            </div>
        </div>
    )
}
