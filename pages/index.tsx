import ProjectSlider from '../components/projects-slider';
import { client } from '../helpers/data-fetcher';

interface IHomePageProps {
    projects: any,
    stats: any
}

const HomePage: React.FC<IHomePageProps> = ({ projects, stats }) => {
    stats = stats.items[0].fields;
    console.log({ stats });

    return (
        <>
            <div className="section bg-section" style={{ backgroundImage: "url(/img/logo-gradient-inverse.svg)" }}>
                <div className="container">
                    <div className="grid grid-cols-3">
                        <div className="col-span-3 sm:col-span-1 py-10 sm:py-52 animatedParent" data-sequence="300">
                            <div className="heading text-primary animated animateOnce fadeInLeftShort" data-id="1">Sākār
                                Spark</div>
                            <p className="support-text animated animateOnce fadeInLeftShort" data-id="2">Supporting
                                initiatives led by youth through <br />
                                our non-profit incubator</p>
                            <a href="sakar-spark"
                                className="arrow-btn text-primary font-bold animated animateOnce fadeInDownShort"
                                data-id="3">Learn more</a>
                        </div>
                        <div className="col-span-3 sm:col-span-2 sm:py-5 animatedParent">
                            <img className="w-full h-auto animated animateOnce fadeInRightShort" src="/img/hero.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-0 bg-primary text-white py-0 bg-section"
                style={{ backgroundImage: "url('/img/logo-line-grey.svg')" }}>
                <div className="grid grid-cols-2 animatedParent" data-sequence="300">
                    <div className="col-span-2 sm:col-span-1 bg-cover bg-center animated animateOnce fadeInLeftShort"
                        data-id="1" style={{ backgroundImage: "url('/img/kids3.jpg')" }}>
                    </div>
                    <div className="col-span-2 sm:col-span-1 py-16 sm:py-32 pl-12">
                        <div className="container">
                            <div className="heading text-white animated animateOnce fadeInRightShort" data-id="1">Youth can
                                LEAD, <br />
                                Youth can CARE.</div>
                            <p className="support-text text-white animated animateOnce fadeInRightShort" data-id="2">
                                Highschool students can raise <br /> funds for their cause and help <br /> those in need
                                worldwide
                            </p>
                            {/* <a href="" className="arrow-btn text-white font-bold animated animateOnce fadeInDownShort"
                                data-id="3">Learn
                                more</a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-0 bg-section" style={{ backgroundImage: "url('/img/logo-grey.svg')" }}>
                <div className="container">
                    <div className="grid grid-cols-2 animatedParent" data-sequence="300">
                        <div className="col-span-2 sm:col-span-1 pt-16 pb-6">
                            <div className="heading sm:text-5xl sm:font-light text-gray-400 bg-primary p-8 sm:h-96 animated animateOnce fadeInLeftShort"
                                data-id="1" style={{ lineHeight: 1.625 }}>
                                Everything is possible
                                when
                                <span className="text-white animated animateOnce fadeInUptShort inline-block"
                                    data-id="2">AMBITION</span>
                                meets
                                <span className="text-white animated animateOnce fadeInUpShort inline-block"
                                    data-id="3">OPPORTUNITY</span>
                            </div>
                        </div>
                        <div className="col-span-2 sm:col-span-1 pt-24 pb-6">
                            {/* <!-- <div className="bg-white border border-gray-200 shadow-2xl drop-shadow-2xl bg-opacity-80 table mb-8 w-full animated animateOnce fadeInDownShort" --> */}
                            <div className="bg-white border-b border-dashed border-gray-400 bg-opacity-95 table w-full animated animateOnce fadeInDownShort"
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
                            className="arrow-btn text-primary font-bold animated animateOnce fadeInUpShort">More about
                            us</a>
                    </div>
                </div>
            </div>
            <div>

            </div>

            <div className="section bg-primary text-white">
                <div className="container text-center animatedParent">
                    <div className="heading text-center text-white animated animateOnce fadeInDownShort" data-id="1">
                        Projects
                    </div>
                    <div className="animated animateOnce fadeInUpShort" data-id="2">

                        <ProjectSlider projects={projects.items}></ProjectSlider>
                    </div>
                    <br />
                    <a href="/projects"
                        className="p-2 bg-color-white arrow-btn h-10 text-white font-bold animated animateOnce fadeInDownShort" data-id="3"
                    >View all</a>
                </div>
            </div>
            <div className="section bg-white">
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
                        <a href="new-fundraiser" className="arrow-btn text-primary font-bold inline-block">Register now</a>
                    </div>
                </div>
            </div>

        </>


        //     {/* <div className='bg-yellow-600 p-5 w-full'></div> */ }
        // {/* <pageBody></pageBody> */ }

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