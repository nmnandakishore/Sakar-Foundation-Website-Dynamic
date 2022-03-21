import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { COUNTRIES } from '../helpers/countries';


const NewFundraiserPage: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const onSubmit = async data => {
    try {
      setLoading(true);
      await fetch("https://submit-form.com/UF099rJl", {
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

            <div className="section">
                <div className="container">
                    <div id="formScript">
                        {/* <iframe src="https://www.cognitoforms.com/f/WAaQ1CDJxkWEnADzJmGNbw/1" height="810"></iframe>
                        <script src="https://www.cognitoforms.com/f/iframe.js"></script> */}
                        <form className="grid grid-cols-2 gap-4 my-3" onSubmit={handleSubmit(onSubmit)}>
                          <input required type="text" placeholder="First Name" {...register("First Name", { required: true })} />
                          <input required type="text" placeholder="Last Name" {...register("Last Name", { required: true })} />
                          <input required type="tel" placeholder="Phone Number" {...register("Phone Number", { required: true })} />
                          <input required type="email" placeholder="Email" {...register("Email", { required: true })} />
                          <select placeholder="Employment Status" {...register("Employment Status")}>
                            <option value="Student">Student</option>
                          </select>
                          <input required type="date" placeholder="Date Of Birth" {...register("Date Of Birth", { required: true })} />
                          <input required type="text" placeholder="Cause for which you want to raise money" {...register("Cause", { required: true })} />
                          <input required type="number" placeholder="Target Amount (In USD)" {...register("Target Amount (In USD)", { required: true })} />
                          <div className="grid col-span-2 grid-cols-2 gap-4">
                            <input required type="text" placeholder="Address Line 1" {...register("Address Line 1", { required: true })} />
                            <input type="text" placeholder="Address Line 2" {...register("Address Line 2", {})} />
                            <input required type="text" placeholder="City" {...register("City", { required: true })} />
                            <input required type="text" placeholder="State / Province / Region" {...register("State / Province / Region", { required: true })} />
                            <select placeholder="Country" required {...register("Country", { required: true })}>
                              { COUNTRIES.map(country => <option key={country} value={country}>{country}</option>)}
                            </select>
                          </div>
                          <div className="col-span-full grid justify-items-center">
                            <button disabled={loading} className={`${loading ? 'animate-pulse' : ''} w-full md:w-1/2 bg-primary hover:bg-primaryDark text-white font-bold content-center py-2 px-4 rounded`} type="submit">Submit</button>
                          </div>
                        </form>
                        {msg ? (
                          <div className="py-3 px-5 mb-4 bg-gray-100 text-gray-900 rounded-md text-sm border border-gray-200" role="alert">
                              {msg}
                          </div>
                        ): null}
                    </div>

                </div>
            </div>
        </>

        //     {/* <div className='bg-yellow-600 p-5 w-full'></div> */ }
        // {/* <pageBody></pageBody> */ } 

    )
}

NewFundraiserPage.displayName = "New Fundraiser"

export default NewFundraiserPage;