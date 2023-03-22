import SEOPage from "@/components/SEOPage";
import { Text } from "@nextui-org/react";
import { signIn } from 'next-auth/react';

export default function Home() {
    return (
        <SEOPage title="Home" description="Online management system for scouts.">
            <button onClick={() => signIn()}>Hello WOrld</button>
        </SEOPage>
    );
}