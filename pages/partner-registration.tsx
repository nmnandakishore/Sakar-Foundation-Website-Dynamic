import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { COUNTRIES } from '../helpers/countries';


const PartnerRegistrationPage: React.FC = () => {
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
              <p className="heading animated animateOnce fadeInDownShort" data-id="1">Partner With Us</p>
              <p className="mt-6 text-justify animated animateOnce fadeInLeftShort" data-id="2">
                Corporate support can take many forms, some of which are listed below.
                If you’ve got an idea about how your organisation can work with us, please fill in the form at the bottom of the page.
                We look forward to working with you!
              </p>
            </div>
            <div className="text-4xl my-auto text-white col-span-2 sm:col-span-1 animatedParent text-center" data--sequence="300">
              <img className="mx-auto mt-16 -mb-2 h-72 w-auto block ' animated animateOnce fadeInRightShort" data-id="1" src="/img/partnership.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="section mt-16 ">
        <div className="container animatedParent" data--sequence="300">
          <p className="heading text-primary animated animateOnce fadeInDownShort" data-id="1">How can we partner with each other?</p>
          <p className="mt-6 text-justify animated animateOnce fadeInUpShort" data-id="1">
            <b className='font-bold'>Well, these are some of the ways how we can work together. </b>
          </p>
          <br /><br />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 animatedParent" data--sequence="300">
            <div className='col bg-gray-100 p-4 animated animateOnce fadeInDownShort' data-id="1">
              <div className="grid grid-cols-12 h-full">
                <div className="col col-span-2">
                  <div className="table w-full h-full">
                    <div className="table-cell text-center align-middle">
                      <div className="items-center h-12 w-12 text-white align-middle m-auto">
                        <svg x="0px" y="0px"
                          viewBox="0 0 369.946 369.946"
                        // style={{ enableBackground: 'new 0 0 369.946 369.946' }}
                        >
                          <g><path style={{ fill: '#010233' }} d="M184.973,0C82.981,0,0,82.975,0,184.973s82.981,184.973,184.973,184.973s184.973-82.975,184.973-184.973S286.965,0,184.973,0z M150.777,263.873l-66.125-66.125l8.437-8.437l57.688,57.688l125.561-125.561l8.437,8.437L150.777,263.873z" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-span-10 text-left">
                  <h5 className="text-lg  leading-6 text-gray-900 dark:text-white font-bold">
                    Fundraising or Charity of the Year partnerships:
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                    We help you come up with a calendar of exciting events to keep your staff motivated, and tailor our partnership for your organisation.
                  </p>
                </div>
              </div>
            </div>

            <div className='col bg-gray-100 p-4 animated animateOnce fadeInDownShort' data-id="2">
              <div className="grid grid-cols-12 h-full">
                <div className="col col-span-2">
                  <div className="table w-full h-full">
                    <div className="table-cell text-center align-middle">
                      <div className="items-center h-12 w-12 text-white align-middle m-auto">
                        <svg x="0px" y="0px"
                          viewBox="0 0 369.946 369.946"
                        // style={{ enableBackground: 'new 0 0 369.946 369.946' }}
                        >
                          <g><path style={{ fill: '#010233' }} d="M184.973,0C82.981,0,0,82.975,0,184.973s82.981,184.973,184.973,184.973s184.973-82.975,184.973-184.973S286.965,0,184.973,0z M150.777,263.873l-66.125-66.125l8.437-8.437l57.688,57.688l125.561-125.561l8.437,8.437L150.777,263.873z" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-span-10 text-left">
                  <h5 className="text-lg  leading-6 text-gray-900 dark:text-white font-bold">
                    Marketing Partnerships:
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                    Include a donation to Sākār foundation when someone buys your product or service.
                  </p>
                </div>
              </div>
            </div>

            <div className='col bg-gray-100 p-4 animated animateOnce fadeInDownShort' data-id="3">
              <div className="grid grid-cols-12 h-full">
                <div className="col col-span-2">
                  <div className="table w-full h-full">
                    <div className="table-cell text-center align-middle">
                      <div className="items-center h-12 w-12 text-white align-middle m-auto">
                        <svg x="0px" y="0px"
                          viewBox="0 0 369.946 369.946"
                        // style={{ enableBackground: 'new 0 0 369.946 369.946' }}
                        >
                          <g><path style={{ fill: '#010233' }} d="M184.973,0C82.981,0,0,82.975,0,184.973s82.981,184.973,184.973,184.973s184.973-82.975,184.973-184.973S286.965,0,184.973,0z M150.777,263.873l-66.125-66.125l8.437-8.437l57.688,57.688l125.561-125.561l8.437,8.437L150.777,263.873z" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-span-10 text-left">
                  <h5 className="text-lg  leading-6 text-gray-900 dark:text-white font-bold">
                    Event Sponsorship:
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                    Connect with new audiences, and engage staff, customers and clients, by sponsoring an event organized by us.
                  </p>
                </div>
              </div>
            </div>


            <div className='col bg-gray-100 p-4 animated animateOnce fadeInDownShort' data-id="4">
              <div className="grid grid-cols-12 h-full">
                <div className="col col-span-2">
                  <div className="table w-full h-full">
                    <div className="table-cell text-center align-middle">
                      <div className="items-center h-12 w-12 text-white align-middle m-auto">
                        <svg x="0px" y="0px"
                          viewBox="0 0 369.946 369.946"
                        // style={{ enableBackground: 'new 0 0 369.946 369.946' }}
                        >
                          <g><path style={{ fill: '#010233' }} d="M184.973,0C82.981,0,0,82.975,0,184.973s82.981,184.973,184.973,184.973s184.973-82.975,184.973-184.973S286.965,0,184.973,0z M150.777,263.873l-66.125-66.125l8.437-8.437l57.688,57.688l125.561-125.561l8.437,8.437L150.777,263.873z" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-span-10 text-left">
                  <h5 className="text-lg  leading-6 text-gray-900 dark:text-white font-bold">
                    Gifts in Kind:
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                    You can support any of our cause by donating goods, services or professional advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="block text-center pt-6 animated animateOnce fadeInUpShort w-100" data-id="6">
            <Link href="/partners">
              <a className="arrow-btn text-primary font-bold inline-block">Our partners</a>
            </Link>
          </div>

        </div>
      </div >


      <div className="section  bg-gray-300">
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

      <div className="section">
        <div className="container">
          <div id="formScript">
            {/* <iframe src="https://www.cognitoforms.com/f/WAaQ1CDJxkWEnADzJmGNbw/1" height="810"></iframe>
                        <script src="https://www.cognitoforms.com/f/iframe.js"></script> */}
            <form className="grid grid-cols-2 gap-4 my-3" onSubmit={handleSubmit(onSubmit)}>
              <input required type="text" placeholder="First Name" {...register("First Name", { required: true })} />
              <input required type="text" placeholder="Last Name" {...register("Last Name", { required: true })} />
              <input required type="text" placeholder="Company Name" {...register("Company Name", { required: true })} />
              <input type="url" placeholder="Website" {...register("Website")} />
              <input required type="tel" placeholder="Phone Number" {...register("Phone Number", { required: true })} />
              
              <input required type="email" placeholder="Work Email" {...register("Work Email", {})} />
              <div className="grid col-span-2 grid-cols-2 gap-4">
                <input required type="text" placeholder="Office Address Line 1" {...register("Address Line 1", { required: true })} />
                <input type="text" placeholder="Office Address Line 2" {...register("Address Line 2", {})} />
                <input required type="text" placeholder="City" {...register("City", { required: true })} />
                <input required type="text" placeholder="State / Province / Region" {...register("State / Province / Region", { required: true })} />
                <select placeholder="Country" required {...register("Country", { required: true })}>
                  {COUNTRIES.map(country => <option key={country} value={country}>{country}</option>)}
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
            ) : null}
          </div>

        </div>
      </div>
    </>

    //     {/* <div className='bg-yellow-600 p-5 w-full'></div> */ }
    // {/* <pageBody></pageBody> */ }

  )
}

PartnerRegistrationPage.displayName = "Register as a Volunteer"

export default PartnerRegistrationPage;