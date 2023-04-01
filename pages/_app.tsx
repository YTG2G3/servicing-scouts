import '@/styles/globals.scss';
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { darkTheme, lightTheme } from '@/lib/theme';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Servicing Scouts</title>
            </Head>

            <ThemeProvider defaultTheme='system' attribute='class' value={{ light: lightTheme, dark: darkTheme }}>
                <NextUIProvider>
                    <SessionProvider>
                        <Component {...pageProps} />
                    </SessionProvider>
                </NextUIProvider>
            </ThemeProvider>
        </>
    )
}
