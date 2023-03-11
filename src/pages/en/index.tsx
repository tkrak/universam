import {Roboto, Roboto_Condensed} from 'next/font/google'
import styles from '../../styles/page.module.scss'
import Link from "next/link";
import {useCallback, useEffect, useState} from "react";

const roboto = Roboto({subsets: ['cyrillic-ext'], weight: ["400"]})
const robotoCondensed = Roboto_Condensed({subsets: ['cyrillic-ext'], weight: ["400","700"]})

const navItems = [
    { link: '/en#about', caption: 'About' },
    { link: '/en#cooperation', caption: 'Cooperation' },
    { link: '/en#training', caption: 'Training' },
    { link: '/en#consulting', caption: 'Consulting' },
    { link: '/en#contacts', caption: 'Contacts' },
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
                <div className={styles.logo}>Universam</div>
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
                    <span className={robotoCondensed.className}>experience<br/>passion<br/>innovations</span>
                </div>
            </section>
            <section className={styles.aboutWrapper} id="about">
                <h2 className={robotoCondensed.className}>About</h2>
                <p className={roboto.className}><span className={styles.green}>Universam</span> is a Ukrainian company with more than 20 years of experience in agriculture in Ukraine.</p>
                <p className={roboto.className}>We are engaged in a wide range of activities and provide various services in the field of agriculture, engineering and consulting.</p>
                <p className={roboto.className}>Our goal is the development and implementation of the latest technologies in our fields of activity, the economic and professional growth of our company, our partners and clients.</p>
                <p className={roboto.className}>We are constantly growing and looking for areas of investment and development. Such as architecture, technology, import and export of raw materials and equipment.</p>
            </section>
            <section className={styles.sectionWrapper} id="cooperation">
                <h2 className={robotoCondensed.className}>Cooperation</h2>
                <p className={roboto.className}>Our company is always open to any proposals for cooperation.</p>
                <p className={roboto.className}>By cooperating with us, you will receive the following benefits:</p>
                <ul>
                    <li>Access to a wide range of Universam services</li>
                    <li>High-quality and timely provision of services</li>
                    <li>Professionalism and competence of specialists</li>
                    <li>Legal support of cooperation</li>
                </ul>
                <p className={roboto.className}>You can contact Universam for the purpose of cooperation using the feedback form:</p>
                <Link className={styles.buttonLink} href="/#contacts">CONTACT WITH US</Link>
            </section>
            <section className={styles.sectionWrapper} id="training">
                <h2 className={robotoCondensed.className}>Training</h2>
                <p className={roboto.className}>The Universam company has great opportunities in the field of training and advanced training of employees.</p>
                <ul>
                    <li>Driver training</li>
                    <li>Training of operators of various equipment.</li>
                    <li>Organization of training of specialists in the field of agriculture.</li>
                    <li>Organization of training of specialists in the field of information development.</li>
                    <li>Organization of training of specialists in conducting economic activities in Ukraine.</li>
                    <li>And other.</li>
                </ul>
            </section>
            <section className={styles.sectionWrapper} id="consulting">
                <h2 className={robotoCondensed.className}>Consulting</h2>
                <p className={roboto.className}>The field of consulting is an integral part of our company's activities. We advise our clients in such areas as:</p>
                <ul>
                    <li>Doing business on the territory of Ukraine</li>
                    <li>Agro-industry</li>
                    <li>Engineering</li>
                    <li>Energy industry</li>
                    <li>Technical testing, research and certification in Ukraine</li>
                    <li>Geology, Geodesy</li>
                    <li>Implementation and use of technologies in business sectors</li>
                    <li>Implementation and use of alternative sources of equipmen</li>
                </ul>
            </section>
            <section className={`${styles.sectionWrapper} ${styles.sectionWrapperContacts}`} id="contacts">
                <h2 className={robotoCondensed.className}>Contacts</h2>
                <div className={styles.rowWrapper}>
                    <div>
                        <div className={styles.contactsLabelWrapper}>
                            <div className={styles.contactsLabel}><span className={robotoCondensed.className}>Phone:</span></div>
                            <div className={styles.contactsValue}>+380-66-387-87-29</div>
                        </div>
                        <div className={styles.contactsLabelWrapper}>
                            <div className={styles.contactsLabel}><span className={robotoCondensed.className}>E-mail:</span></div>
                            <div className={styles.contactsValue}>info@universam.bussiness</div>
                        </div>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.rowWrapper2}>
                            <div className={styles.field}>
                                <label className={`${styles.contactsLabel} ${robotoCondensed.className}`} htmlFor="">Name:</label>
                                <input className={styles.input} type="text" name="name" value={name} onChange={(event) => setName(event.target.value)}/>
                            </div>
                            <div className={styles.field}>
                                <label className={`${styles.contactsLabel} ${robotoCondensed.className}`} htmlFor="">Company:</label>
                                <input className={styles.input} type="text" name="company" value={company} onChange={(event) => setCompany(event.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <div className={styles.field}>
                                <label className={`${styles.contactsLabel} ${robotoCondensed.className}`} htmlFor="">Email:</label>
                                <input className={[styles.input, styles.textarea].join(' ')} type="text" name="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <div className={styles.field}>
                                <label className={`${styles.contactsLabel} ${robotoCondensed.className}`} htmlFor="">Text:</label>
                                <textarea className={[styles.input, styles.textarea].join(' ')} rows={5} name="message" value={msg} onChange={(event) => setMsg(event.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <div className={styles.field}>
                                <Link className={styles.button} href={`mailto:info@universam.bussiness?body=Імʼя: ${name}%0D%0AКомпанія: ${company}%0D%0AЕл.пошта: ${email}%0D%0A%0D%0A${msg}`}>Contact us</Link>
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
