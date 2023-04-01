import * as React from 'react'
import { client } from '../helpers/data-fetcher';

interface IleadershipPage {
    leaders: any
}



const leadershipPage: React.FC<IleadershipPage> = ({ leaders = null }) => {

    let leadersArr: Array<any> = leaders ?.items ?? [];


    let elevatedLeaders, nonElevatedLeaders = [];

    elevatedLeaders = leadersArr.filter(function (leader) {
        return leader.fields.elevated;
    });

    nonElevatedLeaders = leadersArr.filter(function (leader) {
        return !(leader.fields.elevated);
    });

    console.log(leadersArr);
    console.log({ elevatedLeaders })
    console.log({ nonElevatedLeaders })


    return (
        <>

            {/* <div
                className="page-header px-8 bg-gradient-to-b from-primaryDark to-primaryDark bg-fixed bg-center bg-cover bg-blend-color-burn h-80 ">
                <div className="container">
                    <div className="grid grid-cols-2 sm:gap-10">
                        <div className="my-auto text-white col-span-2 sm:col-span-1">
                            <div className="bg-gradient-to-b from-primary to-primaryDark mt-32 -mb-32 p-14">
                                <p className="text-4xl">Leadership</p>
                                <p className="mt-6 text-justify">
                                    Sākār is the outcome of a vision based on experience of it&#39;s founders, Keithan Pai and Keisha Pai.
                                    The Sākār leasership always strives to thrive through raising the global society without any barriors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div
                className="page-header py-14 bg-slate-600 mb-10 text-slate-400 bg-fixed bg-center bg-cover bg-blend-color-burn shadow-gray-500 drop-shadow-lg ">
                <div className="container">
                    <p className="text-4xl pb-5 text-slate-100">Leadership</p>
                    Sākār is the outcome of a vision based on the experience of its founders, Keithan Pai and Keisha Pai. The Sākār leadership always The torchbearer founders of Sākār have their distinct field of focus but are united by the idea of welfare. Together they help in uplifting different strata of society and tackling barriers. 
                </div>
            </div>

            <div className="section bg-white">
                <div className="container">

                    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10">

                        {
                            elevatedLeaders.map((leader, index) => {
                                let fields: any = leader.fields
                                return (
                                    <div className="grid grid-cols-1 py-6 lg:py-0 lg:grid-cols-4" key={leader.sys.id}>
                                        <div className="text-center">
                                            <img className="rounded-full object-cover mx-auto lg:my-9 w-24 h-24 lg:w-20 lg:h-20" src={fields ?.photograph ?.fields ?.file ?.url ?? '/img/placeholder.jpg'} alt="   " />
                                        </div>
                                        <div className="justify-center mt-5 sm:mt-0 sm:p-5 lg:col-span-3 text-center lg:text-left">
                                            <p className="text-lg font-bold">{fields.name}</p>
                                            <p className="mb-4 text-xs text-gray-400 font-bold">{fields.designation}</p>
                                            <p className="mb-4 text-sm tracking-wide text-gray-400 max-h-[200px] overflow-hidden">
                                                {fields.about}
                                            </p>
                                            <div className="text-center lg:text-left lg:mx-auto">
                                                {(fields.twittwrLink) ? (
                                                    <a href={fields.twittwrLink} className="relative inline-block mx-3 lg:mr-3 text-gray-400 hover:text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                                            <path
                                                                d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                                                            ></path>
                                                        </svg>
                                                    </a>
                                                ) : null}
                                                {(fields.facebookLink) ? (
                                                    <a href={fields.facebookLink} className="relative inline-block mx-3 lg:mr-3 text-gray-400 hover:text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                                            <path
                                                                d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                                                            ></path>
                                                        </svg>
                                                    </a>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }


                    </div>
                </div>
            </div>

            <div className="section bg-gray-200 my-20">
                <div className="container">
                    <p className="text-4xl pb-5 text-primary">Mentors</p>
                    <p className="pb-5">
                        The kindling spark of hope and charity in our Leaderhsip panel, is given a specific direction and momentum with the expertise and cognitive ingenuity of our eminent suite of mentors.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 py-10">
                        {
                            nonElevatedLeaders.map((leader, index) => {
                                let fields: any = leader.fields
                                return (
                                    <div className="grid grid-cols-4 sm:grid-cols-3 my-3 sm:my-0" key={leader.sys.id}>
                                        <div className="relative max-h-full text-center">
                                            <img className="w-20 h-20 rounded-full object-cover" src={fields ?.photograph ?.fields ?.file ?.url ?? '/img/placeholder.jpg'} alt="   " />
                                        </div>
                                        <div className="justify-center mt-1 p-5 col-span-3 sm:col-span-2">
                                            <p className="text-lg font-bold text-primary">{fields.name}</p>
                                            {/* <p className="mb-4 text-xs text-gray-800 font-bold">{fields.designation}</p> */}
                                            {/* <p className="mb-4 text-sm tracking-wide text-gray-800">
                                                {fields.about}
                                            </p> */}
                                            <div className="items-center space-x-3">
                                                {(fields.twittwrLink) ? (
                                                    <a href={fields.twittwrLink} className="text-gray-600  hover:text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                                            <path
                                                                d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                                                            ></path>
                                                        </svg>
                                                    </a>
                                                ) : null}
                                                {(fields.facebookLink) ? (
                                                    <a href={fields.facebookLink} className="text-gray-600  hover:text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                                            <path
                                                                d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                                                            ></path>
                                                        </svg>
                                                    </a>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>



        </>

    )
}

leadershipPage.displayName = "Empty Component";
export default leadershipPage;


export async function getServerSideProps() {
    // Fetch data from external API

    let clientObj = client();

    // const res: any = await clientObj.getAssets();
    const leaders: any = await clientObj.getEntries({
        content_type: 'leadership'
    });

    return {
        props: { leaders }
    }

}