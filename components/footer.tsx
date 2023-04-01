import Link from "next/link";


export const Footer: React.FC<{
    address: any,
    phone: any,
    youtubeLink: string,
    twitterLink: string,
    instagramLink: string,
    facebookLink: string
}> = ({
    address = "",
    phone = "",
    youtubeLink = "",
    twitterLink = "",
    instagramLink = "",
    facebookLink = ""
}) => (

            <>
                <footer className="">
                    <div className="footer-top bg-primary sm:pt-4 text-slate-400 text-center sm:text-left">
                        <div className="container">
                            <div className="grid grid-cols-3 py-0 sm:py-8">
                                <div
                                    className="col-span-3 py-5 sm:py-0 sm:col-auto border-b border-dashed border-primary sm:border-none">
                                    <Link href="/about"><a className="block py-2 hover:underline" >About us</a></Link>
                                    <Link href="/programs"><a className="block py-2 hover:underline">Programs</a></Link>
                                    <Link href="/news"><a className="block py-2 hover:underline">Sākār News</a></Link>
                                    <Link href="/contact"><a className="block py-2 hover:underline" >Contact Us</a></Link>
                                </div>
                                <div
                                    className="col-span-3 py-5 sm:py-0 sm:col-auto border-b border-dashed border-primary sm:border-none">
                                    <Link href="/partners"><a className="block py-2 hover:underline" href="">Our Partners</a></Link>
                                    <Link href="/leadership"><a className="block py-2 hover:underline" href="">Leadership</a></Link>
                                    <Link href="/privacy"><a className="block py-2 hover:underline" href="">Privacy policy</a></Link>
                                    <Link href="/tos"><a className="block py-2 hover:underline" href="">Terms and condition</a></Link>
                                </div>
                                <div className="col-span-3 sm:col-auto py-5 sm:py-0">
                                    <div className="table text-center">
                                        <img src="/img/sakar_logo_light.svg"
                                            className="w-8/12 h-auto mb-3 mx-auto table-cell align-middle" alt="" />
                                        <address className="text-gray-800 text-sm not-italic">
                                            {address} <br />
                                            {phone}
                                        </address>
                                        {/* <a className="text-gray-800 text-sm not-italic" href=`tel:${ }`>+1 (805)
                                583-6700</a> */}
                                        <nav className="social text-center text-slate-500">
                                            <Link href={`${facebookLink ?? '#'}`}><a><i className="px-3 inline-block relative fab fa-facebook hover:text-slate-300"></i></a></Link>
                                            <Link href={`${twitterLink ?? '#'}`}><a><i className="px-3 inline-block relative fab fa-twitter hover:text-slate-300"></i></a></Link>
                                            <Link href={`${instagramLink ?? '#'}`}><a><i className="px-3 inline-block relative fab fa-instagram hover:text-slate-300"></i></a></Link>
                                            <Link href={`${youtubeLink ?? '#'}`}><a><i className="px-3 inline-block relative fab fa-youtube hover:text-slate-300"></i></a></Link>
                                        </nav>
                                        <div className="block text-center mt-2">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                    <div className="footer-bottom bg-primaryDark">
                        <div className="container">
                            <div className="py-4 text-center text-slate-600'">©Sākār Foundation 2021. All rights reserved.</div>
                        </div>
                    </div>
                </footer >

            </>

        );




        // <span className="font-bold">Tax ID: </span>12-3456789