import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Link from 'next/link';
import * as React from 'react'
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
                return (
                    <img src={node.data.target.fields.file.url} alt={node.data.target.fields.title} />
                );
            }
        }
    }

    return (
        <>
            <div style={{ backgroundImage: `url(${fields?.featuredImage?.fields?.file.url ?? '/img/placeholder.png'})` }}
                className={`page-header bg-fixed bg-center bg-cover bg-blend-color-burn h-80 ${fields?.featuredImage?.fields?.file ? 'bg-gradient-to-b from-transparent via-primary/85 to-primary/100' : 'bg-gray-300'}`}>
                <div className='px-8 w-full h-full '>
                    <div className="container">
                        <div className="grid grid-cols-2 sm:gap-10">
                            <div className="my-auto text-white col-span-2 sm:col-span-1">
                                <div className="bg-gradient-to-b from-primary to-primaryDark mt-32 -mb-32 p-14">
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

            <div className="section mt-40">
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