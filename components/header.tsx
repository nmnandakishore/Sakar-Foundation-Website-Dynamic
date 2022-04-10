import Link from "next/link";
import React, { useEffect } from "react";
import { MainMenu } from "./main-menu";

export const Header: React.FC<{ programs: Array<any> }> = ({ programs = [] }) => {

    // useEffect(() => {

    // }, [])

    useEffect(() => {

        // var tickerElem = document.querySelector("#news-ticker");

        // var options = {
        //     backDelay: 3500,
        //     loop: true,
        //     strings: [
        //         "<a href=''>High school students raised fund for homeless</a>",
        //         "<a href=''>Indian children provided with hearing aids</a>",
        //     ],
        //     typeSpeed: 40,
        // };

        // var typed = new Typed("#news-ticker", options);

        window.onscroll = function () {
            // console.log("stickyTop:", stickyTop)
            // console.log("pageYOffset:", window.pageYOffset)
            toggleSticky();
        };

        var headerElem = document.getElementById("header");
        var topMenuElem = document.getElementById("top-menu");
        var sticky = headerElem.offsetTop + headerElem.offsetHeight;
        // stickyTop = 90;
        // var stickyTop = headerElem.offsetTop;
        var stickyTop = topMenuElem.offsetTop + topMenuElem.offsetHeight;;
        var pageContentElem;



        function toggleSticky() {
            if (
                window.pageYOffset >= sticky &&
                !headerElem.classList.contains("sticky")
            ) {
                headerElem.classList.add("sticky");
                headerElem.classList.add("animate__fadeInDown");
            } else if (
                window.pageYOffset < stickyTop &&
                headerElem.classList.contains("sticky")
            ) {
                headerElem.classList.remove("animate__fadeInDown");
                headerElem.classList.remove("sticky");
            }
        }

    })

    return (
        <div id="header" className="header animate__animated animate__faster bg-gray-200">
            <div className="main-menu">
                <nav className="relative text-primary">
                    <div className="container p-0 mx-auto flex flex-col sm:flex-row sm:justify-between">
                        <div className="header-logo-wrapper relative block text-center sm:text-left">
                            <Link href="/">
                                <a>
                                    <img src="/img/sakar_logo.svg" className="header-logo h-14 w-auto sm:my-[13px] mx-auto"
                                        alt="Sakar Foundation" />
                                </a>
                            </Link>
                        </div>
                        <MainMenu programs={programs}></MainMenu>
                    </div>
                </nav>
            </div>
        </div>
    );
}




