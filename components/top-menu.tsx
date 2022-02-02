interface ITopMenu {
    message: Array<String>
}

export const TopMenu: React.FC<ITopMenu> = ({ message }) => (

    <>
        <div id="top-menu" className="top-menu w-full bg-primary min-h-12">
            <div className="container grid grid-cols-2 text-center">
                <div className="news-ticker py-3 col-span-2 sm:col-span-1 text-white sm:text-left hidden sm:inline-block">
                    <span className="font-bold">Latest</span>
                    <span> | </span>
                    <span id="news-ticker" className="font-light"></span>
                </div>
                <div className="py-3 col-span-2 sm:col-span-1 text-white sm:text-right">
                    <nav className="social">
                        <a href="#"><i className="px-2 inline-block w-auto relative fab fa-facebook"></i></a>
                        <a href="#"><i className="px-2 inline-block w-auto relative fab fa-twitter"></i></a>
                        <a href="#"><i className="px-2 inline-block w-auto relative fab fa-instagram"></i></a>
                        <a href="#"><i className="px-2 last:pr-0 inline-block w-auto relative fab fa-youtube"></i></a>
                    </nav>
                </div>
            </div>
        </div>




        <script>

        </script>

    </>

);




