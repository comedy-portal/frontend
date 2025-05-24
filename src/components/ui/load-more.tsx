'use client'

import { Button } from 'react-bootstrap'

type LoadMoreProps = {
    isLoading: boolean
    onClick: () => void
}

export const LoadMore = ({ isLoading, onClick }: LoadMoreProps) => {
    return (
        <Button variant="outline-secondary" className="w-full" disabled={isLoading} onClick={onClick}>
            {isLoading ? 'Загрузка...' : 'Показать еще'}
        </Button>
    )
}
