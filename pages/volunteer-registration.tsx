import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { COUNTRIES } from '../helpers/countries';
import { STATES } from '../helpers/states';


const VolunteerRegistrationPage: React.FC = () => {
  const { control, register, handleSubmit, setValue, reset, formState: { errors } } = useForm<any>({
    defaultValues: {
      'Country': 'United States',
      'State / Province / Region': undefined
    }
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const selectedCountry = useWatch({
    name: 'Country',
    control
  });

  useEffect(() => {
    if (selectedCountry !== 'United States') {
      setValue('State / Province / Region', undefined);
    }
  }, [selectedCountry])


  const onSubmit = async data => {
    try {
      setLoading(true);
      await fetch("https://submit-form.com/OGJtewCw", {
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

      {/* <div className="page-header px-8 bg-primaryDark">
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
      </div> */}

      <div
        className="page-header py-14 bg-slate-600 mb-10 text-slate-400 bg-fixed bg-center bg-cover bg-blend-color-burn shadow-gray-500 drop-shadow-lg ">
        <div className="container">
          <p className="text-4xl pb-5 text-slate-100">Volunteer With Us</p>
          You can be a volunteer for Sākār Foundation and help us by being part of events we organize, or helping us
          with raising donations etc. We find our strength through our volunteers representing us globally and enabling
          us to carry out our operations with responsibility and sensibility.
        </div>
      </div>

      <div className="section mt-16">
        <div className="container animatedParent" data--sequence="300">
          <p className="heading text-primary animated animateOnce fadeInDownShort" data-id="1">Register</p>
          <p className="mt-6 text-justify animated animateOnce fadeInUpShort" data-id="1">
            By volunteering with us, you will become a vital part of our organization and you will make a real difference to the lives
            of many living beings. An opportunity that will not only develop your inter-personal skills, allow you to meet
            like-minded people; but will also be the most fulfilling and gratifying phase in your life that will echo with
            someone&#39;s happiness for years to come.
          </p>
        </div>
      </div>

      <div className="">
        <div className="container mb-20">
          <div id="formScript">
            {/* <iframe src="https://www.cognitoforms.com/f/WAaQ1CDJxkWEnADzJmGNbw/1" height="810"></iframe>
                        <script src="https://www.cognitoforms.com/f/iframe.js"></script> */}
            <form className="grid grid-cols-2 gap-4 my-3" onSubmit={handleSubmit(onSubmit)}>
              <input required type="text" placeholder="First Name" {...register("First Name", { required: true })} />
              <input required type="text" placeholder="Last Name" {...register("Last Name", { required: true })} />
              <input required type="tel" placeholder="Phone Number" {...register("Phone Number", { required: true })} />
              {/* <select placeholder="Blood Group" required {...register("Blood Group", { required: true })}>
                <option value="A positive (A+)">A positive (A+)</option>
                <option value="A negative (A-)">A negative (A-)</option>
                <option value="B positive (B+)">B positive (B+)</option>
                <option value="B negative (B-)">B negative (B-)</option>
                <option value="O positive (O+)">O positive (O+)</option>
                <option value="O negative (O-)">O negative (O-)</option>
                <option value="AB positive (AB+)">AB positive (AB+)</option>
                <option value="AB negative (AB-)">AB negative (AB-)</option>
              </select> */}
              {/* <input required type="date" placeholder="Date Of Birth" {...register("Date Of Birth", { required: true })} /> */}
              {/* <div className="grid col-span-2 grid-cols-2 gap-4"> */}
              <input required type="text" placeholder="Address Line 1" {...register("Address Line 1", { required: true })} />
              <input type="text" placeholder="Address Line 2" {...register("Address Line 2", {})} />
              <input required type="text" placeholder="City" {...register("City", { required: true })} />
              <select placeholder="Country" required {...register("Country", { required: true })}>
                {COUNTRIES.map(country => <option key={country} value={country}>{country}</option>)}
              </select>

              {(selectedCountry !== 'United States') ? (
                <input required type="text" placeholder="State / Province / Region" {...register("State / Province / Region", { required: true })} />
              ) : null}


              {(selectedCountry === 'United States') ? (
                <select placeholder="State / Province / Region" required {...register("State / Province / Region", { required: true })}>
                  {STATES.map(state => <option key={state} value={state}>{state}</option>)}
                </select>
              ) : null}

              <textarea className='col-span-2' required placeholder="Your interests" {...register("Interests", { required: true })} />


              {/* </div> */}
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
    </>

    //     {/* <div className='bg-yellow-600 p-5 w-full'></div> */ }
    // {/* <pageBody></pageBody> */ }

  )
}

VolunteerRegistrationPage.displayName = "Register as a Volunteer"

export default VolunteerRegistrationPage;