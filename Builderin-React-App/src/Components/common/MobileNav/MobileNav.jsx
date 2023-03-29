import $ from 'jquery';
import React, { useEffect } from 'react';
import './MobileNav.css';

const Header02Nav = () => {
    useEffect(() => {
        // Sub-Menu Open On-Click
        $(".mr_menu_02 #mr_navmenu").append($(".main_menu"));
        $('.mr_menu_02 #mr_navmenu ul.main_menu li.menu-item-has-children').append($("<span class='submenu_opener d-lg-none'><i class='ion-arrow-right-b'></i></span>"));
        $('.mr_menu_02 .main_menu li.menu-item-has-children .submenu_opener').on("click", function (e) {
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
                    <a href="/"><img src="images/logo2.png" alt="logo" /></a>
                </div>

                <div id="mr_navmenu"></div>
            </div>
        </div>
    );
};

export default Header02Nav;