import classNames from 'classnames'

import { LayoutNav } from './components/layout-nav'

type LayoutProps = {
    children: React.ReactNode
    title: string
    size: 'sm' | 'lg'
    nav?: {
        label: string
        href: string
        exact?: boolean
    }[]
}

export const Layout = ({ children, title, size, nav }: LayoutProps) => {
    const wrapperSize = `wrapper-${size}`

    return (
        <div className={classNames(wrapperSize, 'pt-12 pb-24')}>
            <div className="mb-8">
                <h1 className="mb-4 text-2xl font-semibold sm:text-3xl">{title}</h1>
                {nav ? <LayoutNav items={nav} /> : <hr className="border-gray-200" />}
            </div>
            {children}
        </div>
    )
}
