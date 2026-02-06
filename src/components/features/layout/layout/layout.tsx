import { ReactNode } from 'react'

import classNames from 'classnames'

import { LayoutNav } from './components/layout-nav'

type LayoutProps = {
    children: ReactNode
    title: string
    info?: ReactNode
    size?: 'sm' | 'lg'
    nav?: {
        label: string
        href: string
        exact?: boolean
        filter?: ReactNode
    }[]
    preserveQuery?: boolean
    sidebar?: {
        component: ReactNode
        showOnMobile?: boolean
    }
}

export const Layout = ({ children, title, info, size, nav, preserveQuery, sidebar }: LayoutProps) => {
    const innerWrapperSize = `inner-wrapper-${size}`

    return (
        <div className="wrapper flex gap-x-12 pt-12 pb-24">
            <div className={classNames('flex-1 shrink-0', innerWrapperSize)}>
                <div className="mb-6 space-y-6">
                    <h1 className="text-4xl font-bold sm:text-3xl">{title}</h1>
                    {info && <div className="text-gray-500">{info}</div>}
                    {sidebar && sidebar.showOnMobile && (
                        <div className="mb-12 block lg:hidden">{sidebar.component}</div>
                    )}
                    {nav?.length && <LayoutNav items={nav} preserveQuery={preserveQuery} />}
                </div>
                {children}
            </div>

            {sidebar && (
                <div className="hidden shrink-0 flex-col gap-y-12 pt-16 md:flex-row md:gap-x-6 lg:block lg:w-75 lg:flex-col xl:w-92">
                    {sidebar.component}
                </div>
            )}
        </div>
    )
}
