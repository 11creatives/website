import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Navbar } from '@/components/navbar'
import '@/style/global.css'

import { mainStyle } from './layout.css'

const inter = Inter({ subsets: ['latin'], weight: ['400', '900'] })

export const metadata: Metadata = {
    title: '11 Creatives',
    description: 'A Youtube video editor company',
}

type TRootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout(props: TRootLayoutProps) {
    const { children } = props
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className={mainStyle}>
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    )
}
