import React from "react";
import { MainMenu } from "./main-menu";

export const Header: React.FC = () => {
    return (
        <div id="header" className="header animate__animated animate__faster bg-gray-200">
            <div className="main-menu">
                <nav className="relative text-primary">
                    <div className="container p-0 mx-auto flex flex-col sm:flex-row sm:justify-between">
                        <div className="header-logo-wrapper relative block p-2  text-center sm:text-left">
                            <a href="/">
                                <img src="/img/sakar_logo.svg" className="header-logo h-16 w-auto sm:my-[10px] mx-auto"
                                    alt="Sakar Foundation" />
                            </a>
                        </div>
                        <MainMenu></MainMenu>
                    </div>
                </nav>
            </div>
        </div>
    );
}