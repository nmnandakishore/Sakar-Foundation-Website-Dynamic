import * as React from 'react'
import { client } from '../helpers/data-fetcher';

interface IpartnersPage {
    partners: any
}



const partnersPage: React.FC<IpartnersPage> = ({ partners = null }) => {

    let partnersArr: Array<any> = partners ?.items ?? [];
    console.log(partnersArr);

    return (
        <>
            {/* <div
                className="page-header px-8 bg-gradient-to-b from-primaryDark to-primaryDark bg-fixed bg-center bg-cover bg-blend-color-burn h-80 ">
                <div className="container">
                    <div className="grid grid-cols-2 sm:gap-10">
                        <div className="my-auto text-white col-span-2 sm:col-span-1">
                            <div className="bg-gradient-to-b from-primary to-primaryDark mt-32 -mb-32 p-14">
                                <p className="text-4xl">Our Partners</p>
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
                    <p className="text-4xl pb-5 text-slate-100">Our Partners</p>
                    A strong system is what we need to give out the wings of reality to any dream! Collaborate with us!
                </div>
            </div>

            <div className="section bg-gray-200 my-40 ">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-10">
                        {
                            partnersArr.map((partner, index) => {
                                let fields: any = partner.fields
                                return (
                                    <div className=" bg-white" key={partner.sys.id}>
                                        <div className="m-2 h-32 min-w-max bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${fields.logo.fields.file.url})` }}>

                                        </div>
                                        <h3 className='mx-2 mb-3 text-center text-base font-bold text-primary'>{fields.name}</h3>
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

partnersPage.displayName = "Partners";
export default partnersPage;


export async function getServerSideProps() {
    // Fetch data from external API

    let clientObj = client();

    // const res: any = await clientObj.getAssets();
    const partners: any = await clientObj.getEntries({
        content_type: 'partners'
    });

    return {
        props: { partners }
    }

}