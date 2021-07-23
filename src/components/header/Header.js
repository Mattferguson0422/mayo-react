import React from 'react'
import { MainLogo } from "./MainLogo";
import {HeaderNavigation} from "./HeaderNavigation";
import {Banner} from "./Banner";
import {SocialMedia} from "./SocialMedia";

export const Header = ({open,setOpen,page}) => {

    return (
    <header id={page}>
        <div className="header-top">
            <ul className="logo-holder">
                <li>
                    <MainLogo />
                </li>
                <li className={'mobile-header-heading'}>
                    <a href="/">Mayo Clinic Careers</a>
                </li>
                <li>
                    <button
                        id={'mobile-toggle'}
                        className={'btn-reset'}
                        onClick={() => setOpen(!open)}
                    >Menu</button>
                </li>
            </ul>
        </div>
        <HeaderNavigation open={open} />
        <Banner page={page} />
        <a href="https://apply.mayoclinic.org/TGnewUI/Search/Home/Home?partnerid=25309&siteid=5277#home" className="applicant-login">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 27">
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path d="M12,2A5,5,0,1,1,7,7a5,5,0,0,1,5-5m0-2a7,7,0,1,0,7,7A7,7,0,0,0,12,0ZM24,23a7,7,0,0,0-7-7H7a7,7,0,0,0-7,7v4H2V23a5,5,0,0,1,5-5H17a5,5,0,0,1,5,5v4h2Z"/>
                </g>
            </g>
        </svg>Applicant Login</a>
        <SocialMedia />
    </header>
)}