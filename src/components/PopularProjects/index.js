import styles from './styles.module.css'
import {motion} from 'framer-motion'
import {useState, useEffect, useRef} from 'react'

const PopularProjects = () => {

    const [width, setWidth] = useState(0)
    const carousel = useRef();

    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
        // console.log(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.titleBlock}>
                <h2 className={styles.title}>Popular projects</h2>
                <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> Dolore eligendi molestiae odio sunt unde velit.</p>
            </div>

            <div className={styles.hr}></div>

            <motion.div className={styles.carousel} ref={carousel}>
                <motion.div drag={'x'}
                            dragConstraints={{
                                right: 0,
                                left: -width
                            }}
                            className={styles.innerCarousel}>


                    <motion.div className={styles.item}>
                        <div className={styles.itemImage}
                            style={{backgroundImage: `url(/TiliaLuxuryVillas.jpg)`}}
                        ></div>
                        <div className={styles.itemFooter}>
                            <h3>A-B-D Types Villas</h3>

                            <p>Tilia Luxury Villas</p>
                        </div>
                    </motion.div>
                    <motion.div className={styles.item}>
                        <div className={styles.itemImage}></div>
                        <div className={styles.itemFooter}>
                            <h3>A-B-D Types Villas</h3>

                            <p>Tilia Luxury Villas</p>
                        </div>
                    </motion.div>
                    <motion.div className={styles.item}>
                        <div className={styles.itemImage}></div>
                        <div className={styles.itemFooter}>
                            <h3>A-B-D Types Villas</h3>

                            <p>Tilia Luxury Villas</p>
                        </div>
                    </motion.div>

                    <motion.div className={styles.item}>
                        <div className={styles.itemImage}></div>
                        <div className={styles.itemFooter}>
                            <h3>A-B-D Types Villas</h3>

                            <p>Tilia Luxury Villas</p>
                        </div>
                    </motion.div>

                    <motion.div className={styles.item}>
                        <div className={styles.itemImage}></div>
                        <div className={styles.itemFooter}>
                            <h3>A-B-D Types Villas</h3>

                            <p>Tilia Luxury Villas</p>
                        </div>
                    </motion.div>


                </motion.div>
            </motion.div>
        </div>
    )
}

export default PopularProjects;