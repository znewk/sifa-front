import styles from './styles.module.css'
import Image from "next/image";
import Link from "next/link";

const MiradouroHillsIntro = () => {
    return(
        <div className={styles.container}>
            <div className={styles.leftBlock}>
                <div className={styles.leftHeader}>
                    <div className={styles.titleBody}>
                        <h2 className={styles.title}>
                            MIRADOURO HILLS
                        </h2>

                        <h4 className={styles.titleLitle}>
                            Unique Landscape <br/>
                            Amazing Location
                        </h4>
                    </div>
                    <p className={styles.subtitle}>The Miradouro Hills project, which has a 360-degree view of Nicosia and Kyrenia, is located on Lovers Hill in Gonyeli, Nicosia.</p>
                </div>

                <div className={styles.buttonBody}>
                    <Link href={'/'}>
                        <button className={styles.button}>PROJECT REVIEW</button>
                    </Link>

                </div>
            </div>
            <div className={styles.rightBlock}>
                <Image src={'/header picture.png'} width={1190} height={1088} alt={'Miradouro'} className={styles.img}/>
            </div>
        </div>
    )
}

export default MiradouroHillsIntro;