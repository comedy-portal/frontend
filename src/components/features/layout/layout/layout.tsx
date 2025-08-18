import classNames from 'classnames'

import { LayoutNav } from './components/layout-nav'

type LayoutProps = {
    children: React.ReactNode
    filter?: React.ReactNode
    title: string
    info?: React.ReactNode
    size?: 'sm' | 'lg'
    nav?: {
        label: string
        href: string
        exact?: boolean
        filter?: React.ReactNode
    }[]
    preserveQuery?: boolean
}

export const Layout = ({ children, filter, title, info, size, nav, preserveQuery }: LayoutProps) => {
    const wrapperSize = `inner-wrapper-${size}`

    return (
        <div className="wrapper pt-12 pb-24">
            <div className={classNames(wrapperSize)}>
                <div className="mb-12 space-y-6">
                    <h1 className="text-4xl font-bold sm:text-3xl">{title}</h1>
                    {info && <div className="text-gray-500">{info}</div>}
                    <LayoutNav items={nav} filter={filter} preserveQuery={preserveQuery} />
                </div>
                {children}
            </div>
        </div>
    )
}
