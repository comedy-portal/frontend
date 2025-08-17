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
        <div className="rounded-xl bg-gray-50 p-8">
            <ul className="flex flex-col gap-y-2">
                <Item label="Оценок" value={50} />
                <Item label="Рецензий" value={45} />
                <Item label="В избранном" value={45} />
            </ul>
        </div>
    )
}
