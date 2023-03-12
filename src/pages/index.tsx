import {Roboto, Roboto_Condensed} from 'next/font/google'
import styles from '../styles/page.module.scss'
import Link from "next/link";
import {useCallback, useEffect, useState} from "react";

const roboto = Roboto({subsets: ['cyrillic-ext'], weight: ["400"]})
const robotoCondensed = Roboto_Condensed({subsets: ['cyrillic-ext'], weight: ["400","700"]})

const navItems = [
    { link: '/#about', caption: 'Про нас' },
    { link: '/#cooperation', caption: 'Співпраця' },
    { link: '/#training', caption: 'Навчання' },
    { link: '/#consulting', caption: 'Консалтинг' },
    { link: '/#contacts', caption: 'Контакти' },
]

const Navigation = ({items}:any) => {
    return (
        <nav>
            {items.map((item:any) => (<Link key={item.link} href={item.link} scroll={false}><span className={robotoCondensed.className}>{item.caption}</span></Link>))}
        </nav>
    )
}

export default function Index() {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [scrollY, setScrollY] = useState(0);

    const onScroll = useCallback(() => {
        const { pageYOffset, scrollY } = window;
        setScrollY(pageYOffset);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [onScroll]);

    return (
        <main className={`${styles.main} ${roboto.className}`}>
            <header className={`${styles.header} ${scrollY > 96 ? styles.headerFilled : ''}`}>
                <div className={styles.leftBlock}>
                    <Link href="/" className={styles.logo}>Universam</Link>
                    <div className={[styles.languageSwitch].join(' ')}>
                        <Link href="/" className={[styles.languageItem, styles.languageItemActive].join(' ')}>UA</Link>
                        <Link href="/en" className={[styles.languageItem].join(' ')}>EN</Link>
                    </div>
                </div>
                <Navigation items={navItems}/>
            </header>
            <section className={styles.videoWrapper}>
                <video className="" width="100%" autoPlay loop preload="auto" muted>
                    <source media="(min-width:800px)" src="https://res.cloudinary.com/dfd1afdkw/video/upload/v1678568239/presentation1080_zaospn.mp4"/>
                    <source src="https://res.cloudinary.com/dfd1afdkw/video/upload/v1678568349/presentation720_krjgcf.mp4"/>
                </video>
                <div className={styles.videoWrapper__mask}/>
            </section>
            <section className={styles.mottoWrapper}>
                <div className={styles.motto}>
                    <span className={robotoCondensed.className}>Досвід<br/>Пристрасть<br/>Інновації</span>
                </div>
            </section>
            <section className={styles.aboutWrapper} id="about">
                <h2 className={robotoCondensed.className}>Про нас</h2>
                <p className={roboto.className}><span className={styles.green}>Компанія Універсам</span> – Українська компанія з більш ніж 20-ти річним досвідом роботи в сфері сільського господарства в Україні.</p>
                <p className={roboto.className}>Ми займаємося широким спектром діяльності та надаємо різноманітні послуги <span className={styles.green}>в галузі сільського господарства, інжинірингу та консалтингу</span>.</p>
                <p className={roboto.className}>Наша мета – розвиток та впровадження новітніх технологій у сферах нашої діяльності, економічне та професійне зростання нашої компанії, наших партнерів та клієнтів.</p>
                <p className={roboto.className}><span className={styles.green}>Ми постійно зростаємо і шукаємо напрямки інвестування та розвитку</span>. Такі як архітектура, технології, імпортування та експортування сировини та обладнання.</p>
            </section>
            <section className={styles.sectionWrapper} id="cooperation">
                <h2 className={robotoCondensed.className}>Співпраця</h2>
                <p className={roboto.className}>Наша компанія завжди відкрита для будь-яких пропозицій співпраці.</p>
                <p className={roboto.className}>Співпрацюючи з нами Ви отримаєте наступні переваги:</p>
                <ul>
                    <li>Доступ до широкого спектру послуг компанії Універсам</li>
                    <li>Якісне та своєчасне надання послуг</li>
                    <li>Професіоналізм та компетентність фахівців</li>
                    <li>Юридичний супровід співпраці</li>
                </ul>
                <p className={roboto.className}>Ви можете зв’язатися з компанією Універсам з метою співпраці за формою зворотного зв’язку:</p>
                <Link className={styles.buttonLink} href="/#contacts">ЗВЯЗАТИСЯ З НАМИ</Link>
            </section>
            <section className={styles.sectionWrapper} id="training">
                <h2 className={robotoCondensed.className}>Навчання</h2>
                <p className={roboto.className}>Компанія Універсам має великі можливості в сфері навчання та підвищення кваліфікації працівників.</p>
                <ul>
                    <li>Підготовку водіїв</li>
                    <li>Підготовка Операторів різноманітного обладнання.</li>
                    <li>Організація навчання фахівців в галузі сільського господарства.</li>
                    <li>Організація підготовки фахівців в галузі інформаційного девелопменту.</li>
                    <li>Організація підготовки фахівців з ведення економічної діяльності в Україні.</li>
                    <li>Та інші.</li>
                </ul>
            </section>
            <section className={styles.sectionWrapper} id="consulting">
                <h2 className={robotoCondensed.className}>Консалтинг</h2>
                <p className={roboto.className}>Сфера консалтингу є невід’ємною складовою діяльності нашої компанії. Ми консультуємо наших клієнтів в таких напрямках як:</p>
                <ul>
                    <li>Ведення бізнесу на території України</li>
                    <li>Агропромисловость</li>
                    <li>Інжиніринг</li>
                    <li>Енергетична промисловість</li>
                    <li>Технічні випробування, дослідження та сертифікація в Україні</li>
                    <li>Геологія, Геодезія</li>
                    <li>Впровадження та використання технологій у бізнес галузях</li>
                    <li>Впровадження і використання альтернативних джерел обладнання</li>
                </ul>
            </section>
            <section className={`${styles.sectionWrapper} ${styles.sectionWrapperContacts}`} id="contacts">
                <h2 className={robotoCondensed.className}>Контакти</h2>
                <div className={[styles.rowWrapper, styles.wrapper].join(' ')}>
                    <div>
                        <div className={styles.contactsLabelWrapper}>
                            <div className={styles.contactsLabel}><span className={robotoCondensed.className}>Телефон:</span></div>
                            <Link className={styles.contactsValue} href="tel:+380663878729">+380-66-387-87-29</Link>
                        </div>
                        <div className={styles.contactsLabelWrapper}>
                            <div className={styles.contactsLabel}><span className={robotoCondensed.className}>E-mail:</span></div>
                            <Link className={styles.contactsValue} href="mailto:info@universam.bussiness">info@universam.bussiness</Link>
                        </div>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.rowWrapper2}>
                            <div className={styles.field}>
                                <label className={`${styles.contactsLabel} ${robotoCondensed.className}`} htmlFor="">Імʼя:</label>
                                <input className={styles.input} type="text" name="name" value={name} onChange={(event) => setName(event.target.value)}/>
                            </div>
                            <div className={styles.field}>
                                <label className={`${styles.contactsLabel} ${robotoCondensed.className}`} htmlFor="">Компанія:</label>
                                <input className={styles.input} type="text" name="company" value={company} onChange={(event) => setCompany(event.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <div className={styles.field}>
                                <label className={`${styles.contactsLabel} ${robotoCondensed.className}`} htmlFor="">Ел.пошта:</label>
                                <input className={[styles.input, styles.textarea].join(' ')} type="text" name="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <div className={styles.field}>
                                <label className={`${styles.contactsLabel} ${robotoCondensed.className}`} htmlFor="">Текст:</label>
                                <textarea className={[styles.input, styles.textarea].join(' ')} rows={5} name="message" value={msg} onChange={(event) => setMsg(event.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <div className={styles.field}>
                                <Link className={styles.button} href={`mailto:info@universam.bussiness?body=Імʼя: ${name}%0D%0AКомпанія: ${company}%0D%0AЕл.пошта: ${email}%0D%0A%0D%0A${msg}`}>Звʼязатися</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className={styles.footer}>
                <p className={[styles.copyright, robotoCondensed.className].join(' ')}>© UNIVERSAM. All rights reserved.</p>
            </footer>
        </main>
    )
}
