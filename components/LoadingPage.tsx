import { Loading } from "@nextui-org/react";
import styles from '@/styles/Loading.module.scss';

export default function LoadingPage() {
    return (
        <div className={styles.center}>
            <Loading>Loading...</Loading>
        </div>
    );
}