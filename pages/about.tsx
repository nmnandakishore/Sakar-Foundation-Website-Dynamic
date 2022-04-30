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
                                At Sākār Foundation, we believe, we can solve problems only by solving the root cause. We encourage
                                children to actively involve
                                in activities for betterment of the society. We also make them learn Not only humans but even all living
                                beings including animals and plants are the part of <b>Nature&#39;s fabric</b> as we call it.
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
                        Keithan and Keisha born in and Indian American family and have been volunteering for different causes from the age of 6.
                        As their family keeps visiting their friends and relatives around the world, they got a chance to visit many economically backward and growing countries.
                        At such a young age, they could see the differance between their society and others. This made them to realize the desparate need of help
                        at various levels of backwardand growing societies.

                        This made them think, to have a platform wherein they could help all the stakeholder of echosystem. i.e, Humans, Animals and Plants.
                        Sākār Foundation is the outcome of that
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
                                Sākār foundation works in two different ways. One is to reach out the needy thr
                                ough projects caried out under
                                Sākār Spark. And the other is, we aften takeup many initiatives ourselves for causes which need more attention to be given.
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