import React, { FC, useState } from 'react';
import BrandImg from '@/assets/img/Logo/Brand-logo/brand.png';
import Styles from './navbar.module.css';
import { isMobile } from '@/utils/';

const Navbar: FC = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
            <nav
                className="navbar fixed-top navbar-expand-lg bg-light shadow"
                id="navbar1"
            >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            alt="Image not available"
                            src={BrandImg.src}
                            className={Styles.brandImg + ' img-fluid'}
                        />
                    </a>

                    {/* Collapse button that shows up on mobile view. */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        style={{ borderColor: 'rgba(0, 0, 0, 0)' }}
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className={
                            isMobile()
                                ? `${Styles['overlay']} ${
                                      navbarOpen
                                          ? Styles['show'] +
                                            ' ' +
                                            Styles['navbar-mobile-dropdown']
                                          : 'd-none'
                                  }`
                                : ''
                        }
                        id="navbarNavDropdown"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item ml-lg-2">
                                <a
                                    className="nav-link active"
                                    // onClick="$('#s1').animatescroll();"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item ml-lg-2">
                                <a
                                    className="nav-link"
                                    // onClick="$('#s2').animatescroll();"
                                >
                                    Services
                                </a>
                            </li>
                            <li className="nav-item ml-lg-2">
                                <a
                                    className="nav-link"
                                    // onClick="$('#s3').animatescroll();"
                                >
                                    Projects
                                </a>
                            </li>
                            <li className="nav-item ml-lg-2">
                                <a
                                    className="nav-link"
                                    // onClick={`$('.s7').animatescroll()`}
                                >
                                    About
                                </a>
                            </li>
                            <li className="nav-item ml-lg-2">
                                <a
                                    className="nav-link"
                                    // onClick="$('#s4').animatescroll();"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
