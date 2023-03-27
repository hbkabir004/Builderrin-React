import React, { useEffect } from 'react';

const ThemeSwitcher = () => {
    useEffect(() => {
        // Day-Night Mode Switcher
        var icon = document.getElementById("mode_switcher");

        if (localStorage.getItem("theme") === "null") {
            localStorage.setItem("theme", "dark");
        }

        // let localData = localStorage.getItem("theme");

        // if (localData === "dark") {
        //     icon.innerHTML = '<span><i class="ion-ios-moon-outline"></i></span>';
        //     document.body.classList.remove("dark-theme");
        // } else if (localData === "light") {
        //     icon.innerHTML = '<span><i class="ion-ios-sunny"></i></span>';
        //     document.body.classList.add("light-theme");
        // }

        icon.onclick = function () {
            document.body.classList.toggle("dark-theme");
            if (document.body.classList.contains("dark-theme")) {
                icon.innerHTML = '<span><i class="ion-ios-sunny"></span>';
                localStorage.setItem("theme", "dark");
            } else {
                icon.innerHTML = '<span><i class="ion-ios-moon"></i></i></span>';
                localStorage.setItem("theme", "light");
            }
        }
    }, []);
    return (
        <div id="mode_switcher">
            <span><i className="ion-ios-moon"></i></span>
        </div>
    );
};

export default ThemeSwitcher;