import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
import { useRouter } from 'next/router'
import * as React from 'react'
import { client } from '../../helpers/data-fetcher'

interface ISinglenewsPage {
    news: any,
    // context: any
}

const singlenewsPage: React.FC<ISinglenewsPage> = ({ news }) => {
    // const router = useRouter()
    // const { slug } = router.query
    let fields = news.fields;

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



        [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
            // find the asset in the assetMap by ID
            const asset = assetMap.get(node.data.target.sys.id);

            // render the asset accordingly
            return (
                <img src={asset.url} alt="My image alt text" />
            );
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
            <div style={{ backgroundImage: `url(${fields.featuredImage.fields.file.url ?? '/img/placeholder.png'})`, height: '400px' }}
                className="page-header h-96 bg-fixed bg-center bg-cover bg-blend-color-burn">
                {/* <div className='px-8 w-full h-full bg-gradient-to-b from-transparent via-primary/75 to-primary/100'> */}
                <div className='px-8 w-full h-full bg-gradient-to-b from-transparent'>
                    <div className="container">

                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="grid grid-cols-1 sm:gap-10 animatedParent" data-sequence="300">
                        <div className="my-auto col-span-1 animated animateOnce fadeInUpShort" data-id="1">
                            <p className="text-4xl text-primary">{fields.title}</p>
                            <p className="text-sm text-slate-500">News / {fields.category}</p>
                        </div>

                        <div className="excerpt col-span-1 text-lg px-8 py-4 border-l-4 border-solid border-slate-400 animated animateOnce fadeInUpShort text-gray-900" data-id="2">
                            {fields.excerpt}
                        </div>

                        <div className="col-span-1  animated animateOnce fadeInUpShort" data-id="3">
                            {documentToReactComponents(fields.body, options)}
                            {/* {fields.} */}
                        </div>


                    </div>
                    {/* {fields.details.content[0].content[0].value} */}
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

    return {
        props: {
            news: res.items[0]
        }
    }

    // console.log({ "slugAtServerProps": context.params });

}