import * as React from 'react'


const newFundraiserPage: React.FC = () => {
    React.useEffect(() => {
        // <script src="https://www.cognitoforms.com/f/seamless.js" data-key="WAaQ1CDJxkWEnADzJmGNbw" data-form="1"></script>

        // const script = document.createElement('script');
        // script.src = "https://www.cognitoforms.com/f/seamless.js";
        // script.async = true;
        // script.dataset.key = "WAaQ1CDJxkWEnADzJmGNbw"
        // script.dataset.form = "1"
        // // script.onload = () => this.scriptLoaded();


        // document.querySelector('#formScript').appendChild(script);

        // return () => {
        //     document.querySelector('#formScript').removeChild(script);
        // }
    }, []);


    return (
        <>

            <div className="page-header px-8 bg-primaryDark">
                <div className="container">
                    <div className="grid grid-cols-2 sm:gap-10">
                        <div className="my-auto text-white col-span-2 sm:col-span-1 animatedParent" data-sequence="300">
                            <p className="heading animated animateOnce fadeInDownShort" data-id="1">Contact Us</p>
                            <p className="mt-6 text-justify animated animateOnce fadeInLeftShort" data-id="2">
                                Your feedback and support is important to us.
                            </p>
                        </div>
                        <div className="text-4xl my-auto text-white col-span-2 sm:col-span-1 animatedParent text-center" data--sequence="300">
                            <img className="mx-auto mt-16 -mb-36 h-auto w-64 block' animated animateOnce fadeInRightShort" data-id="1" src="/img/contact.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container animatedParent" data--sequence="300">
                    <p className="heading text-primary animated animateOnce fadeInDownShort" data-id="1">Reach us at</p>
                    <p className="mt-6 text-justify animated animateOnce fadeInUpShort" data-id="1">
                        2775 TAPO ST SUITE 204, SIMI VALLEY, CA, 93065,+1 (805) 583-6700
                    </p>
                </div>
            </div>


            <div className="section">
                <div className="container animatedParent" data--sequence="300">
                    <p className="heading text-primary animated animateOnce fadeInDownShort" data-id="1">Write to us</p>
                    <p className="mt-6 text-justify animated animateOnce fadeInUpShort" data-id="1">

                    </p>
                </div>
            </div>

            <div className="section overflow-section  mt-8 -mb-20">
                <div className="container">
                    <div id="formScript">
                        {/* <iframe src="https://www.cognitoforms.com/f/WAaQ1CDJxkWEnADzJmGNbw/1" height="810"></iframe>
                        <script src="https://www.cognitoforms.com/f/iframe.js"></script> */}
                    </div>

                </div>
            </div>
        </>

        //     {/* <div className='bg-yellow-600 p-5 w-full'></div> */ }
        // {/* <pageBody></pageBody> */ } 

    )
}

newFundraiserPage.displayName = "New Fundraiser"

export default newFundraiserPage;