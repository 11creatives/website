import { style } from '@vanilla-extract/css'

export const pStyle = style({
    fontSize: '1rem',
    lineHeight: 1.25,
})

export const pSmallStyle = style({
    fontSize: '0.875rem',
    lineHeight: 1.2,
})

export const h1Style = style({
    fontSize: '2rem',
    lineHeight: 1.75,

    '@media': {
        'screen and (min-width: 35em)': {
            fontSize: '3rem',
        },

        'screen and (min-width: 48em)': {
            fontSize: '4rem',
        },
    },
})
