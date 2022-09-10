import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { client } from '../helpers/data-fetcher';


const ContactPage: React.FC<{ siteInfo: any }> = ({ siteInfo = null }) => {
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
    const [msgType, setMsgType] = useState<string | null>(null);
    const onSubmit = async data => {
        try {
            setLoading(true);
            // await fetch("https://submit-form.com/YAX5WVOQ", {
            await fetch("api/submit-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    formName: "Contact Form",
                    data: data
                }),
            }).then((res) => {
                if (!res.ok) {
                    setMsg('Oops! something went wrong. Please retry later.')
                } else {
                    res.json().then((response) => {
                        setMsgType(response.type)
                        setMsg(JSON.stringify(response.message))
                        setLoading(false);
                    });
                    // setMsg(JSON.stringify(response));
                }
            });
            // setMsg('Your submission has been recieved')
            reset();
        } catch (err) {
            console.error(err);
            setMsg('Oops! Could not submit details. Check your internet connection')
        } finally {
            setLoading(false);
        }
    }

    console.log({ siteInfo })

    return (
        <>

            {/* <div className="page-header px-8 bg-primaryDark">
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
            </div> */}

            <div
                className="page-header py-14 bg-slate-600 mb-10 text-slate-400 bg-fixed bg-center bg-cover bg-blend-color-burn shadow-gray-500 drop-shadow-lg ">
                <div className="container">
                    <p className="text-4xl pb-5 text-slate-100">Contact Us</p>
                    Your feedback and support is important to us.
                </div>
            </div>

            <div className='section'>
                <div className="container grid grid-cols-2 sm:gap-10">
                    <div className="col-span-1 sm:col-span-1">
                        <div className={`container animatedParent section ${(siteInfo.items[0].fields.address == " " && siteInfo.items[0].fields.telephoneNumber == " ") ? 'hidden' : ''}`}
                            data--sequence="300">
                            <p className="heading text-primary animated animateOnce fadeInDownShort" data-id="1">Reach us at</p>
                            <p className="mt-6 text-justify animated animateOnce fadeInUpShort" data-id="1">
                                {siteInfo.items[0].fields.address}
                                <br />
                                {siteInfo.items[0].fields.telephoneNumber}
                            </p>
                        </div>

                        <div className="container animatedParent" data--sequence="300">
                            <p className="heading text-primary animated animateOnce fadeInDownShort" data-id="1">Write to us</p>
                            <p className="mt-6 text-justify animated animateOnce fadeInUpShort" data-id="1">

                            </p>

                            <div id="formScript">
                                <div id="formScript">
                                    <form className="grid grid-cols-1 gap-4 my-3" onSubmit={handleSubmit(onSubmit)}>
                                        <input required type="text" placeholder="Name" {...register("First Name", { required: true })} />
                                        <input required type="tel" placeholder="Phone Number" {...register("Phone Number", { required: true })} />
                                        <input required type="email" placeholder="Email" {...register("Email", {})} />
                                        <textarea required placeholder="Your message" {...register("Cause", { required: true })} />
                                        <div className="col-span-full grid justify-items-center">
                                            <button disabled={loading} className={`${loading ? 'animate-pulse' : ''} w-full bg-primary hover:bg-primaryDark text-white font-bold content-center py-2 px-4 rounded`} type="submit">Submit</button>
                                        </div>
                                    </form>
                                    {msg ? (
                                        <div className={`${(msgType == 'success') ? 'bg-green-300 text-green-900 border-green-700' : ''} ${(msgType == 'error') ? 'bg-red-300 text-red-900 border-red-700' : ''} py-3 px-5 mb-4 rounded-md text-sm border`} role="alert">
                                            {msg}
                                        </div>
                                    ) : null}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-span-2 sm:col-span-1 hidden sm:inline animatedParent max-h-screen overflow-hidden">
                        <img className="h-auto w-full block' animated animateOnce fadeInRightShort " data-id="1" src="/img/contact.jpg" alt="" />
                    </div>
                </div>
            </div>


        </>

        //     {/* <div className='bg-yellow-600 p-5 w-full'></div> */ }
        // {/* <pageBody></pageBody> */ } 

    )
}

ContactPage.displayName = "Contact Us"

export default ContactPage;

export async function getServerSideProps() {
    // Fetch data from external API

    let clientObj = client();

    // const res: any = await clientObj.getAssets();
    const siteInfo: any = await clientObj.getEntries({
        content_type: 'siteInfo'
    });

    return {
        props: { siteInfo }
    }

}