

export const Footer: React.FC = () => (

    <>
        <footer className="">
            <div className="footer-top bg-gray-200 sm:pt-8  text-primary text-center sm:text-left">
                <div className="container">
                    <div className="grid grid-cols-3 py-0 sm:py-8">
                        <div
                            className="col-span-3 py-5 sm:py-0 sm:col-auto border-b border-dashed border-primary sm:border-none">
                            <a className="block py-2 hover:underline" href="/about">About us</a>
                            <a className="block py-2 hover:underline" href="">How How Sākār helps</a>
                            <a className="block py-2 hover:underline" href="">Sākār News</a>
                            <a className="block py-2 hover:underline" href="/contact">Contact Us</a>
                        </div>
                        <div
                            className="col-span-3 py-5 sm:py-0 sm:col-auto border-b border-dashed border-primary sm:border-none">
                            <a className="block py-2 hover:underline" href="/partners">Our Partners</a>
                            <a className="block py-2 hover:underline" href="/leadership">Leadership</a>
                            <a className="block py-2 hover:underline" href="/privacy">Privacy policy</a>
                            <a className="block py-2 hover:underline" href="/tos">Terms and condition</a>
                        </div>
                        <div className="col-span-3 sm:col-auto py-5 sm:py-0">
                            <div className="table text-center">
                                <img src="/img/sakar_logo.svg"
                                    className="w-8/12 h-auto mb-3 mx-auto table-cell align-middle" alt="" />
                                <address className="text-gray-800 text-sm not-italic">
                                    2775 TAPO ST SUITE 204, SIMI VALLEY, CA, 93065
                                </address>
                                <a className="text-gray-800 text-sm not-italic" href="tel:+1 (805) 583-6700">+1 (805)
                                    583-6700</a>
                                <nav className="social text-center text-gray-800">
                                    <a href="#"><i className="px-4 inline-block w-4 relative fab fa-facebook"></i></a>
                                    <a href="#"><i className="px-4 inline-block w-4 relative fab fa-twitter"></i></a>
                                    <a href="#"><i className="px-4 inline-block w-4 relative fab fa-instagram"></i></a>
                                    <a href="#"><i className="px-4 inline-block w-4 relative fab fa-youtube"></i></a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom bg-white">
                <div className="container">
                    <div className="py-4 text-center text-gray-700">©Sākār Foundation 2021. All rights reserved.</div>
                </div>
            </div>
        </footer>

    </>

);




