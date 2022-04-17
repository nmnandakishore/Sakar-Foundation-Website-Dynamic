import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Link from 'next/link';
import * as React from 'react'
import ReactPlayer from 'react-player';
import { client } from '../../helpers/data-fetcher';



interface ISingleProgramPage {
    program: any,
    // context: any
}

const sparkPage: React.FC<ISingleProgramPage> = ({ program }) => {
    console.log({ program })

    let fields = program.fields;

    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
                console.log({ node });
                if (node?.data?.target?.fields?.file?.contentType.includes("video")) {
                    return (
                        <div className='bg-gray-100 text-center w-full p-0'>
                            <ReactPlayer url={node?.data?.target?.fields?.file?.url} controls={true} pip={true} className="p-0 mx-auto my-10" />
                        </div>

                    );
                }
                return (
                    <div className='bg-gray-100 text-center w-full'>
                        <img src={node?.data?.target?.fields?.file?.url} alt={node?.data?.target?.fields?.title} className='my-10 mx-auto p-0' />
                    </div>
                );
            },
            [BLOCKS.UL_LIST]: (node, children) => (
                <ul className='list-disc'>{children}</ul>
            ),
            [BLOCKS.OL_LIST]: (node, children) => (
                <ol className='list-decimal'>{children}</ol>
            ),
            [BLOCKS.LIST_ITEM]: (node, children) => <li className='ml-10 py-5'>{children}</li>,
            [BLOCKS.PARAGRAPH]: (node, children) => <p className=''>{children}</p>,

            [BLOCKS.HEADING_1]: (node, children) => <h1 className='text-6x my-5'>{children}</h1>,
            [BLOCKS.HEADING_2]: (node, children) => <h2 className='text-5x my-5'>{children}</h2>,
            [BLOCKS.HEADING_3]: (node, children) => <h3 className='text-4x my-5'>{children}</h3>,

        }
    }

    return (
        <>
            <div style={{ backgroundImage: `url(${fields?.featuredImage?.fields?.file.url ?? '/img/placeholder.png'})` }}
                className={`page-header bg-fixed bg-center bg-cover bg-blend-color-burn h-96 ${fields?.featuredImage?.fields?.file ? 'bg-gradient-to-b from-transparent via-primary/85 to-primary/100' : 'bg-gray-300'}`}>
                <div className='px-8 w-full h-full '>
                    <div className="container">
                        <div className="grid grid-cols-2 sm:gap-10">
                            <div className="my-auto text-white col-span-2 sm:col-span-1">
                                <div className="bg-gradient-to-b from-primary to-primaryDark mt-60 -mb-16 p-14">
                                    <p className="text-3xl">{fields.programName}</p>
                                    <p className="mt-6 text-justify">
                                        {fields.description}
                                        {/* Sākār Spark lets highschool students start their own fundraiser for their own cause.
                                        The intent behind this program is to make the youth practically learn importance of giving back
                                        the community and keeping a healthy relation with the society. */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section mt-20">
                <div className="container">
                    {documentToReactComponents(fields.content, options)}

                </div>
            </div>


        </>

    )
}

sparkPage.displayName = "Spark Page";
export default sparkPage;


export async function getServerSideProps(context) {
    let slug: string = context.params.slug;
    let clientObj = client();

    const res: any = await clientObj.getEntries({
        content_type: 'programs',
        'fields.slug': slug
    })

    return {
        props: {
            program: res.items[0]
        }
    }

    // console.log({ "slugAtServerProps": context.params });

}