import * as React from 'react'


const aboutPage: React.FC = () => {
    return (
        <>

            <div
                className="page-header pt-14 pb-0 bg-slate-600 mb-10 text-slate-400 bg-fixed bg-center bg-cover bg-blend-color-burn shadow-gray-500 drop-shadow-lg ">
                <div className="container">
                    <div className="grid grid-cols-2 sm:gap-10">
                        <div className=" col-span-2 sm:col-span-1 animatedParent">
                            <p className="text-4xl pb-5 text-slate-100">About Us</p>
                            <p className="mt-6 text-justify">
                            Sākār, a word originated from Sanskrit, translates as "Turning Dreams into Reality"  Owing rightly to the parent word, the Sākār Foundation – restores hope in humanity by fulfilling dreams of goodness and welfare in society across domains of life. Housed and registered, in Simi Valley, California, USA, yet rolls out diverse outreach programs across the globe.
                            </p>
                        </div>
                        <div className="text-4xl col-span-2 sm:col-span-1 animatedParent" >
                            <img className="mt-0 -mb-24" src="/img/about.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="page-header px-8 bg-primaryDark">
                <div className="container">
                    <div className="grid grid-cols-2 sm:gap-10">
                        <div className="my-auto text-white col-span-2 sm:col-span-1 animatedParent">
                            <p className="heading" >About Us</p>
                            <p className="mt-6 text-justify">
                                At Sākār Foundation, we believe, we can solve problems only by solving the root cause. We encourage
                                children to actively involve
                                in activities for betterment of the society. We also make them learn Not only humans but even all living
                                beings including animals and plants are the part of <b>Nature&#39;s fabric</b> as we call it.
                            </p>
                        </div>
                        <div className="text-4xl my-auto text-white col-span-2 sm:col-span-1 animatedParent" >
                            <img className="mt-16 -mb-24" src="/img/about.png" alt="" />
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="section mt-16">
                <div className="container animatedParent" data--sequence="300">
                    <p className="heading text-primary animated animateOnce fadeInDownShort" data-id="1">Who we are</p>
                    <p className="mt-6 text-justify animated animateOnce fadeInUpShort" data-id="1">
                        Sākār Foundation is a brainchild of the founders, Keithan Pai and Keisha Pai, and extends out programs and projects to instil a sense of help, charity and belief in different strata of the society. As the quote goes, “Travel makes you view the world through another’s perspective”; Keithan and Keisha, grew a new lens to the worldly challenges as they kept visiting or were visited by relatives and friends across the world. This led them to experience and observe the socio-economic plight of many parts of society and was deeply moved to bring about a change. Coming from a place of volunteering, young minds set out to build a platform to help the world in need.

                    </p>


                </div>
            </div>

            <div className="section overflow-section bg-gray-200 mt-8">
                <div className="container">
                    <div className="grid grid-cols-2 sm:gap-10 mt-8">
                        <div className="col-span-2 sm:col-span-1 animatedParent" data-sequence="300">
                            <img className="-mb-20 an animated animateOnce fadeInLeftShort" data-id="1"
                                src="/img/what-we-do-sakar.png" alt="" />
                        </div>
                        <div className="col-span-2 sm:col-span-1 animatedParent" data-sequence="300">
                            <p className="heading text-primary mb-8 animated animateOnce fadeInRightShort" data-id="1">What we do</p>
                            <p className="text-justify animated animateOnce fadeInRightShort" data-id="2">
                                With a belief that every organism stands equal alongside us, we help make the world a better place to live by taking up two approaches. We primarily reach out to the ones in need through various structured projects called Sākār Spark. Secondly, we also design and initiate programs to tackle areas that we believe need the utmost focus and help.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="section mt-32 p-8 ">
                <div className="container"></div>
            </div>

            {/* <div className="section mt-32 p-8 mb-20">
                <div className="container">
                    <div className="grid grid-cols-2 sm:gap-10">
                        <div className="col-span-2 sm:col-span-1 animatedParent" data-sequence="300">
                            <p className="heading text-primary mb-8 animated animateOnce fadeInLeftShort" data-id="1">Our mission</p>
                            <p className="text-justify animated animateOnce fadeInLeftShort" data-id="2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta iaculis mi et convallis. Quisque
                                blandit viverra nulla, ut rutrum dolor auctor eu. Fusce maximus porta dolor, nec posuere tortor luctus
                                ac. Sed quis leo non nibh suscipit fringilla nec euismod diam. Quisque eget ante ligula. Sed ornare,
                                metus at sollicitudin gravida, quam lorem bibendum justo, in aliquam est arcu at dui.
                            </p>
                        </div>
                        <div className="col-span-2 sm:col-span-1 animatedParent" data-sequence="300">
                            <img className="-mb-20 animated animateOnce fadeInRightShort" data-id="1"
                                src="/img/students-community-work.png" alt="" />
                        </div>
                    </div>
                </div>
            </div> */}
        </>

        //     {/* <div className='bg-yellow-600 p-5 w-full'></div> */ }
        // {/* <pageBody></pageBody> */ }

    )
}

aboutPage.displayName = "About Page"

export default aboutPage;