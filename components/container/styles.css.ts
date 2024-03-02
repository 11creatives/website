import { vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const containerStyle = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

export const wrapperStyle = style({
    flex: 1,
    width: '100%',
    maxWidth: '80rem',
    padding: vars.spacing.rootPadding,
})
