import Link from 'next/link';
import * as React from 'react'
import { client } from '../helpers/data-fetcher';


interface InewsPageProps {
    news: any
}

const fundraisersPage: React.FC<InewsPageProps> = ({ news = null }) => {
    let fundraisers = news ?.items ?? [];
    // let highlightedNewsItem = fundraisers[0];

    // console.log({ highlightedNewsItem });
    console.log({ newsItems: fundraisers });
    return (
        <>


            {/* <div className="page-header px-8 bg-gradient-to-b from-primaryDark to-primaryDark bg-fixed bg-center bg-cover bg-blend-color-burn h-80 ">
                <div className="container">
                    <div className="grid grid-cols-2 sm:gap-10">

                        <div className="my-auto text-white col-span-2 sm:col-span-1">
                            <a href="" className="title w-full min-h-max text-4xl ">Sākār News</a>
                        </div>
                        <div className="my-auto text-white col-span-2 sm:col-span-1">
                            <div className="bg-gradient-to-b from-primary to-primaryDark mt-20 -mb-32">
                                <div className="w-full h-60" style={{ backgroundImage: `url(${highlightedNewsItem?.fields?.featuredImage?.fields?.file?.url ?? '/img/placeholder.png'})`, backgroundSize: "cover", overflow: "none" }}>
                                    <div className="w-full h-56 p-14 " >
                                        <div className="title w-full h-44"></div>
                                        {/* <a href="" className="title w-full min-h-max text-2xl text-white">{highlightedNewsItem.fields.title}</a> */}
            {/*</div>
                                </div>
                                <div className="p-14">
                                    <p className="text-2xl">{highlightedNewsItem.fields.title}</p>
                                    <p className="mt-6 text-justify">
                                        Sākār is the outcome of a vision based on experience of it&#39;s founders, Keithan Pai and Keisha Pai.
                                        The Sākār leasership always strives to thrive through raising the global society without any barriors.
                                    </p>

                                    <div className='block text-right'>
                                        <Link href={"/news/" + highlightedNewsItem.fields.slug}>
                                            <a className='mt-8 mr-0 ml-auto arrow-btn inline-block h-10'>Read More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            <div
                className="page-header py-14 bg-slate-600 mb-10 text-slate-400 bg-fixed bg-center bg-cover bg-blend-color-burn shadow-gray-500 drop-shadow-lg ">
                <div className="container">
                    <p className="text-4xl pb-5 text-slate-100">Funraisers</p>
                    Our plenty of aspirations to help the diversity in nature grow and nurture can only be fulfilled with monetary aid. Fundraising is one way to help us realise our projects better. When the word "'Fundraising" has "Fun" in it, why not make this a fun process for all?                </div>
            </div>

            <div className="section bg-section">
                <div className="container">
                    {/* <div className="container animatedParent" data--sequence="300">
                        <p className="heading text-primary animated animateOnce fadeInDownShort" data-id="1">More news</p>
                        <div className="mt-6 text-justify animated animateOnce fadeInUpShort" data-id="1">

                        </div>
                    </div> */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pb-20 animatedParent" data--sequence="100">
                        {fundraisers.map((fundraiser, index) => {
                            // if (index === 0) {
                            //     return
                            // }
                            return (
                                // <Link href={"/news/" + newsItem.fields.slug} key={newsItem.sys.id}>
                                        <div className={`fundraiser mt-10 h-96 mb-4 cursor-pointer`} key={fundraiser.sys.id}>
                                        <div className={`fundraiser-inner block bg-${fundraiser?.fields?.category.toLowerCase()} `}>
                                            <div className={`fundraiser-inner-front w-full pt-64 border-${fundraiser?.fields?.category.toLowerCase()} border-0 sm:boder-solid`} style={{ backgroundImage: `url(${fundraiser ?.fields ?.featuredImage ?.fields ?.file ?.url ?? '/img/placeholder.png'})`, backgroundSize: "cover", overflow: "none" }}>
                                                <p className={`text-lg text-center text-white p-5 bg-${fundraiser?.fields?.category.toLowerCase()}/80`}>{fundraiser.fields.name}</p>                                                
                                            </div>
                                            <div className={`fundraiser-inner-back text-center text-white p-6 py-10 h-80 bg-${fundraiser?.fields?.category.toLowerCase()}`}>
                                                <p className="text-lg text-white">{fundraiser.fields.name}</p>
                                                <p className="mt-4 text-base h-60 overflow-hidden">
                                                    {fundraiser.fields.description}
                                                </p>                                        
                                            </div>
                                        </div>
                                    </div>
                                // </Link>
                            )
                        })}
                    </div>
                </div>
            </div>



        </>
    )
}

fundraisersPage.displayName = "News"

export default fundraisersPage;


export async function getServerSideProps() {
    // Fetch data from external API

    let clientObj = client();

    // const res: any = await clientObj.getAssets();
    const res: any = await clientObj.getEntries({
        content_type: 'fundraisers'
    });

    return {
        props: {
            news: res,
        }
    }

}