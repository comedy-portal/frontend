'use client'

import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

type DropdownItem = {
    label: string
    value: string
}

type CustomDropdownProps = {
    items: DropdownItem[]
    onSelect: (value: string) => void
}

export const CustomDropdown = ({ items, onSelect }: CustomDropdownProps) => {
    const [selectedLabel, setSelectedLabel] = useState<string>(items[0].label)

    const handleSelect = (item: DropdownItem) => {
        setSelectedLabel(item.label)
        onSelect(item.value)
    }

    return (
        <Dropdown>
            <Dropdown.Toggle id="custom-dropdown" as="div">
                <span style={{ cursor: 'pointer' }}>{selectedLabel}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu as="div">
                {items.map(item => (
                    <Dropdown.Item key={item.value} onClick={() => handleSelect(item)}>
                        {item.label}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}
