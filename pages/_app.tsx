import '@/styles/globals.scss';
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { darkTheme, lightTheme } from '@/lib/theme';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider defaultTheme='system' attribute='class' value={{ light: lightTheme, dark: darkTheme }}>
            <NextUIProvider>
                <SessionProvider>
                    <Component {...pageProps} />
                </SessionProvider>
            </NextUIProvider>
        </ThemeProvider>
    )
}
