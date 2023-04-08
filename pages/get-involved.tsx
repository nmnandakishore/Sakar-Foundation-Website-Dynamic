import * as React from 'react'
import Link from "next/link";



const aboutPage: React.FC = () => {
    return (
        <>
                        
<div className="page-header py-14 bg-slate-600 mb-10 text-slate-400 bg-fixed bg-center bg-cover bg-blend-color-burn shadow-gray-500 drop-shadow-lg ">
                <div className="container">
                    <p className="text-4xl pb-5 text-slate-100">Get Involved</p>
                    Work with us for a change The change you always wanted.
                </div>
            </div>



            <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
                        
                        <ul className="px-4 w-full md:w-1/2 border-gray-400 border-dashed border-b border-r-0 md:border-r md:border-b-0 pb-6 pt-6 lg:pt-3 animate__animated animate__faster animate__fadeIn"
                            style={{ animationDelay: "0ms" }}>
                            <div className="flex items-center">
                                <img className="h-8 mb-3 mr-3 fill-primary"
                                    src="/img/get_involved/volunteer-primary.svg" alt="" />
                                <h3 className="text-xl mb-2 text-primary">
                                    Be a volunteer
                                </h3>
                            </div>
                            <p className="text-sm lg:text-base">Sign u p as a volunteer and
                            Be the reason to aid the change! Be the change! Join us in our volunteering programs to be the first line of help and care to many in need. </p>
                            <div className="flex items-center py-3">
                                <Link href="/volunteer-registration">
                                    <a className="text-primary bold border-blue-300 hover:text-blue-300 arrow-btn" >Find
                                        out more</a>
                                </Link>
                            </div>
                        </ul>
                        {/* Start a funraiser menu */}
                        
                        
                        <ul className="px-4 w-full md:w-1/2 border-gray-400 border-dashed border-b sm:border-0 md:border-b-0 sm:b-0 pb-6 pt-6 lg:pt-3 animate__animated animate__faster animate__fadeIn"
                            style={{ animationDelay: "200ms" }}>
                            <div className="flex items-center">
                                <img className="h-8 mb-3 mr-3 fill-current text-primary"
                                    src="/img/get_involved/partner-primary.svg" alt="" />
                                <h3 className="text-xl text-primary mb-2">Partner with us
                                </h3>
                            </div>
                            <p className="text-sm lg:text-base">A strong system is what we need to give out the wings of reality to any dream! Collaborate with us!</p>
                            <div className="flex items-center py-3 grid col-1">                                                                
                                <Link href="/partners">
                                    <a className="text-primary bold border-blue-300 hover:text-blue-300 arrow-btn w-full mb-3" >
                                        Our Partners</a>
                                </Link>
                                <Link href="/partner-registration">
                                    <a className="text-primary bold border-blue-300 hover:text-blue-300 arrow-btn w-full" >
                                    Register</a>
                                </Link>
                            </div>
                        </ul>
                       
                    </div>
        </>

        //     {/* <div className='bg-yellow-600 p-5 w-full'></div> */ }
        // {/* <pageBody></pageBody> */ }

    )
}

aboutPage.displayName = "Get Involved"

export default aboutPage;