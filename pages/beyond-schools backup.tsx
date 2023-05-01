import * as React from 'react';
import Link from 'next/link';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

interface IHomePageProps {
    projects: any,
    stats: any,
    programs: any
}

const emptyComponent: React.FC<IHomePageProps> = ({projects = null, stats = null, programs = null }) => {
    stats = stats ?.items[0] ?.fields ?? {};
    let programItems = programs?.items ??[];


    const options = {
        type         : 'loop',
        gap          : '1rem',
        autoplay     : true,
        pauseOnHover : false,
        resetProgress: false,
        height       : '15rem',
      };
    return (
        <>
        <div className="banner-area banner-area-3 bg-black">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-2">
                    <div className="thumb b-animate-thumb">
                        <img src="https://solverwp.com/demo/html/edumint/assets/img/banner/3.png" alt="img"/>
                    </div>
                </div>
                <div className="col-lg-7 align-self-center mt-5 mt-lg-0">
                    <div className="banner-inner style-white text-center text-lg-left">
                        <h6 className="b-animate-1 banner-btn">PLACE TO GROW</h6>
                        <h1 className="b-animate-2 title">We creating leaders for tomorrow</h1>
                        <a className="btn btn-base b-animate-3 mr-sm-3 mr-2" href="blog.html">Get A Quote</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="intro-area intro-area--top">
        <div className="container">
            <div className="intro-slider owl-carousel">
                <div className="item">
                    <div className="single-intro-inner style-white bg-green text-center">
                        <div className="thumb">
                            <img src="https://solverwp.com/demo/html/edumint/assets/img/intro/7.png" alt="img"/>
                        </div>
                        <div className="details">
                            <h5>Postgraduate</h5>
                            <a className="read-more" href="blog-details.html"><i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="single-intro-inner style-white bg-yellow text-center">
                        <div className="thumb">
                            <img src="https://solverwp.com/demo/html/edumint/assets/img/intro/8.png" alt="img"/>
                        </div>
                        <div className="details">
                            <h5>Postgraduate</h5>
                            <a className="read-more" href="blog-details.html"><i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="single-intro-inner style-white bg-blue text-center">
                        <div className="thumb">
                            <img src="https://solverwp.com/demo/html/edumint/assets/img/intro/9.png" alt="img"/>
                        </div>
                        <div className="details">
                            <h5>Postgraduate</h5>
                            <a className="read-more" href="blog-details.html"><i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="single-intro-inner style-white bg-red text-center">
                        <div className="thumb">
                            <img src="https://solverwp.com/demo/html/edumint/assets/img/intro/10.png" alt="img"/>
                        </div>
                        <div className="details">
                            <h5>Postgraduate</h5>
                            <a className="read-more" href="blog-details.html"><i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    <div className="section bg-section bg-[#303247]">

<div className="container">
    <p className="heading py-5 text-white text-center">Our Programs</p>
</div>

<div className="pb-8">
    <Splide
        options={{
            type: 'loop',
            padding: '15rem',
            focus: 'center',
            autoWidth: true,
            start: 1,
            autoplay: true,
            height: '500px',
            gap: '5rem',
            rewind: true, //only for type:fade    
            speed: 500,
        }}
    >

        {programItems.map((programItem) => {
            // let lowerCaseCat = 
            return (

                <SplideSlide className="homeslider " key={programItem.sys.id}>
                    <Link href={`/programs?category=${programItem?.fields?.category.toLowerCase()}`} >
                        <a className={"block p-0 w-full"}>
                            <div className={"block p-0 m-0 w-full"}>
                                <div className="sliderbg w-full min-w-[400px]">
                                    <div className="sliderbg block w-full h-[350px] bg-contain bg-no-repeat bg-center bg-primary"
                                        style={{
                                            backgroundImage: "url('" + programItem.fields.featuredImage.fields.file.url + "')",
                                            border: 0
                                        }}
                                    >

                                    </div>
                                </div>
                            </div>
                            <div className={"h-full animatedParent border-b-2"} data-sequence="300">
                                <h2 className={"w-full text-white text-md whitespace-pre-wrap p-5 h-[100px] overflow-hidden	text-center bg-" + programItem.fields.category.toLowerCase()} data-id="1">{programItem.fields.programName}</h2>
                            </div>
                        </a>
                    </Link>
                    {console.log(programItem.fields)}
                </SplideSlide>
            )
        })}
    </Splide>
</div>
</div>

        </>

    )
}

emptyComponent.displayName = "Empty Component";
export default emptyComponent;