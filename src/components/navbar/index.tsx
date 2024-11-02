import React, { FC, useState } from 'react';
import BrandImg from '@/assets/img/Logo/Brand-logo/brand.png';
import Styles from './navbar.module.css';

const Navbar: FC = () => {
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
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        style={{ borderColor: 'rgba(0, 0, 0, 0)' }}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse justify-content-end"
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