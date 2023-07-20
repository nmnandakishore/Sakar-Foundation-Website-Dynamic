import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { BLOCKS } from '@contentful/rich-text-types';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import { client } from '../helpers/data-fetcher';
import { element } from 'prop-types';
import { TopicsList } from '../components/topics-list';
import Plyr from 'plyr';




interface IBeyondSchoolsPageProps {
    topics: any,
    resources: any,
    events: any,
    partners: any,
    schools: any
}


// props: { topics, resources, events, partners, schools }

const BeyondSchoolsPage: React.FC<IBeyondSchoolsPageProps> = ({ topics = null, resources = null, events = null, partners = null, schools = null }) => {

    // stats = stats?.items[0]?.fields ?? {};
    let topicItems = topics ?.items ?? [];
    let resourceItems = resources ?.items ?? [];
    let eventItems = events ?.items ?? [];
    let partnerItems = partners ?.items ?? [];
    let schoolItems = schools ?.items ?? [];



    // const options = {
    //     type: 'loop',
    //     gap: '1rem',
    //     autoplay: true,
    //     pauseOnHover: false,
    //     resetProgress: false,
    //     height: '15rem',
    // };


    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
                // console.log({ node });
                return (
                    // <img src={node.data.target.fields.file.url} alt={node.data.target.fields.title} />
                    <span></span>
                );
            }
        }
    }


    // const useEventListener = (
    //     eventName: 'keydown' | 'keyup',
    //     handler: ({ key }: KeyboardEvent) => void,
    // ) => {
    //     const savedHandler = React.useRef<({ key }: KeyboardEvent) => void>(handler)

    //     React.useEffect(() => {
    //         savedHandler.current = handler
    //     }, [handler])

    //     React.useEffect(() => {
    //         const eventListener = (event: KeyboardEvent) => savedHandler.current(event)

    //         window.addEventListener(eventName, eventListener);

    //         return () => {
    //             window.removeEventListener(eventName, eventListener)
    //         }
    //     }, [eventName])
    // }


    useEffect(() => {
        window.addEventListener("load", (event) => {
            const player = new Plyr('#introPlayer', {
                hideControls: true,
                controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
                youtube: { noCookie: true, rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1, origin: 'localhost' } //www.sakarfoundation.org
            });


            document.querySelector('#modalTrigger').addEventListener('click', () => {
                document.querySelector('#modal').classList.remove('hidden');
            })

            document.querySelector('#modal').addEventListener('click', (event) => {
                (event.srcElement as HTMLElement).classList.add('hidden');
                player.stop();
            })

            document.querySelector('#modal #closeBtn').addEventListener('click', (event) => {
                document.querySelector('#modal').classList.add('hidden');
                player.stop();
            })


        });
    })

    // console.log({ topicItems });
    // console.log({ eventItems });
    // console.log({ partnerItems });




    return (
        <>
            <div className="page-header relative z-0 pt-14 pb-0 bg-teal-700 text-slate-400 bg-fixed bg-center bg-cover bg-blend-color-burn shadow-gray-500 drop-shadow-lg ">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 pt-10 pb-32">
                        <div className="bg-[url('/img/beyond-schools-hero.png')] bg-contain bg-no-repeat bg-center flex justify-center items-center align-middle">
                            {/* <img src="/img/beyond-schools-hero.png" alt="img" /> */}
                            <span id="modalTrigger" className="block w-20 h-20 hover:w-24 hover:h-24 transition-all bg-[url('/img/icon-play.svg')] cursor-pointer rounded-full bg-contain ng-no-repeat ng-center]"> </span>
                        </div>
                        <div className="lg:py-16">
                            <div className="inline-block bg-slate-700 text-white rounded-full py-2 px-4">Inclusive Education</div>
                            <h1 className="pt-4 py-2 text-4xl text-white">A Holistic Lens <br /> to Steer Your Life with Progress</h1>
                            <h2 className="pt-4 py-2 text-light text-white">We bring you Life and the Real World, Beyond the Bindings of your Coursebook</h2>
                            {/* <a className="inline-block text-white bg-humans py-2 mt-4 px-4 bg-secondary" href="https://beyondschools.sakarfoundation.org/sign_up">Join Now</a> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="section relative mt-16 min-h-20 sm:-mt-32 z-100">
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
                                    <SplideSlide key={topic.sys.id} className={`inline-block slide h-72 slide-color-${(Array.isArray(topic ?.fields ?.color) && topic ?.fields ?.color.length !== 0) ? topic ?.fields ?.color[0].toLowerCase() : 'slate'} p-5 text-center`}>
                                        <div className="icon w-46 h-46 mx-auto p-12  bg-no-repeat bg-center" style={{ backgroundImage: `url("/img/beyond-schools-slider-bg.png")` }}>
                                            <i className={`text-5xl text-${(Array.isArray(topic ?.fields ?.color) && topic ?.fields ?.color[0].length !== 0) ? topic ?.fields ?.color[0].toLowerCase() : 'slate'}-500 text-lg fa-${topic ?.fields ?.iconType ? topic ?.fields ?.iconType[0].toLowerCase() : 'solid'} fa-${topic ?.fields ?.iconName ? topic ?.fields ?.iconName ?.toLowerCase() : 'book-open'}`}></i>
                                        </div>
                                        <div className="text-center text-white font-bold">
                                            {topic ?.fields ?.topicName}
                                        </div>
                                        <Link href={topic ?.fields ?.link}>
                                            <a className='block w-12 h-12 p-2 mt-8 bg-white/20 hover:bg-white/50 rounded-full mx-auto text-lg'>
                                                <i className="text-white text-lg fa-solid fa-arrow-right"></i>
                                            </a>
                                        </Link>
                                    </SplideSlide>
                                )
                            })}
                    </Splide>


                </div>
            </div> */}


            <div className="section bg-section bg-slate-200 mt-0">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10">
                        <div className='sm: pb-10' >
                            <img src="/img/beyond-schools-hero-2.png" alt="" />
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

            <div className="section bg-section mt-0">
                <div className="container">
                    <div className="heading text-primary text-center" data-id="1">Topics</div>
                    <div className="py-14">
                        <TopicsList></TopicsList>
                    </div>
                </div>
            </div>

            <div id="secondary-menu" className="animate__animated animate__faster h-100 bg-slate-100">
                <div className="container py-o m-0 z-[] nav menu grid grid-cols-5 p-o m-o">
                    <div className="menu-item p-0 text-center"><a className="block hover:bg-slate-100 hover:bg-slate-200 border-solid py-2 sm:px-10 cursor-pointer border-r border-r-gray-300" href="#" target-id="teamMembers" >Team Members</a></div>
                    <div className="menu-item p-0 text-center"><a className="block hover:bg-slate-100 hover:bg-slate-200 border-solid py-2 sm:px-10 cursor-pointer border-r border-r-gray-300" href="#" target-id="resources" >Resourses</a></div>
                    <div className="menu-item p-0 text-center"><a className="block hover:bg-slate-100 hover:bg-slate-200 border-solid py-2 sm:px-10 cursor-pointer border-r border-r-gray-300" href="#" target-id="events" >Events</a></div>
                    <div className="menu-item p-0 text-center"><a className="block hover:bg-slate-100 hover:bg-slate-200 border-solid py-2 sm:px-10 cursor-pointer border-r border-r-gray-300" href="#" target-id="partners" >Partners</a></div>
                    <div className="menu-item p-0 text-center"><a className="block hover:bg-slate-100 hover:bg-slate-200 border-solid py-2 sm:px-10 cursor-pointer" href="#" target-id="schools" >Schools</a></div>
                    {/* <div className="menu-item p-0 sm:px-10 text-center hover:border-b-2 border-teal-700 border-solid"><a href="#" ></a></div> */}
                </div>
            </div>


            {/*----------Team Members-----------*/}


            <div className="section bg-section bg-teal-700 relativse min-h-20 text-white" id="teamMembers">
                <div className="heading text-white text-center" data-id="1">Team Members</div>
                <div className="grid grid-cols-3">

                    <div className="py-6 lg:py-0 text-center">
                        <div className="text-center">
                            <img className="rounded-full object-cover mx-auto w-24 h-24 lg:w-28 lg:h-28" src="/img/beyond-schools/team/keithan.jpg" alt="   " />
                        </div>
                        <div className="justify-center mt-5 sm:mt-0 sm:p-5 lg:col-span-3 text-center">
                            <p className="text-sm font-bold">Keithan Pai</p>
                            <p className="text-sm"></p>
                            {/* <p className="mb-4 text-xs text-gray-400 font-bold">{partner.fields.designation}</p> */}
                        </div>
                    </div>

                    <div className="py-6 lg:py-0 text-center">
                        <div className="text-center">
                            <img className="rounded-full object-cover mx-auto w-24 h-24 lg:w-28 lg:h-28" src="/img/beyond-schools/team/keisha.jpg" alt="   " />
                        </div>
                        <div className="justify-center mt-5 sm:mt-0 sm:p-5 lg:col-span-3 text-center">
                            <p className="text-sm font-bold">Keisha Pai</p>
                            <p className="text-sm"></p>
                            {/* <p className="mb-4 text-xs text-gray-400 font-bold">{partner.fields.designation}</p> */}
                        </div>
                    </div>

                    <div className="py-6 lg:py-0 text-center">
                        <div className="text-center">
                            <img className="rounded-full object-cover mx-auto w-24 h-24 lg:w-28 lg:h-28" src="/img/beyond-schools/team/angel_Eva_D-Souza.jpg" alt="   " />
                        </div>
                        <div className="justify-center mt-5 sm:mt-0 sm:p-5 lg:col-span-3 text-center">
                            <p className="text-sm font-bold">Angel Eva D'Souza</p>
                            <p className="text-sm"></p>
                            {/* <p className="mb-4 text-xs text-gray-400 font-bold">{partner.fields.designation}</p> */}
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-4">
                    <div className="py-6 lg:py-0 text-center">
                        <div className="text-center">
                            <img className="rounded-full object-cover mx-auto w-24 h-24 lg:w-28 lg:h-28" src="/img/beyond-schools/team/veeda.jpeg" alt="   " />
                        </div>
                        <div className="justify-center mt-5 sm:mt-0 sm:p-5 lg:col-span-3 text-center">
                            <p className="text-sm font-bold">Veeda Almeida</p>
                            <p className="text-sm"></p>
                            {/* <p className="mb-4 text-xs text-gray-400 font-bold">{partner.fields.designation}</p> */}
                        </div>
                    </div>

                    <div className="py-6 lg:py-0 text-center">
                        <div className="text-center">
                            <img className="rounded-full object-cover mx-auto w-24 h-24 lg:w-28 lg:h-28" src="/img/beyond-schools/team/ashel.png" alt="   " />
                        </div>
                        <div className="justify-center mt-5 sm:mt-0 sm:p-5 lg:col-span-3 text-center">
                            <p className="text-sm font-bold">Ashel Castelino</p>
                            <p className="text-sm"></p>
                            {/* <p className="mb-4 text-xs text-gray-400 font-bold">{partner.fields.designation}</p> */}
                        </div>
                    </div>

                    <div className="py-6 lg:py-0 text-center">
                        <div className="text-center">
                            <img className="rounded-full object-cover mx-auto w-24 h-24 lg:w-28 lg:h-28" src="/img/beyond-schools/team/rashmi.jpg" alt="   " />
                        </div>
                        <div className="justify-center mt-5 sm:mt-0 sm:p-5 lg:col-span-3 text-center">
                            <p className="text-sm font-bold">Rashmi Mallya</p>
                            <p className="text-sm"></p>
                            {/* <p className="mb-4 text-xs text-gray-400 font-bold">{partner.fields.designation}</p> */}
                        </div>
                    </div>

                    <div className="py-6 lg:py-0 text-center">
                        <div className="text-center">
                            <img className="rounded-full object-cover mx-auto w-24 h-24 lg:w-28 lg:h-28" src="/img/beyond-schools/team/nandakishore.jpg" alt="   " />
                        </div>
                        <div className="justify-center mt-5 sm:mt-0 sm:p-5 lg:col-span-3 text-center">
                            <p className="text-sm font-bold">Nandakishore</p>
                            <p className="text-sm"></p>
                            {/* <p className="mb-4 text-xs text-gray-400 font-bold">{partner.fields.designation}</p> */}
                        </div>
                    </div>

                </div>
            </div>




            {/*----------Resourse people-----------*/}

            <div className="section bg-section bg-slate-200 relativse min-h-20" id="resources">
                <div className="container">
                    <div className="heading text-primary text-center" data-id="2">Resources</div>
                    <p className="mt-5 mb-12 text-center" data-id="2">
                        Indulge in learning curated by the industry experts. <br /> We bring to you an ecosystem of knowledge and skills with our eminent resource prople.
                </p>

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

                            resourceItems.map((resource, index) => {
                                return (
                                    <SplideSlide key={resource.sys.id} className={`inline-block slide min-h-96 p-5 text-center`}>
                                        <div className="py-6 lg:py-0 text-center">
                                            <div className="text-center">
                                                <img className="rounded-full object-cover mx-auto w-24 h-24 lg:w-28 lg:h-28" src={resource.fields ?.photograph ?.fields ?.file ?.url ?? '/img/placeholder.jpg'} alt="   " />
                                            </div>
                                            <div className="justify-center mt-5 sm:mt-0 sm:p-5 lg:col-span-3 text-center">
                                                <p className="text-sm font-bold">{resource.fields.name}</p>
                                                <p className="text-sm">{resource.fields.designation}</p>
                                                {/* <p className="mb-4 text-xs text-gray-400 font-bold">{partner.fields.designation}</p> */}
                                            </div>
                                        </div>
                                    </SplideSlide>
                                )
                            })
                        }
                    </Splide>


                </div>
            </div>



            {/*----------Events-----------*/}


            <div className="section bg-section relative min-h-20 bg-teal-700" id="events">
                <div className="container text-white">

                    <div className="heading text-white text-center mb-5" data-id="2">Events</div>
                    <p className="mt-5 mb-12 text-center text-teal-100" data-id="2">
                        Beyond Schools is on a trailblazing mission towards creating a wave of change in learning!
                </p>

                    <Splide
                        options={{
                            type: 'slide',
                            snap: true,
                            focus: 1,
                            trimSpace: true,
                            perPage: 1,
                            perMove: 1,
                            autoWidth: false,
                            start: 1,
                            autoplay: true,
                            pagination: false,
                            // height: '500px',
                            gap: '0rem',
                            rewind: true, //only for type:fade    
                            speed: 300,
                        }}
                    // className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {
                            eventItems.map((event, index) => {
                                return (
                                    <SplideSlide key={event.sys.id} className={`inline-block slide min-h-96 p-5 text-center`}>
                                        <div className="grid grid-cols-1 sm:grid-cols-2">
                                            <div className="px-5">
                                                <div className="inline-block w-full h-[350px] bg-cover bg-no-repeat bg-center"
                                                    style={{
                                                        backgroundImage: "url('" + event.fields.eventPhotograph.fields.file.url + "')",
                                                        // boxShadow: "0 0 100px 100px #303247 inset",
                                                        border: 0
                                                    }}>
                                                </div>
                                            </div>
                                            <div className="px-5 text-center text-white sm:text-left">
                                                <div className="text-xl mb-5">{event ?.fields ?.eventName}</div>
                                                <div className="h-46 text-sm">
                                                    <i className={`pr-2 inline fa-solid fa-location-dot`}></i>
                                                    {event ?.fields ?.venue}
                                                </div>
                                                <div className="mt-2 h-46 text-sm">
                                                    <i className={`pr-2 inline fa-solid fa-calendar`}></i>
                                                    {event ?.fields ?.eventDate}
                                                </div>
                                                <div className="mt-5 text-white text-sm h-max-[200px] overflow-hidden sm:text-justify">
                                                    {event ?.fields ?.eventDescription}
                                                    {/* {documentToReactComponents(event?.fields?.eventDescription, options)} */}
                                                </div>
                                            </div>

                                        </div>

                                    </SplideSlide>
                                )
                            })
                        }
                        <SplideSlide key="empty" className={`inline-block slide min-h-96 p-5 text-center`}>
                        </SplideSlide>
                    </Splide>


                </div>
            </div>



            {/*----------Partners-----------*/}

            <div className="section relative mt-12 min-h-20" id="partners">
                <div className="container ">

                    <div className="heading text-primary text-center" data-id="2">Partners</div>
                    {/* <p className="mt-5 mb-12 text-center" data-id="2">
                  
                    </p> */}

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
                            partnerItems.map((partner, index) => {
                                return (
                                    <SplideSlide key={partner.sys.id} className={`inline-block slide min-h-96 p-5 text-center`}>
                                        <div className="py-6 lg:py-0">
                                            <div className="text-center">
                                                <img className="object-cover mx-auto lg:my-2 w-24 h-24 lg:w-36 lg:h-36" src={partner.fields ?.partnerLogo ?.fields ?.file ?.url ?? '/img/placeholder.jpg'} alt="   " />
                                            </div>
                                            <div className="justify-center mt-5 sm:mt-0 sm:p-5 lg:col-span-3 text-center lg:text-left">
                                                <p className="text-sm text-center">{partner.fields.partnerName}</p>
                                                {/* <p className="mb-4 text-xs text-gray-400 font-bold">{partner.fields.designation}</p> */}
                                            </div>
                                        </div>
                                    </SplideSlide>
                                )
                            })
                        }
                    </Splide>


                </div>
            </div>



            {/*----------Schools-----------*/}

            <div className="section relative bg-section bg-slate-200 mt-12 min-h-20" id="schools">
                <div className="container ">

                    <div className="heading text-primary text-center" data-id="2">Schools</div>
                    {/* <p className="mt-5 mb-12 text-center" data-id="2">
                  
                    </p> */}

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
                            schoolItems.map((school, index) => {
                                return (
                                    <SplideSlide key={school.sys.id} className={`inline-block slide min-h-96 p-5 text-center`}>
                                        <div className="py-6 lg:py-0">
                                            <div className="text-center">
                                                <img className="object-cover mx-auto lg:my-2 w-24 h-24 lg:w-36 lg:h-36" src={school.fields ?.schoolLogo ?.fields ?.file ?.url ?? '/img/placeholder.jpg'} alt="   " />
                                            </div>
                                            <div className="justify-center mt-5 sm:mt-0 sm:p-5 lg:col-span-3 text-center lg:text-left">
                                                <p className="text-sm text-center">{school.fields.schoolName}</p>
                                                {/* <p className="mb-4 text-xs text-gray-400 font-bold">{school.fields.designation}</p> */}
                                            </div>
                                        </div>
                                    </SplideSlide>
                                )
                            })
                        }
                    </Splide>


                </div>
            </div>








            <div className="section bg-section bg-teal-800">
                <div className="container py-5 text-center">
                    <img src="/img/beyond-schools-logo.png" className='max-w-[300px] mb-10 mx-auto' alt="" />
                    {/* <div className="text-2xl relative inline-block text-white py-2 px-4">Checkout Beyond Schools content</div> */}
                    {/* <Link href="https://beyondschools.sakarfoundation.org/sign_up"><a className='bg-white text-teal-600 py-2 px-4'> Now</a></Link> */}
                </div>
            </div>


            <div id="modal" className="fixed block flex justify-center items-center align-middle h-full v-full bg-black/90 top-0 left-0 right-0 bottom-0 z-50 hidden">
                <div className="fixed block w-full m-0 sm:w-10/12 md:w-8/12 lg:w-6/12 h-6/12 md:h-10/12 lg:h-6/12 bg-white">
                    <div className="modal-header block w-full text-right">
                        <div id="closeBtn" className="inline-block close-btn px-4 py-2 hover:bg-slate-200 hover:text-teal-700 cursor-pointer font-bold">X</div>
                    </div>
                    <div className="modal-body w-full text-center overflow-hidden">

                        <div className="plyr__video-embed" id="introPlayer">
                            <iframe
                                src="https://www.youtube.com/watch?v=3M5_6rUzos0?origin=https://www.sakarfoundation.org&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;controls=1&amp;showinfo=0&amp;rel=0&amp;widget_referrer=https%3A%2F%2Fsakarfoundation.org%2F&amp;cc_load_policy=1&amp;cc_lang_pref=auto&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.sakarfoundation.org"
                                allowFullScreen
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                            </iframe>
                        </div>

                        {/*<div className="plyr__video-embed" id="introPlayer">
                        <iframe 
                            id="youtube-9767" 
                            frameBorder="0" 
                            allowFullScreen="1" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            title="Player for " src="https://www.youtube.com/embed/3M5_6rUzos0?autoplay=0&amp;controls=0&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;disablekb=1&amp;playsinline=1&amp;widget_referrer=https%3A%2F%2Fsakarfoundation.org%2F&amp;cc_load_policy=0&amp;cc_lang_pref=auto&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fsakarfoundation.org&amp;widgetid=1">
                        </iframe>
                    </div>*/}


                    </div>
                </div>
            </div>

            <script>

                {/* 
                array.forEach.call(secondaryMenuItemElems, function(elem){
                    // elem.addEventListener(event)
                }) */}
            </script>



        </>

    )
}

BeyondSchoolsPage.displayName = "Empty Component";
export default BeyondSchoolsPage;


export async function getServerSideProps() {
    let clientObj = client();

    const topics: any = await clientObj.getEntries({
        content_type: 'beyondSchools'
    });

    const events: any = await clientObj.getEntries({
        content_type: 'beyondSchoolsEvents'
    });

    const schools: any = await clientObj.getEntries({
        content_type: 'beyondSchoolsSchoolPartners'
    });

    const partners: any = await clientObj.getEntries({
        content_type: 'beyondSchoolsPartners'
    });


    const resources: any = await clientObj.getEntries({
        content_type: 'beyondSchoolsSchoolResource'
    });

    // console.log(topics);

    return {
        props: { topics, resources, events, partners, schools }
    }
}