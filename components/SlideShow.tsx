import { Col, Grid, Image, Text } from "@nextui-org/react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from 'embla-carousel-react';
import styles from '@/styles/SlideShow.module.scss';

export default function SlideShow() {
    let [emblaRef] = useEmblaCarousel({ align: "start", loop: true, draggable: false }, [Autoplay({ delay: 8000 })]);

    // TODO - bukkit
    let imgs = [
        "https://littlevisuals.co/images/747.jpg",
        "https://littlevisuals.co/images/AE1.jpg",
        "https://littlevisuals.co/images/Njoror.jpg"
    ];

    // TODO - maybe cut image?
    // TODO - maybe shadow underneath text?
    return (
        <Grid.Container justify="center" className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>{imgs.map((v, i) =>
                <div key={i} className={styles.embla__slide}>
                    <Image src={v} placeholder="blur" alt="Loading" />
                </div>
            )}</div>

            <Grid alignItems="center" className={styles.hover} xs={12} sm={6}>
                <Col>
                    <Text className={styles.jtext}>Servicing Scouts</Text>
                    <Text className={styles.btext}>Manage scout events virtually. Powered by Algorix.</Text>
                </Col>
            </Grid>
        </Grid.Container>
    );
}