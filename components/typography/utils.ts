import { h1Style, pSmallStyle, pStyle } from './styles.css'

export type TComponent =
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'small'
    | 'caption'
export type TVariant = 'p' | 'p-small' | 'heading1' | 'heading2'

export function getTag(variant: TVariant): TComponent {
    switch (variant) {
        case 'p':
        case 'p-small':
            return 'p'

        case 'heading1':
            return 'h1'

        default:
            return 'p'
    }
}

export function getStyle(variant: TVariant): string {
    switch (variant) {
        case 'p':
            return pStyle
        case 'p-small':
            return pSmallStyle
        case 'heading1':
            return h1Style
        default:
            return pStyle
    }
}
