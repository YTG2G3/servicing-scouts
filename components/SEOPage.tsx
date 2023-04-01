import { NextSeo } from 'next-seo';
import { Button, Container, Divider, Link, Navbar, Text } from '@nextui-org/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import LoadingPage from '@/components/LoadingPage';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '@/styles/SEOPage.module.scss';

export default function SEOPage({ title, description, children, authed, unauthed, ...props }: any) {
    let { status } = useSession();
    let router = useRouter();

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
                    <Navbar.Brand style={{ width: 200 }}>
                        <Link href='/'>
                            <Image className={styles.logo} width="50" height="50" src="/logo-bg.png" alt='N/A' />
                            <Text b onClick={() => router.push("/")}>Servicing Scouts</Text>
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Content>
                        <Navbar.Link href='/about-us'>About Us</Navbar.Link>
                        <Navbar.Link href='/our-staffs'>Our Staffs</Navbar.Link>

                        {status === "authenticated" ? (
                            <>
                                <Navbar.Link href='/events'>Events</Navbar.Link>
                                <Navbar.Link href='/calendar'>Calendar</Navbar.Link>
                                <Navbar.Link href='/profile'>Profile</Navbar.Link>
                            </>
                        ) : undefined}
                    </Navbar.Content>

                    <Navbar.Content style={{ width: 200, justifyContent: "flex-end" }}>
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

                <Divider className={styles.div} />

                <footer className={styles.footer}>
                    <Text className={styles.txt}>Contact <a href='mailto:henryk@algorix.io'>henryk@algorix.io</a> for issues</Text>
                    <Text className={styles.txt}>Servicing Scouts</Text>
                    <Text className={styles.txt}>© Copyright {new Date().getFullYear()} Algorix Corp.</Text>
                </footer>
            </Container>
        </>
    );
}