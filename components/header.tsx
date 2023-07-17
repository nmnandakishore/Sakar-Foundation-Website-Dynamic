import Link from "next/link";
import React, { useEffect } from "react";
import { MainMenu } from "./main-menu";
import { array, element } from "prop-types";

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
        var secondaryMenuElem = document.getElementById("secondary-menu");

        var sticky = headerElem.offsetTop + headerElem.offsetHeight;
        if(secondaryMenuElem){
            var secondarySticky = secondaryMenuElem.offsetTop + secondaryMenuElem.offsetHeight - headerElem.offsetHeight;
            var secondaryStickyTop = secondaryMenuElem.offsetTop - headerElem.offsetHeight;
        }
        // stickyTop = 90;
        // var stickyTop = headerElem.offsetTop;
        var stickyTop = topMenuElem.offsetTop + topMenuElem.offsetHeight;
        // var secondary;
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


            if(secondaryMenuElem){
                var firstTargetElem = document.getElementById(secondaryMenuElem.querySelectorAll('.menu-item a')[0].getAttribute("target-id"));

                if(
                    window.pageYOffset >= secondaryStickyTop &&
                    !secondaryMenuElem.classList.contains("sticky")
                ) {
                    secondaryMenuElem.style.top = (String) (sticky)
                    secondaryMenuElem.classList.add("sticky");
                    // secondaryMenuElem.classList.add("animate__fadeInDown");
                    firstTargetElem.setAttribute('style', 'margin-top: ' + secondaryMenuElem.offsetHeight + 'px');                   
                } else if(
                    window.pageYOffset < secondaryStickyTop &&
                    secondaryMenuElem.classList.contains("sticky")
                ) {
                    // secondaryMenuElem.classList.remove("animate_fadeInDown")
                    secondaryMenuElem.classList.remove("sticky");
                    firstTargetElem.setAttribute('style', 'margin-top: 0');
                }
            }
        }
        
        if(secondaryMenuElem){
            var secondaryMenuItemElems = secondaryMenuElem.querySelectorAll('.menu-item a');

            secondaryMenuItemElems.forEach(function(secondaryMenuItemElem, index){
                secondaryMenuItemElem.addEventListener("click", function(event){
                    event.preventDefault();
                    var tartgetId = (event.srcElement as HTMLElement).getAttribute("target-id");
                    console.log(tartgetId);
                    var targetElem = document.getElementById(tartgetId);
                    console.log({targetElem});
                    var targetElemTop = targetElem.offsetTop-(headerElem.offsetHeight + secondaryMenuElem.offsetHeight - 20);
                    console.log({index});
                    if(index === 0){
                        // targetElemTop = targetElemTop + secondaryMenuElem.offsetHeight + 50;
                    }
                    // getBoundingClientRect().top + window.scrollY
                    window.scrollTo({ top: targetElemTop, behavior: 'smooth'});
                    // targetElem.scrollIntoView();
                })
            })
        }
    })

    return (
        <div id="header" className="header animate__animated animate__faster bg-white">
            <div className="main-menu">
                <nav className="relative text-primary">
                    <div className="container p-0 mx-auto flex flex-col sm:flex-row sm:justify-between">
                        <div className="header-logo-wrapper relative block text-center sm:text-left">
                            <Link href="/">
                                <a>
                                    <img src="/img/sakar_logo.svg" className="header-logo h-[70px] w-auto sm:my-[22px] mx-auto"
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




