import Link from 'next/link';
import ProjectSlider from '../components/projects-slider';
import { client } from '../helpers/data-fetcher';

interface IHomePageProps {
    projects: any,
    stats: any
}

const HomePage: React.FC<IHomePageProps> = ({ projects = null, stats = null }) => {
    stats = stats?.items[0]?.fields ?? {};
    // console.log({ stats });

    return (
        <>
            {/* <div className="section bg-section" style={{ backgroundImage: "url(/img/logo-gradient-inverse.svg)" }}>

                <div className="container my-5">
                    <h1 className="text-5xl">
                        <div className='font-semibold text-slate-500'>We are a non-profit fighting for Everyone.</div>
                        <div className='font-extralight block mt-9 text-primary'>
                            <span className='text-humans'>Humans</span>
                            ,&nbsp;
                            <span className='text-animals'>Animals</span>
                            &nbsp;and&nbsp;
                            <span className='text-plants'>Plants</span>
                            .</div>
                    </h1>
                </div>

                <div className="videoWrapper">
                    <div className='block, h-18 relative w-full bg-white'
                        style={{
                            zIndex: 1,
                            backgroundImage: "url(/img/logo-gradient-inverse.svg)",
                            backgroundSize: "80% auto",
                            backgroundPosition: "center",
                            backgroundAttachment: "fixed",
                            backgroundRepeat: "no-repeat"
                        }}>  </div>
                    <iframe className='-mt-24 z-0' src="https://www.youtube.com/embed/KT0A_VjGqKs?rel=0&version=3&autoplay=1&controls=0&&showinfo=0&loop=1&mute=1&modestbranding=1&autohide=1&playlist=KT0A_VjGqKs" title="Sākār Foundation" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" ></iframe>
                    <div className='block, h-full absolute w-full'> </div>


                </div>
            </div> */}


            {/*<div className="section bg-section" style={{ backgroundImage: "url(/img/logo-gradient-inverse.svg)" }}>

                 <div className="container">
                    <div className="grid grid-cols-3">
                        <div className="col-span-3 sm:col-span-1 py-10 sm:py-52 animatedParent" data-sequence="300">
                            <div className="heading text-primary animated animateOnce fadeInLeftShort" data-id="1">Sākār
                                Spark</div>
                            <p className="support-text animated animateOnce fadeInLeftShort" data-id="2">Supporting
                                initiatives led by youth through <br />
                                our non-profit incubator</p>
                            <a href="sakar-spark"
                                className="arrow-btn text-primary animated animateOnce fadeInDownShort"
                                data-id="3">Learn more</a>
                        </div>
                        <div className="col-span-3 sm:col-span-2 sm:py-5 animatedParent">
                            <img className="w-full h-auto animated animateOnce fadeInRightShort" src="/img/hero.png" alt="" />
                        </div>
                    </div>
                </div> 
            </div>*/}



            <div className="hero-img" style={{ backgroundImage: "url('/img/home-hero.jpg')" }}>
                <div className="hero-text text-white container pt-52 pb-4">
                    <div className="text-5xl">We&apos;re a Non Profit</div>
                    <div className="text-2xl mt-4">Fighting for Everyone.</div>
                </div>
                <div className="h-48 w-min-screen  mt-28 2xl:mt-96" style={{ zIndex: 2 }}>
                </div>
                <div className="container grid grid-cols-3 md:gap-3 divide-x-2 divide-solid divide-gray-600 md:divide-x-0 overflow-hidden -mt-72 mb-16" style={{ zIndex: 10 }}>
                    <Link href="/programs?category=humans"><a className="hero-link bg-humans/80" style={{ backgroundImage: "url('/img/programs/humans.svg')" }}><span>Humans</span></a></Link>
                    <Link href="/programs?category=animals"><a className="hero-link bg-animals/80" style={{ backgroundImage: "url('/img/programs/animals.svg')" }}><span>Animals</span></a></Link>
                    <Link href="/programs?category=plants"><a className="hero-link bg-plants/80" style={{ backgroundImage: "url('/img/programs/plants.svg')" }}><span>Plants</span></a></Link>
                </div >
            </div >

            <div className="section-0 bg-gray-200 py-0">
                {/* <div className="section-0 bg-primary text-white py-0 bg-section"
                style={{ backgroundImage: "url('/img/logo-line-grey.svg')" }}> */}
                <div className="grid grid-cols-2 animatedParent" data-sequence="300">
                    <div className="col-span-2 sm:col-span-1 bg-cover bg-center animated animateOnce fadeInLeftShort"
                        data-id="1" style={{ backgroundImage: "url('/img/home-youth.jpg')" }}>

                    </div>
                    <div className="col-span-2 sm:col-span-1 pl-12">
                        <div className="col-span-2 sm:col-span-1 py-16 sm:py-24 pl-12">
                            <div className="container">
                                <div className="heading text-primary animated animateOnce fadeInRightShort" data-id="1">Youth can
                                    LEAD, <br />
                                    Youth can CARE.</div>
                                <p className="animated animateOnce fadeInRightShort my-5" data-id="2">
                                    Young leadership at Sākār Foundation is an example in itself.
                                </p>
                                <Link href="/leadership">
                                    <a className="arrow-btn text-primary animated animateOnce fadeInDownShort"
                                        data-id="3">Learn
                                        more</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-0 bg-section">
                <div className="container">

                    <div className="grid grid-cols-2 animatedParent" data-sequence="300">
                        <div className="col-span-2 sm:col-span-1 py-10 sm:py-16 ">
                            <div className="heading text-primary animated animateOnce fadeInLeftShort" data-id="2">Global Presence
                            </div>
                            <p className="animated animateOnce fadeInLeftShort my-5" data-id="2">
                                We work across the gloab without any political, social or racial boundaries. Currently we are mainly
                                working in United States, Africa and India
                            </p>
                            <Link href="/about">
                                <a className="arrow-btn text-primary animated animateOnce fadeInDownShort"
                                    data-id="3">More about us</a>
                            </Link>

                        </div>

                        <div className="col-span-2 sm:col-span-1 py-10 sm:py-16" data-id="1">
                            <img src="/img/global-presence.svg" className="w-full h-auto" data-id="1" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="section-0 bg-section" style={{ backgroundImage: "url('/img/logo-grey.svg')" }}>
                <div className="container">
                    <div className="grid grid-cols-2 animatedParent" data-sequence="300">
                        <div className="col-span-2 sm:col-span-1 pt-16 pb-6">
                            <div className="heading sm:text-5xl sm:font-light text-gray-400 bg-primary p-8 sm:h-96 animated animateOnce fadeInLeftShort"
                                data-id="1" style={{ lineHeight: 1.625 }}>
                                Everything is possible
                                when
                                <span className="text-white animated animateOnce fadeInUptShort inline-block"
                                    data-id="2">&nbsp; AMBITION &nbsp;</span>
                                meets
                                <span className="text-white animated animateOnce fadeInUpShort inline-block"
                                    data-id="3">&nbsp; OPPORTUNITY</span>
                            </div>
                        </div>
                        <div className="col-span-2 sm:col-span-1 pt-24 pb-6"> */}
            {/* <!-- <div className="bg-white border border-gray-200 shadow-2xl drop-shadow-2xl bg-opacity-80 table mb-8 w-full animated animateOnce fadeInDownShort" --> */}
            {/* <div className="bg-white border-b border-dashed border-gray-400 bg-opacity-95 table w-full animated animateOnce fadeInDownShort"
                                data-id="1">
                                <div className="p-6 table-cell w-28"><img className="w-20 h-auto" src="/img/icons/1.png" alt="" />
                                </div>
                                <div className="table-cell align-middle text-left p-2 pr-6 font-bold">
                                    {stats.projectLeadCount} youths raised funds for their cause
                                </div>
                            </div>
                            <div className="bg-white border-b border-dashed border-gray-400 bg-opacity-95 table w-full animated animateOnce fadeInDownShort"
                                data-id="2">
                                <div className="p-6 table-cell w-28"><img className="w-20 h-auto" src="/img/icons/2.png" alt="" />
                                </div>
                                <div className="table-cell align-middle p-2 pr-6 font-bold">
                                    {stats.totalProjects} projects across {stats.totalCauses} causes
                                </div>
                            </div>
                            <div className="bg-white border-gray-200 bg-opacity-95 table w-full animated animateOnce fadeInDownShort"
                                data-id="3">
                                <div className="p-6 table-cell w-28"><img className="w-20 h-auto" src="/img/icons/3.png" alt="" />
                                </div>
                                <div className="table-cell align-middle p-2 pr-6 font-bold">
                                    Making a difference in {stats.globalPresence} countries across the globe
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center pb-12 animatedParent">
                        <a href="about"
                            className="arrow-btn text-primary animated animateOnce fadeInUpShort">More about
                            us</a>
                    </div>
                </div>
            </div> */}
            {/* <div>

            </div> */}

            {/* Project slider hidden */}
            {/* <div className="section bg-primary text-white">
                <div className="container text-center animatedParent">
                    <div className="heading text-center text-white animated animateOnce fadeInDownShort" data-id="1">
                        Projects
                    </div>
                    <div className="animated animateOnce fadeInUpShort" data-id="2">
                        <ProjectSlider projects={projects?.items ?? []}></ProjectSlider>
                    </div>
                    <br />
                    <Link href="/projects">
                        <a
                            className="p-2 bg-color-white arrow-btn h-10 text-white animated animateOnce fadeInDownShort" data-id="3"
                        >View all</a>
                    </Link>
                </div>
            </div> */}



            {/* <div className="section bg-white">
                <div className="container animatedParent" data-sequence="100">
                    <div className="heading text-center text-primary animated animateOnce fadeInDownShort" data-id="1">
                        Start your own fundraiser
                    </div>
                    <div className="grid grid-cols-3 sm:gap-16 mt-16 text-center sm:text-left animatedParent"
                        data-sequence="300">
                        <div className="col-span-3 sm:col-span-1 table sm:border-dashed sm:border-gray-600 sm:border-r">
                            <span className="text-6xl text-primary table-cell p-2 animated animateOnce fadeIn"
                                data-id="1">1</span>
                            <span className="table-cell align-middle text-xl animated animateOnce fadeInDownShort"
                                data-id="2">Register yourself <br /> at Sākār</span>
                        </div>
                        <div className="col-span-3 sm:col-span-1 table sm:border-dashed sm:border-gray-600 sm:border-r">
                            <span className="text-6xl text-primary table-cell p-2 animated animateOnce fadeIn"
                                data-id="3">2</span>
                            <span className="table-cell align-middle text-xl animated animateOnce fadeInDownShort"
                                data-id="4">Create a campaign <br /> for your cause</span>
                        </div>
                        <div className="col-span-3 sm:col-span-1 table">
                            <span className="text-6xl text-primary table-cell p-2 animated animateOnce fadeIn"
                                data-id="5">3</span>
                            <span className="table-cell align-middle text-xl animated animateOnce fadeInDownShort"
                                data-id="6">Start raising funds <br /> with our Tax ID</span>
                        </div>
                    </div>
                    <div className="text-center pt-6 animated animateOnce fadeInUpShort" data-id="6">
                        <Link href="/new-fundraiser" >
                            <a className="arrow-btn text-primary">Register now</a>
                        </Link>
                    </div>
                </div>
            </div> */}

        </>


        //     {/* <div className='bg-yellow-600 p-5 w-full'></div> */}
        // {/* <pageBody></pageBody> */}

    )

}

HomePage.displayName = "Home Page";
export default HomePage;



export async function getServerSideProps() {
    // Fetch data from external API

    let clientObj = client();

    // const res: any = await clientObj.getAssets();
    const projects: any = await clientObj.getEntries({
        content_type: 'projects'
    });
    const stats: any = await clientObj.getEntries({
        content_type: 'stats'
    });


    // const res1: any = await clientObj.getEntries({
    //     content_type: 'projects',
    //     'fields.slug': 'example-project-4'
    // })

    // res.slug = res1;

    return {
        props: { projects, stats }
    }

}