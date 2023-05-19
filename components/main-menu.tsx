import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";



export const MainMenu: React.FC<{ programs: Array<any> }> = ({ programs = [] }) => {

    const router = useRouter();
    const [involveMenuHover, setInvolveMenuHover] = useState(false);
    const [programsMenuHover, setProgramsMenuHover] = useState(false);

    useEffect(() => {
        setInvolveMenuHover(false);
    }, [router.asPath]);

    useEffect(() => {
        setProgramsMenuHover(false);
    }, [router.asPath]);

    /*interface ImenuToggleList {
        programs: boolean,
        involvement: boolean,
    }*/

    /*const dropDownValue: ImenuToggleList = {
        programs: false,
        involvement: false,
    }*/

    // const [dropDownState, setDropDownState] = React.useState(dropDownValue);

    /*const toggleDropDown = (menuName) => {

        let newDropDownValue: ImenuToggleList = dropDownValue;

        // Object.keys(dropDownState)

        for (const key in dropDownState) {
            if (dropDownState.hasOwnProperty(key)) {
                if (key === menuName) {
                    newDropDownValue[key] = !dropDownState[key];
                } else {
                    newDropDownValue[key] = false;
                }
            }
        }

        setDropDownState(newDropDownValue);
        console.log({ newDropDownValue })
        console.log({ menuName });
    }*/

    // useEffect(() => console.log({ dropDownState }), [dropDownState])



    return (

        <ul className="menu-items flex overflow-x-auto border-none text-lg">
            {/* <!--Regular Link--> */}
            <li className="hover:bg-primary hover:text-white border-none">
                <div className="wrapper">
                    <Link href="/about"><a className="relative block py-12 px-2 lg:px-3 text-sm lg:text-base">About</a></Link>
                </div>
            </li>
            <li className="hover:bg-primary hover:text-white">
                <div className="wrapper">
                    <Link href="/leadership"><a className="relative block py-12 px-2 lg:px-3 text-sm lg:text-base">Leadership</a></Link>
                </div>
            </li>

            <li className="hover:bg-primary hover:text-white">
                <div className="wrapper">
                    <Link href="/programs"><a className="relative block py-12 px-2 lg:px-3 text-sm lg:text-base">Programs</a></Link>
                </div>
            </li>    
            <li className="hover:bg-primary hover:text-white">
                <div className="wrapper">
                    <Link href="/fundraisers"><a className="relative block py-12 px-2 lg:px-3 text-sm lg:text-base">Fundraisers</a></Link>
                </div>
            </li>

            {/* Programs Mega Menu */}
            {/* <li className="hoverable hover:bg-primary hover:text-white" onMouseEnter={() => setProgramsMenuHover(true)} onMouseLeave={() => setProgramsMenuHover(false)}> */}
            {/* <div className="wrapper">
                    <label
                        onClick={() => setProgramsMenuHover(true)}
                        className="relative block py-12 px-2 lg:px-3 text-sm lg:text-base hover:bg-primary hover:text-white">Programs</label>
                </div> */}


            {/* <div role="toggle" className="px-6 mega-menu mb-20 sm:mb-0 shadow-xl bg-primary" style={programsMenuHover ? { display: 'block' } : {}}>
                    <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">*/}
            {/* <div className="w-full sm:w-1/2 lg:w-1/4 pt-8 animate__animated animate__faster animate__fadeInLeft"
                            style={{ animationDelay: ":250ms" }}>
                            <div>
                            </div>
                            <div>
                                <h1 className="text-humans font-bold text-6xl">Humans</h1>
                            </div>
                            <div>
                                <h1 className="text-animals font-bold text-6xl inline-block">Animals</h1>
                            </div>
                            <div>
                                <h1 className="text-plants font-bold text-6xl">Plants</h1>
                            </div>
                            <div>
                            </div>
                            <br />
                        </div> */}
            {/* <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3 bg-humans animate__animated animate__faster animate__fadeIn"
                            style={{ animationDelay: "0ms" }}>
                            <div className="flex items-center">
                                <img className="h-8 mb-3 mr-3 fill-current text-white"
                                    src="/img/programs/humans.svg" alt="" />
                                <h3 className="font-bold text-xl text-white text-bold mb-2">
                                    Humans
                                </h3>
                            </div>
                            {programs
                                .filter(program => program?.fields?.category === 'Humans')
                                .map(program => (
                                    <li key={program?.fields?.slug}>
                                        <Link href={`/program/${program?.fields?.slug}`}><a
                                            className="block p-3 hover:bg-blue-600 text-gray-100 hover:underline">
                                            {program?.fields?.programName}
                                        </a></Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3 bg-animals animate__animated animate__faster animate__fadeIn"
                            style={{ animationDelay: "150ms" }}>
                            <div className="flex items-center">
                                <img className="h-8 mb-3 mr-3 fill-current text-white"
                                    src="/img/programs/animals.svg" alt="" />
                                <h3 className="font-bold text-xl text-white text-bold mb-2">
                                    Animals
                                </h3>
                            </div>
                            {programs
                                .filter(program => program?.fields?.category === 'Animals')
                                .map(program => (
                                    <li key={program?.fields?.slug}>
                                        <Link href={`/program/${program?.fields?.slug}`}><a
                                            className="block p-3 hover:bg-blue-600 text-gray-100 hover:underline">
                                            {program?.fields?.programName}
                                        </a></Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4  pb-6 pt-6 lg:pt-3 bg-plants animate__animated animate__faster animate__fadeIn"
                            style={{ animationDelay: "300ms" }}>
                            <div className="flex items-center">
                                <img className="h-8 mb-3 mr-3 fill-current text-white"
                                    src="/img/programs/plants.svg" alt="" />
                                <h3 className="font-bold text-xl text-white text-bold mb-2">
                                    Plants
                                </h3>
                            </div>
                            {programs
                                .filter(program => program?.fields?.category === 'Plants')
                                .map(program => (
                                    <li key={program?.fields?.slug}>
                                        <Link href={`/program/${program?.fields?.slug}`}><a
                                            className="block p-3 hover:bg-blue-600 text-gray-100 hover:underline">
                                            {program?.fields?.programName}
                                        </a></Link>
                                    </li>
                                ))
                            }
                        </ul> */}
            {/*</div>
                </div> */}
            {/* </li> */}
            {/* <li className="hoverable hover:bg-primary hover:text-white" onMouseEnter={() => setInvolveMenuHover(true)} onMouseLeave={() => setInvolveMenuHover(false)}> */}
            <li className="hover:bg-primary hover:text-white">
                <div className="wrapper">
                    <Link href="/get-involved">
                    <a href="#"
                        // onClick={() => setInvolveMenuHover(true)}
                        className="relative block py-12 px-2 lg:px-3 text-sm lg:text-base hover:bg-primary hover:text-white">Get Involved</a>
                        </Link>
                </div>
                <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-primary" style={involveMenuHover ? { display: 'block' } : {}}>
                    <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
                        <div className="w-full text-gray-300 mb-4  animate__animated animate__faster animate__fadeInDown"
                            style={{ animationDelay: "150ms" }}>
                            <h2 className="font-bold text-xl">Work with us for a change</h2>
                            <p className="text-sm">The change you always wanted.</p>
                        </div>
                        <ul className="px-4 w-full lg:w-1/3 border-gray-400 border-dashed border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3 animate__animated animate__faster animate__fadeIn"
                            style={{ animationDelay: "0ms" }}>
                            <div className="flex items-center">
                                <img className="h-8 mb-3 mr-3 fill-current text-white"
                                    src="/img/get_involved/volunteer.svg" alt="" />
                                <h3 className="text-xl text-white mb-2">
                                    Be a volunteer
                                </h3>
                            </div>
                            <p className="text-gray-400 text-sm lg:text-base">Sign u p as a volunteer and
                            Be the reason to aid the change! Be the change! Join us in our volunteering programs to be the first line of help and care to many in need. </p>
                            <div className="flex items-center py-3">
                                <Link href="/volunteer-registration">
                                    <a className="text-white bold border-blue-300 hover:text-blue-300 arrow-btn" >Find
                                        out more</a>
                                </Link>
                            </div>
                        </ul>
                        {/* Start a funraiser menu */}
                        {/* <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-400 border-dashed border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3 animate__animated animate__faster animate__fadeIn"
                            style={{ animationDelay: "100ms" }}>
                            <div className="flex items-center">
                                <img className="h-8 mb-3 mr-3 fill-current text-white"
                                    src="/img/get_involved/fundraiser.svg" alt="" />
                                <h3 className="font-bold text-xl text-white text-bold mb-2">Start a
                                    fundraiser</h3>
                            </div>
                            <p className="text-gray-100 text-sm text-justify">If you&#39;re a student, you can
                                start fundraising in
                                our platform
                                for your cause.
                                We&#39;ll help you to raise money through our Sākār Spark program.
                            </p>
                            <div className="flex items-center py-3">
                                <Link href="/new-fundraiser">
                                    <a className="text-white bold border-blue-300 hover:text-blue-300 arrow-btn" >Find
                                        out
                                        more</a>
                                </Link>
                            </div>
                        </ul> */}
                        <ul className="px-4 w-full lg:w-1/3 border-gray-400 border-dashed border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3 animate__animated animate__faster animate__fadeIn"
                            style={{ animationDelay: "200ms" }}>
                            <div className="flex items-center">
                                <img className="h-8 mb-3 mr-3 fill-current text-white"
                                    src="/img/get_involved/partner.svg" alt="" />
                                <h3 className="text-xl text-white mb-2">Partner with us
                                </h3>
                            </div>
                            <p className="text-gray-400 text-sm lg:text-base">A strong system is what we need to give out the wings of reality to any dream! Collaborate with us!</p>
                            <div className="flex items-center py-3 grid col-1">                                                                
                                <Link href="/partners">
                                    <a className="text-white bold border-blue-300 hover:text-blue-300 arrow-btn w-full mb-3" >
                                        Our Partners</a>
                                </Link>
                                <Link href="/partner-registration">
                                    <a className="text-white bold border-blue-300 hover:text-blue-300 arrow-btn w-full" >
                                    Register</a>
                                </Link>
                            </div>
                        </ul>
                        <ul className="px-4 w-full lg:w-1/3 border-gray-400 border-dashed pb-6 pt-6 lg:pt-3 animate__animated animate__faster animate__fadeIn"
                            style={{ animationDelay: "300ms" }}>
                            <div className="flex items-center">
                                <img className="h-8 mb-3 mr-3 fill-current text-white"
                                    src="/img/get_involved/donate.svg" alt="" />
                                <h3 className="text-xl text-white mb-2">Donate</h3>
                            </div>
                            <p className="text-gray-400 text-sm lg:text-base">Support in any form can make a huge difference! Be that support to us, as we plan out ideas to bring a difference!</p>
                            <div className="py-3">
                                <Link href="#">
                                    <a
                                        className="text-white bold border-blue-300 hover:text-blue-300 arrow-btn">Find
                                        out
                                        more</a>
                                </Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </li >
            <li className="hover:bg-primary hover:text-white">
                <div className="wrapper">
                    <Link href="/news">
                        <a className="relative block py-12 px-2 lg:px-3 text-sm lg:text-base ">News</a>
                    </Link>
                </div>
            </li>
            <li className="hover:bg-primary hover:text-white">
                <div className="wrapper">
                    <Link href="/contact">
                        <a className="relative block py-12 px-2 lg:px-3 text-sm lg:text-base ">Contact</a>
                    </Link>
                </div>
            </li>            
            <li className="group hover:bg-primary hover:text-white">
                <div className="wrapper">
                    <Link href="/beyond-schools"><a className="relative block pt-[57px] pb-[58px] px-2 lg:px-3 text-sm lg:text-base min-w-[180px] h-full bg-contain bg-center bg-no-repeat mx-5 bg-[url('/img/beyond-schools-logo-color.png')] group-hover:bg-[url('/img/beyond-schools-logo.png')]" ></a></Link>
                </div>
            </li>        
            {/* <li className="hover:bg-humans text-humans hover:text-white">
                <div className="wrapper hover:text-white">
                    <Link href="/donate">
                        <a
                            className="relative block py-12 px-2 lg:px-3 text-sm lg:text-base hover:text-white font-bold">Donate
                        </a>
                    </Link>
                </div>
            </li> */}
        </ul>

    );
}