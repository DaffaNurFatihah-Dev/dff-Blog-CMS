import React from 'react'
import './globals.css'
import { ThemeProvider } from 'next-themes'

export const metadata = {
    description: 'Blog website build with Payload CMS and Next.js by dffanrf',
    title: 'daffanrf blog',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
    const { children } = props

    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider>
                    <main>{children}</main>
                </ThemeProvider>
            </body>
        </html>
    )
}
