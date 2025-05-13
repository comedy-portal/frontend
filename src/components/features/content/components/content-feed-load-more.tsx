'use client'

import { Button } from 'react-bootstrap'

import { setContentCursor } from '@/redux/features/content-slice'
import { useAppDispatch } from '@/redux/hooks'

type ContentFeedLoadMoreProps = {
    cursor: number
    isFetching: boolean
}

export const ContentFeedLoadMore = ({ cursor, isFetching }: ContentFeedLoadMoreProps) => {
    const dispatch = useAppDispatch()

    return (
        <Button
            variant="outline-secondary"
            className="w-full"
            disabled={isFetching}
            onClick={() => dispatch(setContentCursor(cursor))}
        >
            {isFetching ? 'Загрузка...' : 'Показать еще'}
        </Button>
    )
}
