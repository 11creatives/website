import { vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const mainStyle = style({
    height: '100dvh',
    background: vars.color.background,
    color: vars.color.textColor,
})
