import { NextSeo } from 'next-seo';
import { Container, Navbar, Text } from '@nextui-org/react';

export default function SEOPage({ title, description, children, ...props }: any) {
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