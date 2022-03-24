import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


const PontactPage: React.FC = () => {
    // React.useEffect(() => {
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
    // }, []);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState<string | null>(null);
    const onSubmit = async data => {
        try {
            setLoading(true);
            await fetch("https://submit-form.com/YAX5WVOQ", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            });
            setLoading(false);
            setMsg('Your submission has been recieved')
            reset();
        } catch (err) {
            console.error(err);
            setMsg('Oops! Could not submit details. Check your internet connection')
        } finally {
            setLoading(false);
        }
    }


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

            <div className="section overflow-section  mt-8 mb-20">
                <div className="container">
                    <div id="formScript">
                        <div id="formScript">
                            <form className="grid grid-cols-2 gap-4 my-3" onSubmit={handleSubmit(onSubmit)}>
                                <input required type="text" placeholder="Name" {...register("First Name", { required: true })} />
                                <input required type="tel" placeholder="Phone Number" {...register("Phone Number", { required: true })} />
                                <input required type="email" placeholder="Email" {...register("Email", {})} />
                                <textarea required placeholder="Your message" {...register("Cause", { required: true })} />
                                <div className="col-span-full grid justify-items-center">
                                    <button disabled={loading} className={`${loading ? 'animate-pulse' : ''} w-full md:w-1/2 bg-primary hover:bg-primaryDark text-white font-bold content-center py-2 px-4 rounded`} type="submit">Submit</button>
                                </div>
                            </form>
                            {msg ? (
                                <div className="py-3 px-5 mb-4 bg-gray-100 text-gray-900 rounded-md text-sm border border-gray-200" role="alert">
                                    {msg}
                                </div>
                            ) : null}
                        </div>
                    </div>

                </div>
            </div>
        </>

        //     {/* <div className='bg-yellow-600 p-5 w-full'></div> */ }
        // {/* <pageBody></pageBody> */ } 

    )
}

PontactPage.displayName = "New Fundraiser"

export default PontactPage;