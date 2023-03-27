import $ from 'jquery';
import React, { useEffect } from 'react';
import './Header02Nav.css';

const Header02Nav = () => {
    useEffect(() => {
        // Sub-Menu Open On-Click
        $('.mr_menu_02 ul.main_menu li.menu-item-has-children .submenu_opener').on("click", function (e) {
            $(this).parent().toggleClass('nav_open');
            $(this).siblings('ul').slideToggle();
            e.stopPropagation();
            e.preventDefault();
        });

    }, []);

    return (
        <div className="dark-theme offcanvas offcanvas-start_02" tabIndex="-1" id='offcanvasHome' aria-labelledby="offcanvasNavbarLabel">
            <div class="mr_menu_02">
                <div class="mr_menu_02_overlay"></div>
                <button type="button" class="mr_menu_02_close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="ion-android-close"></i></button>

                <div className="logo">
                    <a href="/"><img src="images/logo.svg" alt="logo" /></a>
                    <a href="/" className="dark_mode_logo"><img src="images/logo_foot.svg" alt="logo" /></a>
                </div>

                <div class="mr_navmenu">
                    <ul class="main_menu">
                        <li class="menu-item menu-item-has-children">
                            <a href="/">Home</a>
                            <ul class="sub-menu">
                                <li class="menu-item active"><a href="/">Home One</a></li>
                                <li class="menu-item"><a href="/home-2">Home Two</a></li>
                            </ul>
                            <span class="submenu_opener"><i class="ion-arrow-right-b"></i></span>
                        </li>
                        <li class="menu-item menu-item-has-children">
                            <a href="/">Service</a>
                            <ul class="sub-menu">
                                <li class="menu-item"><a href="/project-1">Projects One</a></li>
                                <li class="menu-item"><a href="/project-2">Projects Two</a></li>
                                <li class="menu-item"><a href="/project-details">Peoject Details</a></li>
                            </ul>
                            <span class="submenu_opener"><i class="ion-arrow-right-b"></i></span>
                        </li>
                        <li class="menu-item menu-item-has-children">
                            <a href="/">Services</a>
                            <ul class="sub-menu">
                                <li class="menu-item"><a href="/services-1">Service One</a></li>
                                <li class="menu-item"><a href="/services-2">Service Two</a></li>
                                <li class="menu-item"><a href="/service-details">Service Details</a></li>
                            </ul>
                            <span class="submenu_opener"><i class="ion-arrow-right-b"></i></span>
                        </li>
                        <li class="menu-item menu-item-has-children">
                            <a href="/">Pages</a>
                            <ul class="sub-menu">
                                <li class="menu-item"><a href="/about">About</a></li>
                                <li class="menu-item"><a href="/team">Team</a></li>
                                <li class="menu-item"><a href="/faq">FAQ</a></li>

                                <li class="menu-item menu-item-has-children">
                                    <a href="/">Shop</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item"><a href="/shop-1">Shop One</a></li>
                                        <li class="menu-item"><a href="/shop-2">Shop Two</a></li>
                                        <li class="menu-item"><a href="/shop-3">Shop Three</a></li>
                                        <li class="menu-item"><a href="/product">Product Details</a></li>
                                        <li class="menu-item"><a href="/shop-cart">Shop Cart</a></li>
                                        <li class="menu-item"><a href="/shop-checkout">Checkout</a></li>
                                    </ul>
                                    <span class="submenu_opener"><i class="ion-arrow-right-b"></i></span>
                                </li>
                            </ul>
                            <span class="submenu_opener"><i class="ion-arrow-right-b"></i></span>
                        </li>

                        <li class="menu-item menu-item-has-children">
                            <a href="/">Blog</a>
                            <ul class="sub-menu">
                                <li class="menu-item"><a href="/blog-1">Blog One</a></li>
                                <li class="menu-item"><a href="/blog-2">Blog Two</a></li>
                                <li class="menu-item"><a href="/blog-details">Blog Details</a></li>
                            </ul>
                            <span class="submenu_opener"><i class="ion-arrow-right-b"></i></span>
                        </li>

                        <li class="menu-item"><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header02Nav;