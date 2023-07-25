import styles from "./styles.module.css"
import Image from "next/image";
import Link from "next/link";

const WhoWeAre = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftBlock}>
                <Image className={styles.img} src={'/who_we_are.png'} width={689} height={488} alt={'about us'}/>
            </div>
            <div className={styles.rightBlock}>
                <h2 className={styles.title}>About Us</h2>

                <p className={styles.subtitle}>
                    Continuing to build the future of Northern Cyprus, Şifa Construction takes advantage of the developing production and service technologies and goes one step further in each project.
                    <br/> <br/>
                    Şifa Construction, which grows day by day without compromising its respect for the environment and people, has become one of the trusted brands of the construction sector by delivering many real estate projects in Northern Cyprus on time.
                    <br/> <br/>
                    Adopting the principle of using innovative solutions in every service, Şifa Construction takes advantage of the developing production and service technologies and goes one step further in each project…
                </p>

                <div className={styles.buttonBody}>
                    <Link href={'/aboutus'}>
                        <button className={styles.button}>Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre;