import React from 'react'
import './header.scss'

const Header = () => {
    return (
        <>
            <section id="topbar" className="topbar d-flex align-items-center">
                <div className="container d-flex justify-content-center justify-content-md-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="ri-mail-fill d-flex align-items-center"> &nbsp; <a href="mailto:ydehfuli@gmail.com">ydehfuli@gmail.com</a></i>
                        <i className="ri-phone-fill d-flex align-items-center ms-4"> &nbsp; <span>09123456789</span></i>
                    </div>
                    <div className="social-links d-none d-md-flex align-items-center">
                        <a href="#" className="twitter"><i className="ri-telegram-fill"></i></a>
                        <a href="#" className="facebook"><i className="ri-facebook-fill"></i></a>
                        <a href="#" className="instagram"><i className="ri-instagram-fill"></i></a>
                        <a href="#" className="linkedin"><i className="ri-youtube-fill"></i></a>
                    </div>
                    <div className="contact-info d-flex align-items-start">
                        <button className="user-login"><i className="ri-login-circle-line"></i>
                            <span className="d-none d-md-flex">
                                ثبت نام | ورود
                            </span>
                        </button>
                        &nbsp;
                        <button className="basket"><i className="ri-shopping-basket-fill"></i></button>
                    </div>
                </div>
            </section>

            <header id="header" className="header d-flex align-items-center">

                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a href="https://github.com/YasinDehfuli" className="logo d-flex align-items-center">
                     
                        <img src="https://i.postimg.cc/VvQy4WyS/4xmen-logo.png" alt=""/>
                    </a>

                    <div className="search-bar d-flex align-items-center">
                        <form className="form">
                            <button>
                                <i className="ri-search-2-line"></i>
                            </button>
                            <input className="input" placeholder="جستجو" required="" type="text"/>
                                <button className="reset" type="reset">
                                    <i className="ri-close-fill"></i>
                                </button>
                        </form>
                    </div>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a href="#">
                                خانه
                            </a></li>
                          
                            <li className="dropdown"><a href="#"><span>
                                موتور برق
                            </span> <i className="ri-arrow-drop-down-fill dropdown-indicator"></i></a>
                                <ul>
                                    <li><a href="#">
                                        موتور دیزلی
                                    </a></li>
                                    <li className="dropdown"><a href="#"><span>
                                        موتور بنزینی
                                    </span> <i className="ri-arrow-drop-down-fill dropdown-indicator"></i></a>
                                        <ul>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        موتور توربو
                                    </a></li>
                                    <li><a href="#">
                                        موتور دیزل
                                    </a></li>
                                    <li><a href="#">
                                        موتور برقی
                                    </a></li>
                                </ul>
                            </li>
                        
                            <li className="dropdown"><a href="#"><span>
                                پمپ
                            </span> <i className="ri-arrow-drop-down-fill dropdown-indicator"></i></a>
                                <ul>
                                    <li><a href="#">
                                        موتور دیزلی
                                    </a></li>
                                    <li className="dropdown"><a href="#"><span>
                                        موتور بنزینی
                                    </span> <i className="ri-arrow-drop-down-fill dropdown-indicator"></i></a>
                                        <ul>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        موتور توربو
                                    </a></li>
                                    <li><a href="#">
                                        موتور دیزل
                                    </a></li>
                                    <li><a href="#">
                                        موتور برقی
                                    </a></li>
                                </ul>
                            </li>
                         
                            <li className="dropdown"><a href="#"><span>
                                ژنراتور
                            </span> <i className="ri-arrow-drop-down-fill dropdown-indicator"></i></a>
                                <ul>
                                    <li><a href="#">
                                        موتور دیزلی
                                    </a></li>
                                    <li className="dropdown"><a href="#"><span>
                                        موتور بنزینی
                                    </span> <i className="ri-arrow-drop-down-fill dropdown-indicator"></i></a>
                                        <ul>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        موتور توربو
                                    </a></li>
                                    <li><a href="#">
                                        موتور دیزل
                                    </a></li>
                                    <li><a href="#">
                                        موتور برقی
                                    </a></li>
                                </ul>
                            </li>
                         
                            <li className="dropdown"><a href="#"><span>
                                کابل برق
                            </span> <i className="ri-arrow-drop-down-fill dropdown-indicator"></i></a>
                                <ul>
                                    <li><a href="#">
                                        موتور دیزلی
                                    </a></li>
                                    <li className="dropdown"><a href="#"><span>
                                        موتور بنزینی
                                    </span> <i className="ri-arrow-drop-down-fill dropdown-indicator"></i></a>
                                        <ul>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        موتور توربو
                                    </a></li>
                                    <li><a href="#">
                                        موتور دیزل
                                    </a></li>
                                    <li><a href="#">
                                        موتور برقی
                                    </a></li>
                                </ul>
                            </li>
                          
                            <li className="dropdown"><a href="#"><span>
                                موتور برق
                            </span> <i className="ri-arrow-drop-down-fill dropdown-indicator"></i></a>
                                <ul>
                                    <li><a href="#">
                                        موتور دیزلی
                                    </a></li>
                                    <li className="dropdown"><a href="#"><span>
                                        موتور بنزینی
                                    </span> <i className="ri-arrow-drop-down-fill dropdown-indicator"></i></a>
                                        <ul>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        موتور توربو
                                    </a></li>
                                    <li><a href="#">
                                        موتور دیزل
                                    </a></li>
                                    <li><a href="#">
                                        موتور برقی
                                    </a></li>
                                </ul>
                            </li>
                       
                            <li className="dropdown"><a href="#"><span>
                                موتور برق
                            </span> <i className="ri-arrow-drop-down-fill dropdown-indicator"></i></a>
                                <ul>
                                    <li><a href="#">
                                        موتور دیزلی
                                    </a></li>
                                    <li className="dropdown"><a href="#"><span>
                                        موتور بنزینی
                                    </span> <i className="ri-arrow-drop-down-fill dropdown-indicator"></i></a>
                                        <ul>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                            <li><a href="#">
                                                نمونه
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        موتور توربو
                                    </a></li>
                                    <li><a href="#">
                                        موتور دیزل
                                    </a></li>
                                    <li><a href="#">
                                        موتور برقی
                                    </a></li>
                                </ul>
                            </li>
                        
                        </ul>
                    </nav>

                    <i className="mobile-nav-toggle mobile-nav-show ri-menu-4-line"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none ri-close-line"></i>

                </div>
            </header>
        </>
    )
}

export default Header
