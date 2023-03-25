import { NextSeo } from 'next-seo';
import { Container, Navbar, Text } from '@nextui-org/react';
import { signIn, useSession } from 'next-auth/react';
import LoadingPage from '@/components/LoadingPage';
import { useRouter } from 'next/router';

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
                    <Navbar.Brand>
                        <Text b>Servicing Scouts</Text>
                    </Navbar.Brand>

                    <Navbar.Content>
                        <Navbar.Link></Navbar.Link>
                    </Navbar.Content>
                </Navbar>

                {children}
            </Container>
        </>
    );
}