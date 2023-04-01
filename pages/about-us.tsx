import SEOPage from "@/components/SEOPage";
import { Col, Grid, Text } from "@nextui-org/react";
import styles from '@/styles/AboutUs.module.scss';

export default function AboutUs() {
    return (
        <SEOPage title="About Us" description="Description about us.">
            <Grid.Container justify="center" className={styles.header}>
                <Grid alignItems="center" xs={12} sm={6}>
                    <Col>
                        <Text className={styles.header_text}>About Us</Text>
                    </Col>
                </Grid>
            </Grid.Container>
        </SEOPage>
    );
}