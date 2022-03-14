import * as React from 'react'


const volunteerRegistrationPage: React.FC = () => {
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
                            <p className="heading animated animateOnce fadeInDownShort" data-id="1">Volunteer With Us</p>
                            <p className="mt-6 text-justify animated animateOnce fadeInLeftShort" data-id="2">
                                You can be a volunteer for Sākār Foundation and help us by being part of events we organize, or helping us
                                with raising donations etc. We find our strength through our volunteers representing us globally and enabling
                                us to carry out our operations with responsibility and sensibility.
                            </p>
                        </div>
                        <div className="text-4xl my-auto text-white col-span-2 sm:col-span-1 animatedParent text-center" data--sequence="300">
                            <img className="mx-auto mt-16 -mb-2 h-72 w-auto block ' animated animateOnce fadeInRightShort" data-id="1" src="/img/volunteering.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="section mt-16">
                <div className="container animatedParent" data--sequence="300">
                    <p className="heading text-primary animated animateOnce fadeInDownShort" data-id="1">Register</p>
                    <p className="mt-6 text-justify animated animateOnce fadeInUpShort" data-id="1">
                        By volunteering with us, you will become a vital part of our organization and you will make a real difference to the lives
                        of many living beings. An opportunity that will not only develop your inter-personal skills, allow you to meet
                        like-minded people; but will also be the most fulfilling and gratifying phase in your life that will echo with
                        someone's happiness for years to come.
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

volunteerRegistrationPage.displayName = "Register as a Volunteer"

export default volunteerRegistrationPage;