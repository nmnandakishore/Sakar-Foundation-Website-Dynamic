import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useRouter } from 'next/router'


import { BLOCKS } from '@contentful/rich-text-types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { client } from '../helpers/data-fetcher';


interface IprogramsPageProps {
    programs: any
}


const ProgramsPage: React.FC<IprogramsPageProps> = ({ programs = null }) => {
    let programsItems = programs?.items ?? [];

    let getCategoryCode = (categoryStr) => {
        return {
            'humans': 1,
            'animals': 2,
            'plants': 3,
        }[categoryStr]
    }

    let programsForHumans, programsForAnimals, programsForPlants = [];

    programsForHumans = programsItems.filter((program) => {
        console.log('program.fields');
        console.log(program.fields.category);

        return program.fields.category === 'Humans'
    })

    programsForAnimals = programsItems.filter((program) => {
        return program.fields.category === 'Animals'
    })

    programsForPlants = programsItems.filter((program) => {
        return program.fields.category === 'Plants'
    })

    const [openTab, setOpenTab] = useState(1);

    const router = useRouter()

    useEffect(() => {
        setOpenTab(getCategoryCode(router.query.category) || getCategoryCode('humans'))
        // const [openTab, setOpenTab] = React.useState(1);
    }, [])


    const options = {
        // renderNode: {
        //     [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        //         console.log({ node });
        //         return (
        //             <img src={node.data.target.fields.file.url} alt={node.data.target.fields.title} />
        //         );
        //     }
        // }


    }

    return (
        <>
            <div
                className="page-header py-14 bg-slate-600 mb-10 text-slate-400 bg-fixed bg-center bg-cover bg-blend-color-burn shadow-gray-500 drop-shadow-lg ">
                <div className="container">
                    <p className="text-4xl pb-5 text-slate-100">Programs</p>
                    Updates about everything happened in Sākār world.
                </div>
            </div>


            <div className="section bg-section">
                <div className="container">

                    <div className="flex flex-wrap" id="tabs-id">
                        <div className="w-full">

                            {/* ---- Tab Links ---- */}

                            <ul className="flex mb-0 list-none grid gap-0 grid-cols-3 p-0 shadow-lg">
                                <li className="col-span-1 text-center">
                                    <a className=
                                        {"font-bold p-5 mr-px block  border-t-humans border-t-4 cursor-pointer" +
                                            (openTab === 1
                                                ? " text-lg text-white bg-humans"
                                                : " text-base pt-6 text-humans hover:bg-gray-100"
                                            )
                                        }
                                        onClick=
                                        {e => {
                                            e.preventDefault();
                                            setOpenTab(1);
                                        }}
                                        data-toggle="tab" href="#tab-humans" role="tablist">
                                        <img className='h-6 w-auto mr-5 inline-block' src=
                                            {(openTab === 1
                                                ? `/img/programs/humans.svg`
                                                : `/img/programs/humans-color.svg`
                                            )}
                                            alt="" />
                                        Humans
                                    </a>
                                </li>
                                <li className="col-span-1 text-center">
                                    <a className=
                                        {"font-bold p-5 mr-px block border-t-animals border-t-4 cursor-pointer" +
                                            (openTab === 2
                                                ? " text-lg text-white bg-animals"
                                                : " text-base pt-6 text-animals hover:bg-gray-100"
                                            )
                                        } onClick=
                                        {e => {
                                            e.preventDefault();
                                            setOpenTab(2);
                                        }}
                                        data-toggle="tab" href="#tab-animals" role="tablist">
                                        <img className='h-6 w-auto mr-5 inline-block' src=
                                            {(openTab === 2
                                                ? `/img/programs/animals.svg`
                                                : `/img/programs/animals-color.svg`
                                            )} alt="" />
                                        Animals
                                    </a>
                                </li>
                                <li className="col-span-1 text-center">
                                    <a className=
                                        {"font-bold p-5 block cursor-pointer border-t-plants border-t-4" +
                                            (openTab === 3
                                                ? " text-lg text-white bg-plants"
                                                : " text-base pt-6 text-plants hover:bg-gray-100"
                                            )
                                        }
                                        onClick=
                                        {e => {
                                            e.preventDefault();
                                            setOpenTab(3);
                                        }}
                                        data-toggle="tab" href="#tab-plants" role="tablist">
                                        <img className='h-6 w-auto mr-5 inline-block' src=
                                            {(openTab === 3
                                                ? `/img/programs/plants.svg`
                                                : `/img/programs/plants-color.svg`
                                            )}
                                            alt="" />
                                        Plants
                                    </a>
                                </li>
                            </ul>

                            {/* ---- Tab Content ---- */}

                            {/* Human Tabs */}
                            <div className="flex-auto">
                                <div className="tab-content tab-space">

                                    <div className={openTab === 1 ? "block" : "hidden"} id="tab-humans">
                                        <div className="pb-20 animatedParent" data--sequence="100">
                                            {programsForHumans.map((programsItem, index) => {

                                                return (
                                                    // <Link href={"/programs/" + programsItem.fields.slug} key={programsItem.sys.id}>
                                                    <div className="bg-gray-100 mt-10 mb-4 cursor-pointer hover:bg-gray-50" data-id={index + 1} key={programsItem.sys.id}>
                                                        <div className="grid grid-cols-12 gap-1">
                                                            <div className="col-span-12 sm:col-span-4 h-72 sm:h-full " style={{ backgroundImage: `url(${programsItem?.fields?.featuredImage?.fields?.file?.url ?? '/img/placeholder.png'})`, backgroundSize: "cover", overflow: "none" }}>
                                                            </div>
                                                            <div className="col-span-12 sm:col-span-8 p-6">
                                                                <p className="text-lg text-primary">{programsItem.fields.programName}</p>
                                                                <p className="text-xs text-slate-100  bg-slate-500 p px-2 inline-block">{programsItem.fields.country}</p>
                                                                <p className={`text-slate-500`}>{programsItem.fields.description}</p>
                                                                <p className="mt-4 text-sm text-base text-left h-24 whitespace-pre-line overflow-hidden line-clamp-4">
                                                                    {documentToReactComponents(programsItem.fields.content, options)}
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
                            </div>

                            {/* Animals Tabs */}
                            <div className="flex-auto">
                                <div className="tab-content tab-space">
                                    <div className={openTab === 2 ? "block" : "hidden"} id="tab-animals">
                                        <div className="pb-20 animatedParent" data--sequence="100">
                                            {programsForAnimals.map((programsItem, index) => {
                                                return (
                                                    // <Link href={"/programs/" + programsItem.fields.slug} key={programsItem.sys.id}>
                                                    <div className="bg-gray-100 mt-10 mb-4 cursor-pointer hover:bg-gray-50" data-id={index + 1} key={programsItem.sys.id}>
                                                        <div className="grid grid-cols-12 gap-1">
                                                            <div className="col-span-12 sm:col-span-4 h-72 sm:h-full " style={{ backgroundImage: `url(${programsItem?.fields?.featuredImage?.fields?.file?.url ?? '/img/placeholder.png'})`, backgroundSize: "cover", overflow: "none" }}>
                                                            </div>
                                                            <div className="col-span-12 sm:col-span-8 p-6">
                                                                <p className="text-lg text-primary">{programsItem.fields.programName}</p>
                                                                <p className="text-xs text-slate-100  bg-slate-500 p px-2 inline-block">{programsItem.fields.country}</p>
                                                                <p className={`text-slate-500`}>{programsItem.fields.description}</p>
                                                                <p className="mt-4 text-sm text-base text-left h-24 whitespace-pre-line overflow-hidden line-clamp-4">
                                                                    {documentToReactComponents(programsItem.fields.content, options)}
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
                            </div>

                            {/* Animals Plants */}
                            <div className="flex-auto">
                                <div className="tab-content tab-space">
                                    <div className={openTab === 3 ? "block" : "hidden"} id="tab-plants">
                                        <div className="pb-20 animatedParent" data--sequence="100">
                                            {programsForPlants.map((programsItem, index) => {
                                                return (
                                                    // <Link href={"/programs/" + programsItem.fields.slug} key={programsItem.sys.id}>
                                                    <div className="bg-gray-100 mt-10 mb-4 cursor-pointer hover:bg-gray-50" data-id={index + 1} key={programsItem.sys.id}>
                                                        <div className="grid grid-cols-12 gap-1">
                                                            <div className="col-span-12 sm:col-span-4 h-72 sm:h-full " style={{ backgroundImage: `url(${programsItem?.fields?.featuredImage?.fields?.file?.url ?? '/img/placeholder.png'})`, backgroundSize: "cover", overflow: "none" }}>
                                                            </div>
                                                            <div className="col-span-12 sm:col-span-8 p-6">
                                                                <p className="text-lg text-primary">{programsItem.fields.programName}</p>
                                                                <p className="text-xs text-slate-100  bg-slate-500 p px-2 inline-block">{programsItem.fields.country}</p>
                                                                <p className={`text-slate-500`}>{programsItem.fields.description}</p>
                                                                <p className="mt-4 text-sm text-base text-left h-24 whitespace-pre-line overflow-hidden line-clamp-4">
                                                                    {documentToReactComponents(programsItem.fields.content, options)}
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
                            </div>


                        </div>
                    </div>

                </div>
            </div >



        </>
    )
}

ProgramsPage.displayName = "Programs"

export default ProgramsPage;


export async function getServerSideProps() {
    // Fetch data from external API

    let clientObj = client();

    // const res: any = await clientObj.getAssets();
    const res: any = await clientObj.getEntries({
        content_type: 'programs'
    });

    return {
        props: {
            programs: res,
        }
    }

}