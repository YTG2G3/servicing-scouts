import SEOPage from "@/components/SEOPage";
import { Grid } from "@nextui-org/react";
import SlideShow from "@/components/SlideShow";
import InfoCard from "@/components/InfoCard";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
    let { status } = useSession();
    let router = useRouter();

    // TODO - Get text from server and cut off ...
    return (
        <SEOPage title="Home" description="Online management system for scouts.">
            <SlideShow />

            <Grid.Container gap={6}>
                <InfoCard img="https://littlevisuals.co/images/canal.jpg" label="Mission" title="Our Mission" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat turpis, dapibus facilisis diam vitae, blandit volutpat lacus. Morbi quis dui congue, aliquet quam vitae, ultrices lectus. Vivamus condimentum euismod ante sit amet aliquet. Donec convallis scelerisque est in fermentum. Curabitur non iaculis massa, non laoreet sem. Donec condimentum magna volutpat libero facilisis, ut pretium nunc lacinia. Integer vestibulum lorem nec dolor lacinia porta. Pellentesque at ex porttitor, porta risus ac, cursus velit." btntxt="Learn more" btnevent={() => router.push("/about-us")} />

                <InfoCard img="https://littlevisuals.co/images/cobble.jpg" label="About Us" title="Who We Are" description="Morbi at leo diam. Cras lectus ligula, ultricies eu velit sit amet, dictum ultrices neque. Maecenas non cursus enim, in molestie risus. Vestibulum et cursus quam. Mauris malesuada arcu nec nunc finibus, non pharetra libero auctor. Quisque eu vehicula magna, ac facilisis quam. Pellentesque finibus pretium dapibus. Sed eu maximus massa. Nam pellentesque porta fringilla. Duis magna turpis, porta id risus ac, congue viverra diam. Sed posuere semper ornare. Integer nec enim mollis dolor gravida consectetur quis id velit. Quisque convallis ornare nunc, quis consequat ligula vehicula maximus. Integer at molestie turpis. Phasellus ac elementum erat. Morbi mollis porta felis non ultrices." btntxt="Learn more" btnevent={() => router.push("/about-us")} />

                <InfoCard img="https://littlevisuals.co/images/eponymous.jpg" label="Events" title="Upcoming Events" description="Donec porttitor nisl a arcu lobortis, at consequat elit auctor. Curabitur mattis bibendum mi eget rutrum. Sed ac iaculis libero, non finibus leo. Nulla in massa ut magna elementum aliquet. Proin posuere, eros at pulvinar sagittis, velit justo porttitor ante, at ornare arcu purus malesuada odio. Fusce hendrerit, magna sit amet consectetur convallis, metus risus egestas libero, non rhoncus lectus ipsum sit amet nulla. Nunc volutpat suscipit interdum. Phasellus porttitor convallis nisi quis consectetur." btntxt={status === "authenticated" ? "View" : "Login"} btnevent={() => status === "authenticated" ? router.push("/events") : signIn("google")} />
            </Grid.Container>
        </SEOPage>
    );
}