'use client'

import { Button } from '@/components/ui/forms/button'

type LoadMoreProps = {
    isLoading: boolean
    onClick: () => void
}

export const LoadMore = ({ isLoading, onClick }: LoadMoreProps) => {
    return (
        <Button variant="outline" className="w-full" disabled={isLoading} onClick={onClick}>
            {isLoading ? 'Загрузка...' : 'Показать еще'}
        </Button>
    )
}
