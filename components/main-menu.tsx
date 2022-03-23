import Link from "next/link";


export const MainMenu: React.FC = () => {



    return (

        <ul className="menu-items flex overflow-x-auto border-none">
            {/* <!--Regular Link--> */}
            <li className="hover:bg-primary hover:text-white border-none">
                <div className="wrapper">
                    <Link href="/about"><a className="relative block px-2 lg:px-4 text-sm lg:text-base">About
                        <br />
                        Us</a></Link>
                </div>
            </li>
            <li className="hover:bg-primary hover:text-white">
                <div className="wrapper">
                    <Link href="/projects"><a className="relative block px-2 lg:px-4 text-sm lg:text-base">Sākār <br />
                        Projects</a></Link>
                </div>
            </li>
            <li className="hoverable hover:bg-primary hover:text-white">
                <div className="wrapper">
                    <label
                        className="relative block px-2 lg:px-4 text-sm lg:text-base hover:bg-primary hover:text-white">Our
                        <br />
                        Programs</label>
                </div>
                <div role="toggle" className="p-6 pb-0 mega-menu mb-20 sm:mb-0 shadow-xl bg-primary">
                    <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
                        <div className="w-full sm:w-1/2 lg:w-1/4 pt-8 animate__animated animate__faster animate__fadeInLeft"
                            style={{ animationDelay: ":250ms" }}>
                            <div>
                                <h2 className="font-light text-3xl">We care about</h2>
                            </div>
                            <div>
                                <h1 className="text-humans font-bold text-5xl">Humans</h1>
                            </div>
                            <div>
                                <h1 className="text-animals font-bold text-5xl inline-block">Animals</h1>
                                <span className="text-white font-light text-3xl">&</span>
                            </div>
                            <div>
                                <h1 className="text-plants font-bold text-5xl">Plants</h1>
                            </div>
                            <div>
                                <h2 className="font-light text-3xl">Alike</h2>
                            </div>
                            <br />
                        </div>
                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3 bg-humans animate__animated animate__faster animate__fadeIn"
                            style={{ animationDelay: "0ms" }}>
                            <h3 className="font-bold text-xl text-white text-bold mb-2">
                                For Humans
                            </h3>
                            <li>
                                <Link href='/sakar-spark'><a
                                    className="block p-3 hover:bg-blue-600 text-gray-100 hover:underline">
                                    Sakar Spark
                                </a></Link>
                            </li>
                            <li>
                                <Link href='#'><a
                                    className="block p-3 hover:bg-blue-600 text-gray-100 hover:underline">
                                    Food for slums
                                </a></Link>
                            </li>
                            <li>
                                <Link href=''><a
                                    className="block p-3 hover:bg-blue-600 text-gray-100 hover:underline">
                                    Ambulance
                                </a></Link>
                            </li>
                            <li>
                                <Link href='/sakar-spark'><a
                                    className="block p-3 hover:bg-blue-600 text-gray-100 hover:underline">
                                    Hearing aid distribution
                                </a></Link>
                            </li>


                        </ul>
                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3 bg-animals animate__animated animate__faster animate__fadeIn"
                            style={{ animationDelay: "150ms" }}>
                            <h3 className="font-bold text-xl text-white text-bold mb-2">For Animals</h3>
                            <li>
                                <Link href='#'>
                                    <a className="block p-3 hover:bg-blue-600 text-gray-100 hover:underline">
                                        Volunteering at animal shelters
                                    </a>
                                </Link>
                                <Link href='#'>
                                    <a className="block p-3 hover:bg-blue-600 text-gray-100 hover:underline">
                                        Adoption camps for rescued animals
                                    </a>
                                </Link>
                                <Link href='#'>
                                    <a
                                        className="block p-3 hover:bg-blue-600 text-gray-100 hover:underline">
                                        Feeding stray dogs
                                    </a>
                                </Link>
                            </li>

                        </ul>
                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4  pb-6 pt-6 lg:pt-3 bg-plants animate__animated animate__faster animate__fadeIn"
                            style={{ animationDelay: "300ms" }}>
                            <h3 className="font-bold text-xl text-white text-bold">For Plants</h3>
                            <li><a href="#"
                                className="block p-3 hover:bg-blue-600 text-gray-100 hover:underline">Recycling awareness program</a></li>

                        </ul>
                    </div>
                </div>
            </li>
            <li className="hoverable hover:bg-primary hover:text-white">
                <div className="wrapper">
                    <a href="#"
                        className="relative block px-2 lg:px-4 text-sm lg:text-base hover:bg-primary hover:text-white">Get
                        <br />Involved</a>
                </div>
                <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-primary">
                    <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
                        <div className="w-full text-white mb-8  animate__animated animate__faster animate__fadeInDown"
                            style={{ animationDelay: "150ms" }}>
                            <h2 className="font-bold text-2xl">Work with us for a change</h2>
                            <p>The change you always wanted.</p>
                        </div>
                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-400 border-dashed border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3 animate__animated animate__faster animate__fadeIn"
                            style={{ animationDelay: "0ms" }}>
                            <div className="flex items-center">
                                <img className="h-8 mb-3 mr-3 fill-current text-white"
                                    src="/img/get_involved/volunteer.svg" alt="" />
                                <h3 className="font-bold text-xl text-white text-bold mb-2">
                                    Be a volunteer
                                </h3>
                            </div>
                            <p className="text-gray-100 text-sm text-justify">Sign u p as a volunteer and
                                help us run fundraiser
                                campaigns, conduct workshops etc.
                                This is an opportunity for you to work for the community. </p>
                            <div className="flex items-center py-3">
                                <Link href="/volunteer-registration">
                                    <a className="text-white bold border-blue-300 hover:text-blue-300 arrow-btn">Find
                                        out more</a>
                                </Link>
                            </div>
                        </ul>
                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-400 border-dashed border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3 animate__animated animate__faster animate__fadeIn"
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
                                    <a className="text-white bold border-blue-300 hover:text-blue-300 arrow-btn">Find
                                        out
                                        more</a>
                                </Link>
                            </div>
                        </ul>
                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-400 border-dashed border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3 animate__animated animate__faster animate__fadeIn"
                            style={{ animationDelay: "200ms" }}>
                            <div className="flex items-center">
                                <img className="h-8 mb-3 mr-3 fill-current text-white"
                                    src="/img/get_involved/partner.svg" alt="" />
                                <h3 className="font-bold text-xl text-white text-bold mb-2">Partner with us
                                </h3>
                            </div>
                            <p className="text-gray-100 text-sm text-justify">If you are a business, govt or an organization, you can
                                partner with us to collaborate and work on causes you care about.</p>
                            <div className="flex items-center py-3">
                                <Link href="/partner-registration">
                                    <a className="text-white bold border-blue-300 hover:text-blue-300 arrow-btn">Find
                                        out
                                        more</a>
                                </Link>
                            </div>
                        </ul>
                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-400 border-dashed pb-6 pt-6 lg:pt-3 animate__animated animate__faster animate__fadeIn"
                            style={{ animationDelay: "300ms" }}>
                            <div className="flex items-center">
                                <img className="h-8 mb-3 mr-3 fill-current text-white"
                                    src="/img/get_involved/donate.svg" alt="" />
                                <h3 className="font-bold text-xl text-white text-bold mb-2">Donate</h3>
                            </div>
                            <p className="text-gray-100 text-sm text-justify">You can donate us directly or
                                to individual
                                projects.
                                Either way, your donations help us reach those who&#39;re in need across the
                                globe.</p>
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
                        <a className="relative block px-2 lg:px-4 text-sm lg:text-base ">Sākār <br />
                            News</a>
                    </Link>
                </div>
            </li>
            <li className="hover:bg-primary hover:text-white">
                <div className="wrapper">
                    <Link href="/contact">
                        <a className="relative block px-2 lg:px-4 text-sm lg:text-base ">Contact <br />
                            Us</a>
                    </Link>
                </div>
            </li>
            <li className="hover:bg-humans text-humans hover:text-white">
                <div className="wrapper hover:text-white">
                    <a href="#"
                        className="relative block px-2 lg:px-4 text-sm lg:text-base hover:text-white font-bold">Donate
                        <br />
                        Us</a>
                </div>
            </li>
        </ul >

    );
}