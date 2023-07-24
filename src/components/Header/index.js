import styles from './styles.module.css'
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
import {useState} from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
       <>
           <header className={styles.header}>
               <div className={styles.desktopHeader}>
                   <div className={styles.left}>
                       <Link href={'/'}>
                           <Image src={'/Sifa-Construction-Logo-Blue.png'} width={697} height={227} alt={'logo'} className={styles.logo}/>
                       </Link>


                       <ul className={styles.menu}>
                           <Link href={'/'} className={styles.link}>
                               <li className={styles.menuItem}>Home</li>
                           </Link>
                           <Link href={'/'} className={styles.link}>
                               <li className={styles.menuItem}>About Us</li>
                           </Link>
                           <Link href={'/'} className={styles.link}>
                               <li className={styles.menuItem}>Services</li>
                           </Link>
                           <Link href={'/'} className={styles.link}>
                               <li className={styles.menuItem}>Projects</li>
                           </Link>
                           <Link href={'/'} className={styles.link}>
                               <li className={styles.menuItem}>Our News</li>
                           </Link>
                       </ul>
                   </div>


                   <Link href={'/'} className={styles.link}>
                       <button className={styles.button}>
                           Contacts
                       </button>
                   </Link>
               </div>
               <div className={styles.contacts}>

               </div>

               <div className={styles.mobileHeader}>
                   <Image src={'/Sifa-Construction-Logo-Blue.png'} width={697} height={227} alt={'logo'} className={styles.logo}/>

                   <Image src={'/menu.png'} alt={'menu'} height={32} width={32} onClick={()=>setIsOpen(!isOpen)}/>
               </div>
           </header>

           <motion.div
               layout style={{width: isOpen ? "65%" : 0}}
               className={styles.sideBar}
           >
               <ul className={styles.menu}>
                   <Link href={'/'} className={styles.link}>
                       <li className={styles.menuItem}>Home</li>
                   </Link>
                   <Link href={'/'} className={styles.link}>
                       <li className={styles.menuItem}>About Us</li>
                   </Link>
                   <Link href={'/'} className={styles.link}>
                       <li className={styles.menuItem}>Services</li>
                   </Link>
                   <Link href={'/'} className={styles.link}>
                       <li className={styles.menuItem}>Projects</li>
                   </Link>
                   <Link href={'/'} className={styles.link}>
                       <li className={styles.menuItem}>Our News</li>
                   </Link>
               </ul>
           </motion.div>
       </>
    )
}

export default Header;