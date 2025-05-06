'use client'

import { Pagination } from 'react-bootstrap'

import { useRouter, useSearchParams } from 'next/navigation'

type PaginatorProps = {
    pages: number
    currentPage: number
}

export const Paginator = ({ pages, currentPage }: PaginatorProps) => {
    const maxVisiblePages = 5
    const pageNumbers: number[] = []

    const router = useRouter()
    const searchParams = useSearchParams()

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('page', String(page))
        router.push(`?${params.toString()}`)
    }

    const renderPageNumbers = () => {
        if (pages <= maxVisiblePages) {
            for (let i = 1; i <= pages; i++) {
                pageNumbers.push(i)
            }
        } else if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
            pageNumbers.push(...Array.from({ length: maxVisiblePages - 1 }, (_, i) => i + 1))
            pageNumbers.push(0) // ...
            pageNumbers.push(pages)
        } else if (currentPage >= pages - Math.floor(maxVisiblePages / 2)) {
            pageNumbers.push(1)
            pageNumbers.push(0) // ...
            pageNumbers.push(
                ...Array.from({ length: maxVisiblePages - 2 }, (_, i) => pages - (maxVisiblePages - 2) + i),
            )
        } else {
            pageNumbers.push(1)
            pageNumbers.push(0) // ...
            pageNumbers.push(
                ...Array.from(
                    { length: maxVisiblePages - 2 },
                    (_, i) => currentPage - Math.floor(maxVisiblePages / 2) + i,
                ),
            )
            pageNumbers.push(0) // ...
            pageNumbers.push(pages)
        }

        return pageNumbers.map((number, index) => {
            return number === 0 ? (
                <Pagination.Ellipsis key={index} disabled />
            ) : (
                <Pagination.Item key={index} active={number === currentPage} onClick={() => handlePageChange(number)}>
                    {number}
                </Pagination.Item>
            )
        })
    }

    return (
        <Pagination>
            <Pagination.Prev
                disabled={currentPage === 1}
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
            />
            {renderPageNumbers()}
            <Pagination.Next
                disabled={currentPage === pages}
                onClick={() => currentPage < pages && handlePageChange(currentPage + 1)}
            />
        </Pagination>
    )
}
