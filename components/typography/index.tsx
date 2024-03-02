import clsx from 'clsx'
import { TVariant, getStyle, getTag } from './utils'

type TypographyProps = {
    className?: string
    children: React.ReactChild
    /**
     * To set the font style.
     *
     * @default 'p'
     */
    variant?: TVariant
}

export function Typography(props: TypographyProps) {
    const { children, className, variant = 'p' } = props

    const Component = getTag(variant)
    const style = getStyle(variant)

    return <Component className={clsx(style, className)}>{children}</Component>
}
