import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
import { useRouter } from 'next/router'
import * as React from 'react'
import { client } from '../../helpers/data-fetcher'
import Image from 'next/image';

interface ISinglenewsPage {
    news: any,
    latestNews: any
    // context: any
}

const singlenewsPage: React.FC<ISinglenewsPage> = ({ news, latestNews }) => {
    // const router = useRouter()
    // const { slug } = router.query
    let fields = news.fields;

    let latestNewsArr = latestNews.items;

    const options = {
        /*renderMark: {
            [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
        },
        renderText: text => text.replace('!', '?'),*/

        // [BLOCKS.EMBEDDED_ASSET]: node => (
        //     <img src={node.data.target.fixed.src} alt="" /> // You can decide what alt you want to put in
        // ),

        renderNode: {

            // [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
            //     // find the asset in the assetMap by ID
            //     const asset = assetMap.get(node.data.target.sys.id);

            //     // render the asset accordingly
            //     return (
            //         <img src={asset.url} alt="My image alt text" />
            //     );
            // }


            [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
                console.log({ node });
                return (
                    <img src={node.data.target.fields.file.url} alt={node.data.target.fields.title} />
                );
            }
        }


    }

    console.log({ fields: fields });

    /*if (fields.relatednews) {
        relatednews =
            <div className="section bg-gray-200">
                <div className="container text-center animatedParent">
                    <div className="heading text-center animated animateOnce fadeInDownShort" data-id="1">
                        Related news
                    </div>
                    <div className="animated animateOnce fadeInUpShort" data-id="2">
                    </div>
                </div>
            </div>
    }*/


    return (
        <>
            {/* <div style={{ backgroundImage: `url(${fields.featuredImage.fields.file.url ?? '/img/placeholder.png'})`, height: '400px' }}
                className="page-header h-96 bg-fixed bg-center bg-cover bg-blend-color-burn"> */}
            {/* <div className='px-8 w-full h-full bg-gradient-to-b from-transparent via-primary/75 to-primary/100'> */}
            {/* <div className='px-8 w-full h-full bg-gradient-to-b from-transparent'>
                    <div className="container">

                    </div>
                </div>
            </div> */}

            <div className="section">
                <div className="container">
                    <div className="grid grid-cols-12 sm:gap-10 animatedParent" data-sequence="300">
                        <div className="col-span-12 sm:col-span-8 pt-10">

                            <img src={`https:` + fields?.featuredImage?.fields?.file?.url} className="mb-10"></img>
                            <div className=" animated animateOnce fadeInUpShort" data-id="1">
                                <p className="text-4xl text-primary">{fields.title}</p>
                                <p className="text-sm text-slate-500 ">News / {fields.category}</p>
                            </div>

                            <div className="excerpt col-span-1 text-lg px-8 py-4 my-8 bg-slate-100 border-l-4 border-solid border-slate-400 animated animateOnce fadeInUpShort text-gray-900" data-id="2">
                                {fields.excerpt}
                            </div>

                            <div className="prose prose-slate col-span-1  animated animateOnce fadeInUpShort" data-id="3">
                                {documentToReactComponents(fields.body, options)}

                                {/* {fields.} */}
                            </div>
                        </div>

                        <div className="hidden sm:col-span-4 sm:inline-block bg-gray-100 p-6 mt-10">
                            <div className="text-2xl text-primary">
                                Latest News
                            </div>

                            {latestNewsArr.map((newsItem, index) => {
                                // if (index === 0) {
                                //     return
                                // }
                                if (fields.slug === newsItem.fields.slug) {
                                    return;
                                }
                                return (

                                    <Link href={"/news/" + newsItem.fields.slug}>
                                        <div className="bg-white mt-10 mb-4 cursor-pointer hover:bg-white/50" key={newsItem.sys.id}>
                                            <div className="w-full h-40" style={{ backgroundImage: `url(${newsItem?.fields?.featuredImage?.fields?.file?.url ?? '/img/placeholder.png'})`, backgroundSize: "cover", overflow: "none" }}>
                                                <div className="w-full h-56 p-14 " >
                                                    {/* <div className="title w-full h-44"></div> */}
                                                    {/* <a href="" className="title w-full min-h-max text-2xl text-white">{highlightedNewsItem.fields.title}</a> */}
                                                </div>
                                            </div>
                                            <div className="p-2">
                                                <p className="text-lg text-primary">{newsItem.fields.title}</p>
                                                <p className="text-xs text-slate-100  bg-slate-500 p px-2 inline-block">{newsItem.fields.category}</p>
                                                <p className="mt-4 text-base text-left h-24 whitespace-pre-line overflow-hidden line-clamp-4">
                                                    {newsItem.fields.excerpt}
                                                </p>

                                                {/* <div className='block text-right text-primaryDark'>
                                                <Link href={"/news/" + newsItem.fields.slug}>
                                                    <a className='mt-8 mr-0 ml-auto arrow-btn inline-block h-10'>Read More</a>
                                                </Link>
                                            </div> */}
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>


                    </div>
                </div>
            </div>



        </>

    )
}






singlenewsPage.displayName = "d";
export default singlenewsPage;

export async function getServerSideProps(context) {
    let slug: string = context.params.slug;
    let clientObj = client();

    const res: any = await clientObj.getEntries({
        content_type: 'news',
        'fields.slug': slug
    })

    const latestNewsRes: any = await clientObj.getEntries({
        content_type: 'news',
        limit: 5,
    });

    console.log({ latestNewsRes });

    return {
        props: {
            news: res.items[0],
            latestNews: latestNewsRes
        }
    }

    // console.log({ "slugAtServerProps": context.params });

}