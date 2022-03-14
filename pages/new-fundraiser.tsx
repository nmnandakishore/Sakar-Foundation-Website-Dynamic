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
                            <p className="heading animated animateOnce fadeInDownShort" data-id="1">Start your own fundraiser</p>
                            <p className="mt-6 text-justify animated animateOnce fadeInLeftShort" data-id="2">
                                Start your campaign, and then share your fundraiser far and wide. We make it incredibly easy to spread the word through social media and email.
                            </p>
                        </div>
                        <div className="text-4xl my-auto text-white col-span-2 sm:col-span-1 animatedParent text-center" data--sequence="300">
                            <img className="mx-auto mt-16 -mb-2 h-72 w-auto block ' animated animateOnce fadeInRightShort" data-id="1" src="/img/fundraise.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="section mt-16">
                <div className="container animatedParent" data--sequence="300">
                    <p className="heading text-primary animated animateOnce fadeInDownShort" data-id="1">Create</p>
                    <p className="mt-6 text-justify animated animateOnce fadeInUpShort" data-id="1">
                        Please keep fundraiser names clear, short and make use of very simple english words and phrases. This is the key to
                        create a good fundraiser.
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