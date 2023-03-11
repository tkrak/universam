import Image from 'next/image'
import {Roboto_Condensed} from 'next/font/google'
import img from '../assets/signal-2023-03-10-144205_002.jpeg'
import styles from '../styles/page.module.scss'

const robotoCondensed = Roboto_Condensed({subsets: ['cyrillic-ext'], weight: ["400","700"]})

export default function Index() {
    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <div className={styles.logo}>Universam</div>
                {/*<nav>*/}
                {/*    <a href="/#about"><span className={robotoCondensed.className}>Про нас</span></a>*/}
                {/*    <a href="/#cooperation"><span className={robotoCondensed.className}>Співпраця</span></a>*/}
                {/*    <a href="/#training"><span className={robotoCondensed.className}>Навчання</span></a>*/}
                {/*    <a href="/#consulting"><span className={robotoCondensed.className}>Консалтинг</span></a>*/}
                {/*    <a href="/#contacts"><span className={robotoCondensed.className}>Контакти</span></a>*/}
                {/*</nav>*/}
            </header>
            <section className={styles.videoWrapper}>
                <video className="" width="100%" autoPlay loop preload="auto" muted>
                    <source media="(min-width:800px)" src="/presentation1080.mp4"/>
                    <source src="/presentation720.mp4"/>
                </video>
                <div className={styles.videoWrapper__mask}/>

            </section>
            <section className={styles.mottoWrapper}>
                <div className={styles.motto}>
                    <span className={robotoCondensed.className}>Досвід<br/>Пристрасть<br/>Інновації</span>
                </div>
            </section>
            {/*<section className={styles.aboutWrapper} id="about">*/}
            {/*    <h2 className={robotoCondensed.className}>Про нас</h2>*/}
            {/*    <Image src={img} alt=""/>*/}
            {/*</section>*/}
            {/*<section className={styles.sectionWrapper} id="cooperation">*/}
            {/*    <h2 className={robotoCondensed.className}>Співпраця</h2>*/}
            {/*</section>*/}
            {/*<section className={styles.sectionWrapper} id="training">*/}
            {/*    <h2 className={robotoCondensed.className}>Навчання</h2>*/}
            {/*</section>*/}
            {/*<section className={styles.sectionWrapper} id="consulting">*/}
            {/*    <h2 className={robotoCondensed.className}>Консалтинг</h2>*/}
            {/*</section>*/}
            {/*<section className={styles.sectionWrapper} id="contacts">*/}
            {/*    <h2 className={robotoCondensed.className}>Контакти</h2>*/}
            {/*    <div>*/}
            {/*        <div>*/}
            {/*            <div>*/}
            {/*                <div>label</div>*/}
            {/*                <div>+380-66-387-87-29</div>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <div>label</div>*/}
            {/*                <div>info@universam.bussiness</div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <form action="">*/}
            {/*                <div>*/}
            {/*                    <label htmlFor="">Name</label>*/}
            {/*                    <input type="text" name="name"/>*/}
            {/*                </div>*/}
            {/*                <div>*/}
            {/*                    <label htmlFor="">Company</label>*/}
            {/*                    <input type="text" name="company"/>*/}
            {/*                </div>*/}
            {/*                <div>*/}
            {/*                    <label htmlFor="">Email</label>*/}
            {/*                    <input type="text" name="email"/>*/}
            {/*                </div>*/}
            {/*                <div>*/}
            {/*                    <label htmlFor="">Message</label>*/}
            {/*                    <textarea name="message"/>*/}
            {/*                </div>*/}
            {/*            </form>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <footer className={styles.footer}>
                <p className={styles.copyright}><span className={robotoCondensed.className}>© UNIVERSAM. All rights reserved.</span></p>
            </footer>
        </main>
    )
}
