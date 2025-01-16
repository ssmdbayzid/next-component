'use client'
import Image from "next/image";
import '../theme/header.scss'
import {useState} from "react";


import { ImFire } from "react-icons/im";
import { RxCross1 } from "react-icons/rx";
import { CiMenuBurger } from "react-icons/ci";
export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    return ( <header className="header-bg">
        <div className="content ">
            {/*Desktop view logo*/}
            <div className="flex items-center logo-section">
                <a href="/"> <Image  src="https://brainedge.ai/assets/images/brand/logo/logo-2--c9ea.webp" width={180} height={43} alt="logo"/></a>
                <a href="/allcourse" className="active">All Courses</a>
                <a href="/dashboard">Dashboard</a>
            </div>
            {/*mobile view logo*/}
            <div className="mobile-logo">
                <a href="/"><Image src="https://app.brainedge.ai/_next/image?url=%2Fassets%2Flogo%2Fbrainedge.png&w=32&q=75" width={50} height={43} alt="dsaf"/> </a>
            </div>
            <div className="button-section">
            <div className="link ">
                <a href="/login">Log In </a> or <a href="/signup">Sign up</a>
            </div>
            <CiMenuBurger onClick={() => setOpenMenu(!openMenu)} className="menu-icon"/>
            </div>
            {openMenu && <div className="mobile-menu">
                <div className="heading">
                    <Image src="https://app.brainedge.ai/_next/image?url=%2Fassets%2Flogo%2Fbrainedge.png&w=32&q=75"
                           height={40} width={50} alt="dsf"/>
                    <div className="link-container">
                            <ImFire className="fire"/>
                            <RxCross1 onClick={() => setOpenMenu(!openMenu)} className="menu-icon"/>
                    </div>
                </div>
                <div className="menu-content">
             <div className="links">
                    <a href="/login" className="active">All Courses</a>
                    <a href="/signup">Dashboard</a>
                </div>
                <div className="btn ">
                    <a href="/login">Log In </a> or <a href="/signup">Sign up</a>
                </div>
                </div>
                <div>
                </div>
            </div>}
        </div>
        </header>
    )
}