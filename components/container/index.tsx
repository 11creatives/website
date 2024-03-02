import clsx from 'clsx'

import { containerStyle, wrapperStyle } from './styles.css'

type ContainerProps = {
    children: React.ReactElement
    sectionClassName?: string
    wrapperClassName?: string
}

export function Container(props: ContainerProps) {
    const { children, sectionClassName, wrapperClassName } = props
    return (
        <section className={clsx(containerStyle, sectionClassName)}>
            <div className={clsx(wrapperStyle, wrapperClassName)}>
                {children}
            </div>
        </section>
    )
}
