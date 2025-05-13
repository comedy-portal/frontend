'use client'

import Dropdown from 'react-bootstrap/Dropdown'

export type CustomDropdownItem = {
    label: string
    value: string
}

type CustomDropdownProps = {
    items: CustomDropdownItem[]
    selectedValue: string
    onSelect: (item: CustomDropdownItem) => void
}

export const CustomDropdown = ({ items, selectedValue, onSelect }: CustomDropdownProps) => {
    return (
        <Dropdown>
            <Dropdown.Toggle id="custom-dropdown" as="div">
                <span style={{ cursor: 'pointer' }}>{items.find(item => item.value === selectedValue)?.label}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu as="div">
                {items.map(item => (
                    <Dropdown.Item key={item.value} onClick={() => onSelect(item)}>
                        {item.label}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}
