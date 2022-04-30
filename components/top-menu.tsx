interface ITopMenu {
    message: Array<String>,
    youtubeLink: string,
    twitterLink: string,
    instagramLink: string,
    facebookLink: string
}

export const TopMenu: React.FC<ITopMenu> = ({ message = [], youtubeLink = "", twitterLink = "", instagramLink = "", facebookLink = "" }) => (

    <>
        <div id="top-menu" className="top-menu w-full bg-primary min-h-12">
            <div className="container grid grid-cols-2 text-center">
                <div className="news-ticker py-3 col-span-2 sm:col-span-1 text-white sm:text-left hidden sm:inline-block">
                    {/* <span className="font-bold">Latest</span>
                    <span> | </span>
                    <span id="news-ticker" className="font-light"></span> */}
                </div>
                <div className="py-3 col-span-2 sm:col-span-1 text-slate-500 sm:text-right">
                    <nav className="social">
                        <a href={`${facebookLink ?? "#"}`}><i className="px-2 inline-block w-auto relative fab fa-facebook hover:text-slate-300"></i></a>
                        <a href={`${twitterLink ?? "#"}`}><i className="px-2 inline-block w-auto relative fab fa-twitter hover:text-slate-300"></i></a>
                        <a href={`${instagramLink ?? "#"}`}><i className="px-2 inline-block w-auto relative fab fa-instagram hover:text-slate-300"></i></a>
                        <a href={`${youtubeLink ?? "#"}`}><i className="px-2 last:pr-0 inline-block w-auto relative fab fa-youtube hover:text-slate-300"></i></a>
                    </nav>
                </div>
            </div>
        </div>




        <script>

        </script>

    </>

);




