import { Button, Card, Col, Grid, Row, Text } from "@nextui-org/react";
import styles from '@/styles/InfoCard.module.scss';

export default function InfoCard({ img, label, title, description, btntxt, btnevent }) {
    return (
        <Grid xs={12} sm={4}>
            <Card isHoverable>
                <Card.Image src={img} />

                <Card.Header className={styles.cardcont}>
                    <Col>
                        <Text className={styles.stxt}>{label}</Text>
                        <Text className={styles.ttxt}>{title}</Text>
                    </Col>
                </Card.Header>

                <Card.Divider />

                <Card.Body>
                    <Text>{description}</Text>
                </Card.Body>

                <Card.Footer className={styles.aright}>
                    <Button flat auto rounded onClick={btnevent}>{btntxt}</Button>
                </Card.Footer>
            </Card>
        </Grid>
    )
}