import SEOPage from "@/components/SEOPage";
import { Card, Col, Grid, Row, Text } from "@nextui-org/react";
import styles from '@/styles/Home.module.scss';

export default function Home() {
    return (
        <SEOPage title="Home" description="Online management system for scouts.">
            <Grid.Container justify="center" className={styles.jumbo}>
                <Grid xs={12} sm={6} alignItems="center">
                    <Col className={styles.col}>
                        <Text className={styles.jtext}>Servicing Scouts</Text>
                        <Text className={styles.btext}>Manage scout events virtually. Powered by Algorix.</Text>
                    </Col>
                </Grid>
            </Grid.Container>

            <Grid.Container gap={6}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable>
                        <Card.Image src="https://littlevisuals.co/images/canal.jpg" />

                        <Card.Header className={styles.cardcont}>
                            <Col>
                                <Text className={styles.stxt}>Mission</Text>
                                <Text className={styles.ttxt}>Our Mission</Text>
                            </Col>
                        </Card.Header>

                        <Card.Divider />

                        <Card.Body>
                            <Col>
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor urna, aliquam ut venenatis nec, consectetur suscipit nibh. Nam sollicitudin placerat massa, vulputate congue augue commodo accumsan. Donec in urna viverra, auctor ipsum et, molestie mauris. Morbi pharetra suscipit nibh, et scelerisque elit eleifend id. Aliquam rutrum est ipsum, non imperdiet nisi consectetur in. Donec ut ex scelerisque, pellentesque metus quis, rhoncus elit. Duis porta a nibh at pharetra. Nullam faucibus et turpis condimentum consequat. Duis a sodales velit, tempor suscipit odio. In ornare aliquet tellus, non viverra felis dapibus sed. Nunc ultrices mauris leo, viverra vestibulum leo interdum nec. Proin auctor eros vitae mauris cursus lacinia.
                                </Text>
                            </Col>
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={4}>
                    <Card isHoverable>
                        <Card.Image src="https://littlevisuals.co/images/cobble.jpg" />

                        <Card.Header className={styles.cardcont}>
                            <Col>
                                <Text className={styles.stxt}>About Us</Text>
                                <Text className={styles.ttxt}>Who We Are</Text>
                            </Col>
                        </Card.Header>

                        <Card.Divider />

                        <Card.Body>
                            <Col>
                                <Text>
                                    Morbi at leo diam. Cras lectus ligula, ultricies eu velit sit amet, dictum ultrices neque. Maecenas non cursus enim, in molestie risus. Vestibulum et cursus quam. Mauris malesuada arcu nec nunc finibus, non pharetra libero auctor. Quisque eu vehicula magna, ac facilisis quam. Pellentesque finibus pretium dapibus. Sed eu maximus massa. Nam pellentesque porta fringilla. Duis magna turpis, porta id risus ac, congue viverra diam. Sed posuere semper ornare. Integer nec enim mollis dolor gravida consectetur quis id velit. Quisque convallis ornare nunc, quis consequat ligula vehicula maximus. Integer at molestie turpis. Phasellus ac elementum erat. Morbi mollis porta felis non ultrices.
                                </Text>
                            </Col>
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={4}>
                    <Card isHoverable>
                        <Card.Image src="https://littlevisuals.co/images/eponymous.jpg" />

                        <Card.Header className={styles.cardcont}>
                            <Col>
                                <Text className={styles.stxt}>History</Text>
                                <Text className={styles.ttxt}>Our History</Text>
                            </Col>
                        </Card.Header>

                        <Card.Divider />

                        <Card.Body>
                            <Col>
                                <Text>
                                    Donec porttitor nisl a arcu lobortis, at consequat elit auctor. Curabitur mattis bibendum mi eget rutrum. Sed ac iaculis libero, non finibus leo. Nulla in massa ut magna elementum aliquet. Proin posuere, eros at pulvinar sagittis, velit justo porttitor ante, at ornare arcu purus malesuada odio. Fusce hendrerit, magna sit amet consectetur convallis, metus risus egestas libero, non rhoncus lectus ipsum sit amet nulla. Nunc volutpat suscipit interdum. Phasellus porttitor convallis nisi quis consectetur.
                                </Text>
                            </Col>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </SEOPage>
    );
}