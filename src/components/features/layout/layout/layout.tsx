import classNames from 'classnames'

import { LayoutNav } from './components/layout-nav'

type LayoutProps = {
    children: React.ReactNode
    filter?: React.ReactNode
    title: string
    size: 'sm' | 'lg'
    nav?: {
        label: string
        href: string
        exact?: boolean
    }[]
}

export const Layout = ({ children, filter, title, size, nav }: LayoutProps) => {
    const wrapperSize = `wrapper-${size}`

    return (
        <div className={classNames(wrapperSize, 'pt-12 pb-24')}>
            <div className="mb-12">
                <h1 className="mb-6 text-4xl font-bold sm:text-3xl">{title}</h1>
                <div className="flex items-center gap-x-6">
                    {filter}
                    <div className="min-w-0 flex-1">
                        {nav ? <LayoutNav items={nav} /> : <hr className="border-gray-200" />}
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}
