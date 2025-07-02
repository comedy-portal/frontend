import classNames from 'classnames'

import { LayoutNav } from './components/layout-nav'

type LayoutProps = {
    children: React.ReactNode
    title: string
    size: 'sm' | 'lg'
    nav: {
        label: string
        href: string
        exact?: boolean
    }[]
}

export const Layout = ({ children, title, size, nav }: LayoutProps) => {
    const wrapperSize = `wrapper-${size}`

    return (
        <div className={classNames(wrapperSize, 'py-8 sm:py-16')}>
            <div className="flex flex-col gap-y-8 sm:gap-y-8">
                <h1 className="text-3xl sm:text-4xl">{title}</h1>
                <LayoutNav items={nav} />
                {children}
            </div>
        </div>
    )
}
