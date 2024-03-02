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
        <section className={clsx(sectionClassName, containerStyle)}>
            <div className={clsx(wrapperClassName, wrapperStyle)}>
                {children}
            </div>
        </section>
    )
}
