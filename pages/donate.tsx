import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { client } from '../helpers/data-fetcher';
import { getClientIp } from 'request-ip'
import axios from 'axios';
import { Helmet } from "react-helmet";

import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
// import { loadScript } from "@paypal/paypal-js";




const ContactPage: React.FC<{ siteInfo: any, region: string }> = ({ siteInfo = null, region }) => {
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

    // Paypal integration

    // loadScript({ "client-id": "AfnLgyU-E51Em5YrNn0t_XBHlmcYtq9gmd3ElsQqd24CCR9xSR3xRPC5KFmSY7_I6Gmt5QK3kzyfYnlo" })
    //     .then((paypal) => {
    //         if (region !== 'IND') {
    //             paypal
    //                 .Buttons({
    //                     style: {
    //                         layout: 'vertical',
    //                         color: 'blue',
    //                         shape: 'rect',
    //                         enableunding: '',
    //                         label: 'paypal'
    //                     }
    //                 })
    //                 .render("#payment-wrapper")
    //                 .catch((error) => {
    //                     console.error("failed to render the PayPal Buttons", error);
    //                 });
    //         }
    //     })
    //     .catch((error) => {
    //         console.error("failed to load the PayPal JS SDK script", error);
    //     });

    useEffect(() => {

        // var PayPal;
        // const script = document.createElement('script');
        // script.src = 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js';
        // script.async = true;
        // document.body.appendChild(script);



        // return script;
        // window.onload = () => {
        if ((window as any).PayPal !== undefined) {

            (window as any).PayPal.Donation.Button({
                env: "sandbox",
                hosted_button_id: "K4WTF6ACC2PHU",
                image: {
                    src: "https://pics-v2.sandbox.paypal.com/00/s/NzI0MzViYmItMDZiMS00Nzk5LTg2ZGQtMzRlNWY4ODM5NzZi/file.PNG",
                    alt: "Donate with PayPal button",
                    title: "PayPal - The safer, easier way to pay online!",
                }
            }).render('#donate-button');
        }

        // }
    }, [])



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

            {/* <script src=""> */}

            <div
                className="page-header py-14 bg-slate-600 mb-10 text-slate-400 bg-fixed bg-center bg-cover bg-blend-color-burn shadow-gray-500 drop-shadow-lg ">
                <div className="container">
                    <p className="text-4xl pb-5 text-slate-100">Donate Us</p>
                    Support in any form can make a huge difference! Be that support to us, as we plan out ideas to bring a difference!
                </div>
            </div>

            <div className='section'>
                <div className="container grid grid-cols-2 sm:gap-10">
                    <div className="col-span-2 sm:col-span-1 hidden sm:inline animatedParent max-h-screen overflow-hidden">
                        <img className="h-auto w-full block' animated animateOnce fadeInRightShort " data-id="1" src="/img/donate.png" alt="" />
                    </div>
                    <div className="col-span-1 sm:col-span-1">
                        <div className="container animatedParent" data--sequence="300">
                            <p className="heading text-primary animated animateOnce fadeInDownShort" data-id="1">Donate Online</p>
                            <p className="mt-6 animated animateOnce fadeInUpShort" data-id="1">
                                All your donation will go towards our work to uplift lives of Humans, Animals and Plants that need help.
                                <br /><br />
                                Alternatively you can donate monthly to sakar foundation. This creates a reliable source of funding year-round to
                                work on our causes.

                                <br /><br />


                            </p>
                            <div id="payment-wrapper">
                                <div id="donate-button-container">
                                    <div id="donate-button"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

        //     {/* <div className='bg-yellow-600 p-5 w-full'></div> */}
        // {/* <pageBody></pageBody> */}

    )
}

ContactPage.displayName = "Contact Us"

export default ContactPage;

export async function getServerSideProps({ req }) {


    //Get IP from request
    const ip = getClientIp(req);


    //Check location data from external API
    const { data } = await axios.get('https://ipapi.co/' + ip + '/json/');

    let region = 'USA';
    if (data ?.country_code_iso3 && data ?.country_code_iso3 === 'IND') {
        region = data.country_code_iso3;
    }

    // region = "IND"; //To remove


    // Fetch data from external API
    let clientObj = client();

    // const res: any = await clientObj.getAssets();
    const siteInfo: any = await clientObj.getEntries({
        content_type: 'siteInfo'
    });

    return {
        props: { siteInfo, region }
    }

}