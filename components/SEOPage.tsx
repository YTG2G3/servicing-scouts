import { NextSeo } from 'next-seo';
import { Button, Container, Link, Navbar, Text } from '@nextui-org/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import LoadingPage from '@/components/LoadingPage';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import styles from '@/styles/SEOPage.module.scss';

export default function SEOPage({ title, description, children, authed, unauthed, ...props }: any) {
    let { status } = useSession();
    let router = useRouter();

    let { setTheme } = useTheme();
    setTheme('dark')

    // Impossible case
    if (authed && unauthed) return <></>;

    // Loading screen only appears when its secured to wait for login info
    if ((authed || unauthed) && status === "loading") return <LoadingPage />;

    // If require login
    if (authed && status === "unauthenticated") {
        signIn();
        return <></>;
    }

    // If require logout
    if (unauthed && status === "authenticated") {
        router.replace("/");
        return <></>;
    }

    return (
        <>
            <NextSeo title={title} description={description} />

            <Container {...props}>
                <Navbar>
                    <Navbar.Brand>
                        <Link href='#'>
                            <Image className={styles.logo} width="50" height="50" src="/logo-bg.png" alt='N/A' />
                            <Text b onClick={() => router.push("/")}>Servicing Scouts</Text>
                        </Link>
                    </Navbar.Brand>

                    {status === "authenticated" ? (
                        <Navbar.Content>
                            <Navbar.Link href=''>Events</Navbar.Link>
                        </Navbar.Content>
                    ) : undefined}

                    <Navbar.Content>
                        {status === "authenticated" ? (
                            <Navbar.Item>
                                <Button auto flat onClick={() => signOut}>Sign Out</Button>
                            </Navbar.Item>
                        ) : (
                            <Navbar.Item>
                                <Button auto flat onClick={() => signIn("google")}>Log In</Button>
                            </Navbar.Item>
                        )}
                    </Navbar.Content>
                </Navbar>

                {children}
            </Container>
        </>
    );
}