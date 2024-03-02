import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
    color: {
        orange: '#FF570D',
        red: '#FF0801',
        night: '#141517',
        gray: '#727375',
        white: '#ffffff',
        background: '#161b21',
        textColor: '#ffffff',
    },

    spacing: {
        rootPadding: '1rem 2rem',
    },
})
