// import Image from 'next/image'
// import Link from 'next/link'
import { useState } from 'react'
import acmw_logo from "./acmw_logo.png"
import acm_logo from "./acm_logo.png"
// import sist_logo from "../public/sist_logo.jpeg"
import hamburger from "./ham_test.png"
import ham_cross from "./ham_cross.png"
// import styles from '../styles/navbar.module.css'
import './styles.css'
import sislogo from './sist_logo.jpeg'

export default function Navbar(){

    const [toggleMenu,setToggleMenu]=useState(false)

    const togglenav = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <div className="navbar">
            {(toggleMenu) ? (<div className="ham_container">
                <button onClick={togglenav}><img src={hamburger} alt="hamburger"/></button>
            </div>)
                :
            (<div className="ham_container">
                <button onClick={togglenav}><img src={ham_cross} alt="hamburger"/></button>
            </div>)
            }
            <div className="nav_left">
               <img className="sist_logo" src={sislogo} width='50' height='50' alt='SIST LOGO'/>
               {(toggleMenu) ? (<div className="links_container">
                    <a className="nav_links" href="/" alt="home"><p>HOME</p></a>
                    <a className="nav_links" href="/" alt="home"><p>EVENTS</p></a>
                    <a className="nav_links" href="/about" alt="home"><p>ABOUT US</p></a>
                </div>)
                :
                (<div className="links_container_passive">
                    <a className="nav_links" href="/" alt="home">HOME</a>
                    <a className="nav_links" href="/" alt="home">EVENTS</a>
                    <a className="nav_links" href="/about" alt="about">ABOUT US</a>
                </div>)
                }
            </div>
            <div className="nav_right">
                <img className="acm_logo" src={acm_logo} width='80' height='70' alt='ACM SIST LOGO'/>
                <div className="sep"></div>
                <img className="acm_logo" src={acmw_logo} width='100' height='70' alt='ACM SIST LOGO'/>
            </div>
        </div>
    )
}