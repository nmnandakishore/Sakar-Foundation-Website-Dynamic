import Link from 'next/link';
import * as React from 'react'
import { client } from '../../helpers/data-fetcher';


interface InewsPageProps {
    news: any
}


const newsPage: React.FC<InewsPageProps> = ({ news = null }) => {
    let newsItems = news?.items ?? [];
    let highlightedNewsItem = newsItems[0];

    console.log({ highlightedNewsItem });
    console.log({ newsItems });
    return (
        <>


            <div className="page-header px-8 bg-gradient-to-b from-primaryDark to-primaryDark bg-fixed bg-center bg-cover bg-blend-color-burn h-80 ">
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
                                    </div>
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
            </div>


            <div className="section mt-36">

            </div>

            <div className="section bg-section">
                <div className="container">
                    <div className="container animatedParent" data--sequence="300">
                        <p className="heading text-primary animated animateOnce fadeInDownShort" data-id="1">More news</p>
                        <div className="mt-6 text-justify animated animateOnce fadeInUpShort" data-id="1">

                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pb-20 animatedParent" data--sequence="100">
                        {newsItems.map((newsItem, index) => {
                            if (index === 0) {
                                return
                            }
                            return (
                                <div className="bg-gray-200 mt-10 mb-4" key={newsItem.sys.id}>
                                    <div className="w-full h-60" style={{ backgroundImage: `url(${newsItem?.fields?.featuredImage?.fields?.file?.url ?? '/img/placeholder.png'})`, backgroundSize: "cover", overflow: "none" }}>
                                        <div className="w-full h-56 p-14 " >
                                            {/* <div className="title w-full h-44"></div> */}
                                            {/* <a href="" className="title w-full min-h-max text-2xl text-white">{highlightedNewsItem.fields.title}</a> */}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-2xl text-primary">{newsItem.fields.title}</p>
                                        <p className="text-xs text-slate-600">{newsItem.fields.category}</p>
                                        <p className="mt-6 text-justify">
                                            {newsItem.fields.excerpt}
                                        </p>

                                        <div className='block text-right text-primaryDark'>
                                            <Link href={"/news/" + newsItem.fields.slug}>
                                                <a className='mt-8 mr-0 ml-auto arrow-btn inline-block h-10'>Read More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>



        </>
    )
}

newsPage.displayName = "News"

export default newsPage;


export async function getServerSideProps() {
    // Fetch data from external API

    let clientObj = client();

    // const res: any = await clientObj.getAssets();
    const res: any = await clientObj.getEntries({
        content_type: 'news'
    });

    return {
        props: {
            news: res,
        }
    }

}