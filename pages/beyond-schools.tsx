import * as React from 'react';
import Link from 'next/link';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import { client } from '../helpers/data-fetcher';



interface IHomePageProps {
    topics: any,
}

const emptyComponent: React.FC<IHomePageProps> = ({ topics = null }) => {
    // stats = stats?.items[0]?.fields ?? {};
    let topicItems = topics?.items ?? [];


    const options = {
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        height: '15rem',
    };
    console.log({ topicItems });

    return (
        <>
            <div className="page-header relative z-0 pt-14 pb-0 bg-teal-700 mb-10 text-slate-400 bg-fixed bg-center bg-cover bg-blend-color-burn shadow-gray-500 drop-shadow-lg ">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 pt-10 pb-32">
                        <div>
                            <img src="/img/beyond-schools-hero.png" alt="img" />
                        </div>
                        <div className="lg:py-16">
                            <div className="inline-block bg-slate-700 text-white rounded-full py-2 px-4">Inclusive Education</div>
                            <h1 className="pt-4 py-2 text-4xl text-white">A Holistic Lens <br /> to Steer Your Life with Progress</h1>
                            <h2 className="pt-4 py-2 text-light text-white">We bring you Life and the Real World, Beyond the Bindings of your Coursebook</h2>
                            <a className="inline-block text-white bg-humans py-2 mt-4 px-4 bg-secondary" href="#">Join Now</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section relative mt-16 min-h-20 sm:-mt-32 z-100">
                <div className="container -mb-24">


                    <Splide
                        options={{
                            type: 'slide',
                            snap: true,
                            focus: 1,
                            trimSpace: true,
                            perPage: 4,
                            perMove: 1,
                            autoWidth: false,
                            start: 1,
                            autoplay: true,
                            pagination: false,
                            // height: '500px',
                            gap: '2rem',
                            rewind: true, //only for type:fade    
                            speed: 300,
                        }}
                    // className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {
                            topicItems.map((topic, index) => {
                                return (
                                    <SplideSlide key={topic.sys.id} className={`inline-block slide h-72 slide-color-${(Array.isArray(topic?.fields?.color) && topic?.fields?.color.length !== 0) ? topic?.fields?.color[0].toLowerCase() : 'slate'} p-5 text-center`}>
                                        <div className="icon w-46 h-46 mx-auto p-12  bg-no-repeat bg-center" style={{ backgroundImage: `url("/img/beyond-schools-slider-bg.png")` }}>
                                            <i className={`text-5xl text-${(Array.isArray(topic?.fields?.color) && topic?.fields?.color[0].length !== 0) ? topic?.fields?.color[0].toLowerCase() : 'slate'}-500 text-lg fa-${topic?.fields?.iconType ? topic?.fields?.iconType[0].toLowerCase() : 'solid'} fa-${topic?.fields?.iconName ? topic?.fields?.iconName?.toLowerCase() : 'book-open'}`}></i>
                                        </div>
                                        <div className="text-center text-white font-bold">
                                            {topic?.fields?.topicName}
                                        </div>
                                        <Link href={topic?.fields?.link}>
                                            <a className='block w-12 h-12 p-2 mt-8 bg-white/20 hover:bg-white/50 rounded-full mx-auto text-lg'>
                                                <i className="text-white text-lg fa-solid fa-arrow-right"></i>
                                            </a>
                                        </Link>
                                    </SplideSlide>
                                )
                            })}
                    </Splide>


                </div>
            </div>


            <div className="section mt-28">
                <div className="container py-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 pt-10">
                        <div className='sm: py-20' >
                            <img src="https://solverwp.com/demo/html/edumint/assets/img/about/3.png" alt="" />
                        </div>
                        <div className='sm:py-20'>
                            <div className="heading text-primary" data-id="2">A New Outlook Towards Knowledge - Beyond Schools</div>
                            <p className="my-5" data-id="2">
                                We believe that knowledge and wisdom do not confine to the boundaries of your classroom! The practicalities and challenges of the natural world, impart the real essence of learning. With this unique approach promising a learning drive, Beyond Schools focuses on the holistic growth and development of young and curious minds to stay ahead and ready in both diverse and adverse life situations!.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-5 sm:gap-10 pt-5">
                                <div className='py-6 text-center'>
                                    {/* <span className="fa-stack text- text-4xl align-sub"> */}
                                        {/* <i className="fa-solid fa-square text-teal-600 fa-stack-2x"></i> */}
                                        {/* <i className="fa-solid fa-filter fa-inverse fa-stack-1x text-white"></i> */}
                                        <i className="text-5xl fa-solid fa-chalkboard-user text-teal-600"></i>
                                    {/* </span> */}
                                </div>
                                <div className='sm:col-span-4'>
                                    {/* <div className="text-primary text-2xl">Sub Heading 1</div> */}
                                    <p>
                                        Curated Teachings on a Range of Essential Topics. From mental health to Financial Knowledge, we have got you covered in all aspects and phases of life!
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-5 sm:gap-10 pt-5">
                                <div className='py-6 text-center'><i className="text-6xl fa-solid fa-person-chalkboard text-teal-600"></i></div>
                                <div className='sm:col-span-4'>
                                    {/* <div className="text-primary text-2xl">Sub Heading  2</div> */}
                                    <p>
                                        Led by Experts in the Field! We bring together like-minded individuals who deliver the best aspects on the topics and leave a kindle of change in your mind!                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-5 sm:gap-10 pt-5">
                                <div className='py-6 text-center'><i className="text-6xl fa-solid fa-handshake-angle text-teal-600"></i></div>
                                <div className='sm:col-span-4'>
                                    {/* <div className="text-primary text-2xl">Sub Heading  2</div> */}
                                    <p>
                                        Easy access to all information at a finger&apos;s touch! If you want to seek information on more topics, feel free to reach out to us with your suggestions!
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>


            <div className="section bg-section bg-teal-800">
                <div className="container py-5 text-center">
                    <img src="/img/beyond-schools-logo.png" className='max-w-[300px] mb-10 mx-auto' alt="" />
                    {/* <div className="text-2xl relative inline-block text-white py-2 px-4">Checkout Beyond Schools content</div> */}
                    <Link href="https://beyondschools.sakarfoundation.org/sign_up"><a className='bg-white text-teal-600 py-2 px-4'>Join Now</a></Link>
                </div>
            </div>

        </>

    )
}

emptyComponent.displayName = "Empty Component";
export default emptyComponent;


export async function getServerSideProps() {
    let clientObj = client();

    const topics: any = await clientObj.getEntries({
        content_type: 'beyondSchools'
    });

    console.log(topics);

    return {
        props: { topics }
    }
}