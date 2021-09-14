import {useState, useEffect} from 'react';
import styles from '../styles/home.module.css';
import Image from 'next/image';
import Serp from './serp.js';
import ThemeSwitch from './ThemeSwtch.js';
import Head from "next/head"
 
export default function Home() {
const [theme, settheme] = useState("");
  return (
  	<div className={styles.home}>
     <Head>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" rel="stylesheet"/>
  </Head>
	<div className={`${styles.box} ${styles.yellow} ${styles.main}`}>
		<Image layout="fill" src={`/light/uparrow${theme}.gif`}/><div className={styles.middle}>
    <div className={styles.text}>HOME</div>
  </div></div>
	<a href="./" className={`${styles.box} ${styles.white}`}>
	<Image layout="fill" src={`/light/river${theme}.gif`}/>
		<div className={styles.middle}>
    <div className={styles.text}>ABOUT US</div>
  </div>
	</a>
	<a href="./" className={`${styles.box2} ${styles.orange}`}>
	<Image layout="fill" src={`/light/button${theme}.gif`}/>
	<div className={styles.middle}>
    <div className={styles.text}>OUR WORK</div>
  </div></a>
	<a  className={`${styles.box2} ${styles.pink}`}>
  <Serp/>
  <div className={styles.middle}>
    <div className={styles.text}></div>
  </div></a>
	<a  href="./" className={`${styles.box} ${styles.lightblue}`}>
<Image layout="fill" src={`/light/Arrows${theme}.gif`}/>
	<div className={styles.middle}>
    <div className={styles.text}>BLOG</div>
  </div></a>
	<a href="./" className={`${styles.box} ${styles.yellow}`}>
<Image layout="fill" src={`/light/confluencer${theme}.gif`}/>
	<div className={styles.middle}>
    <div className={styles.text}></div>
  </div></a>
	<a href="./" className={`${styles.box} ${styles.white}`}>
<Image layout="fill" src={`/light/lines${theme}.png`}/>
  <div className={styles.middle}>
    <div className={styles.text}></div>
  </div></a>
	<a href="./" className={`${styles.box} ${styles.orange}`}>
<Image layout="fill" src={`/light/rings${theme}.gif`}/>
	<div className={styles.middle}>
    <div className={styles.text}></div>
  </div></a>
  <a href="./" className={`${styles.box2} ${styles.white}`}>
  <Image layout="fill" src={`/light/logo${theme}.png`}/>
  <div className={styles.middle}>
    <div className={styles.text}>CONTACT US</div>
  </div></a>
  <ThemeSwitch theme={theme} settheme={settheme}/>
  
</div>

  	)
}