import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useRouter } from 'next/router'

import { BLOCKS } from '@contentful/rich-text-types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { client } from '../helpers/data-fetcher';
import { string } from 'prop-types';
import { isArray } from 'util';


interface IprogramsPageProps {
    programs: any
}


const ProgramsPage: React.FC<IprogramsPageProps> = ({ programs = null }) => {
    // let programsItems = programs?.items ?? [];
    const [programItems, setProgramItems] = useState([]);
    // const [humanFilters, setHumanFilters] = useState({});    

    const [filters, setFilters] = useState({
        countries : []
    });
    const [activeFilters, setActiveFilters] = useState({
        countryFilter : []
    });
    const [openTab, setOpenTab] = useState('');
    const router = useRouter()


    useEffect(() => {
        // setActiveFilters({
        //     ...activeFilters,
        //     countryFilter: [router.query.filter] ?? false,
        // });
        setOpenTab((router?.query?.category ? router?.query?.category.toString() : 'Humans'));
    }, [programs])

    /*useEffect(() => {


    }, [programItems]);*/

    useEffect(() => {
        // setActiveFilters({
        //     ...activeFilters,
        //     categoryFilter: openTab,
        // })
        if (Array.isArray(programs?.items)) {
                let programItems1 = programs ?.items.filter((program) => {                    
                    return program ?.fields ?.category.toLowerCase() === openTab.toLowerCase();
                });
                setProgramItems(programItems1);
            // });

        setFilters(programs.filters[openTab.charAt(0).toUpperCase() + openTab.slice(1)]);
           
        }

        // if(Array.isArray(activeFilters?.countryFilter) && activeFilters?.countryFilter.length!=0){
        //     setProgramItems(() => {
        //         return programItems?.items.filter((program) => {
        //             return program.fields.country === activeFilters.countryFilter[0];
        //         });
        //     });
        // }

    }, [openTab]);

    useEffect(()=>{
    }, [programItems])

    useEffect(() => {
        // console.log(activeFilters)
        setProgramItems(() => {
            if((Array.isArray(activeFilters?.countryFilter) ? activeFilters?.countryFilter : []).length !== 0){
            return programs?.items
                .filter(program => program?.fields?.category.toLowerCase() === openTab.toLowerCase())
                .filter(program =>
                    activeFilters ?.countryFilter ? (activeFilters ?.countryFilter ?? []).some(c => c === program ?.fields ?.country) : true
                        );
            } else {
                return programs?.items.filter(program => program?.fields?.category.toLowerCase() === openTab.toLowerCase());
            }
        });
    }, [activeFilters?.countryFilter])




    // let programsForHumans, filteredProgramsForHumans, programsForAnimals, programsForPlants = [];

    // let filterPropgrameByCountry = (programsObject, countryName) => {

    // }

    // programsForHumans = programsItems.filter((program) => {
    //     // console.log('program.fields');
    //     // console.log(program.fields);

    //     return program.fields.category === 'Humans'
    // })

    // programsForAnimals = programsItems.filter((program) => {
    //     return program.fields.category === 'Animals'
    // })

    // programsForPlants = programsItems.filter((program) => {
    //     return program.fields.category === 'Plants'
    // })

    // const [countryFilter, setCountryFilter] = useState(false);

   

    // useEffect(() => {
        //Set open tab from URL 
        // setOpenTab((router.query.category || 'Humans'))



        // setActiveFilters({
        //     ...activeFilters,
        //     categoryFilter: openTab,
        // })
        // setOpenTab(getCategoryCode(router.query.category) || getCategoryCode('Humans'));

        // //Create filter object from URL
        // setCountryFilter(getCategoryCode(router.query.country) || false);


    // }, [])

    // useEffect(() => {                                        
    //     if(openTab === 1){
    //         filterPropgrameByCountry
    //     }
    // }, [countryFilter])

    // useEffect(() => {                                        
    //     setCountryFilter(false);
    // }, [openTab]);


    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
                // console.log({ node });
                return (
                    <img src={node.data.target.fields.file.url} alt={node.data.target.fields.title} />
                );
            }
        }
    }

    return (
        <div>
            <div className="page-header py-14 bg-slate-600 mb-10 text-slate-400 bg-fixed bg-center bg-cover bg-blend-color-burn shadow-gray-500 drop-shadow-lg ">
                <div className="container">
                    <p className="text-4xl pb-5 text-slate-100">Programs </p>
                    Small Steps to achieving big milestones. Delivering happiness and hope one step at a time.
                </div>
            </div>
            <div className="section bg-section">
                <div className="container">
                    <div className="flex flex-wrap" id="tabs-id">
                        <div className="w-full">
                            <ul className="flex mb-0 list-none grid gap-0 grid-cols-1 sm:grid-cols-3 p-0 shadow-lg">
                                <li className="col-span-1 text-center">
                                    <a className=
                                        {"font-bold p-5 mr-px block  border-t-humans border-t-4 cursor-pointer" +
                                            (openTab.toLowerCase() === 'humans'
                                                ? " text-lg text-white bg-humans"
                                                : " text-base pt-6 text-humans hover:bg-gray-100"
                                            )
                                        }
                                        onClick=
                                        {e => {
                                            e.preventDefault();
                                            setOpenTab('Humans');
                                        }}
                                        data-toggle="tab" href="#tab-humans" role="tablist">
                                        <img className='h-6 w-auto mr-5 inline-block' src=
                                            {(openTab.toLowerCase() === 'humans'
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
                                            (openTab.toLowerCase() === 'animals'
                                                ? " text-lg text-white bg-animals"
                                                : " text-base pt-6 text-animals hover:bg-gray-100"
                                            )
                                        } onClick=
                                        {e => {
                                            e.preventDefault();
                                            setOpenTab('Animals');
                                        }}
                                        data-toggle="tab" href="#tab-animals" role="tablist">
                                        <img className='h-6 w-auto mr-5 inline-block' src=
                                            {(openTab.toLowerCase() === 'animals'
                                                ? `/img/programs/animals.svg`
                                                : `/img/programs/animals-color.svg`
                                            )} alt="" />
                                        Animals
                                    </a>
                                </li>
                                <li className="col-span-1 text-center">
                                    <a className=
                                        {"font-bold p-5 block cursor-pointer border-t-plants border-t-4" +
                                            (openTab.toLowerCase() === 'plants'
                                                ? " text-lg text-white bg-plants"
                                                : " text-base pt-6 text-plants hover:bg-gray-100"
                                            )
                                        }
                                        onClick=
                                        {e => {
                                            e.preventDefault();
                                            setOpenTab('Plants');
                                        }}
                                        data-toggle="tab" href="#tab-plants" role="tablist">
                                        <img className='h-6 w-auto mr-5 inline-block' src=
                                            {(openTab.toLowerCase() === 'plants'
                                                ? `/img/programs/plants.svg`
                                                : `/img/programs/plants-color.svg`
                                            )}
                                            alt="" />
                                        Plants
                                    </a>
                                </li>
                            </ul>
                            <div className="flex-auto">
                                <div className="tab-content tab-space">
                                    <div id="tab-humans">

                                        <div className="p-5 m-0 animatedParent" data--sequence="100">
                                            <b className={`bold block ${!programs.filters[openTab.charAt(0).toUpperCase() + openTab.slice(1)] ? 'hidden' : ''}`}>Filters:</b>
                                            {
                                                (Array.isArray(filters?.countries) ? filters?.countries : []).map((country, index) => {
                                                    return (
                                                        <span
                                                            onClick={e => {
                                                                e.preventDefault();
                                                                let countryFilter;
                                                                if (activeFilters?.countryFilter && (activeFilters?.countryFilter ?? []).includes(country)) {
                                                                    console.log("filter already active");
                                                                    // const index = activeFilters?.countryFilter.indexOf(country);
                                                                    // activeFilters?.countryFilter.splice(index, 1);
                                                                    // countryFilter = activeFilters?.countryFilter;
                                                                    countryFilter = [];
                                                                } else {
                                                                    countryFilter = [country];
                                                                }
                                                                setActiveFilters({
                                                                    ...activeFilters,
                                                                    countryFilter: countryFilter,
                                                                })
                                                            }}
                                                            className={`bg-slate-300 inline py-2 px-3 mr-3 text-sm rounded-full cursor-pointer ${(activeFilters ?.countryFilter && ((activeFilters ?.countryFilter ?? []).some(c => c === country))) ? 'bg-slate-600 text-white' : ''}`}
                                                            key={country}>
                                                            {country}
                                                        </span>
                                                    );
                                                })
                                            }
                                        </div>

                                        <div className="pb-20 m-0 animatedParent" data--sequence="100">

                                            {
                                                programItems.map((programsItem, index) => {
                                                return (
                                                    // <Link href={"/programs/" + programsItem.fields.slug} key={programsItem.sys.id}>
                                                    <div className="bg-gray-100 mb-10 cursor-pointer hover:bg-gray-50" data-id={index + 1} key={programsItem.sys.id}>
                                                        <div className="grid grid-cols-12 gap-1">
                                                            <div className="col-span-12 sm:col-span-4 h-72 sm:h-full bg-center" style={{ backgroundImage: `url(${programsItem ?.fields ?.featuredImage ?.fields ?.file ?.url ?? '/img/placeholder.png'})`, backgroundSize: "cover", overflow: "none" }}>
                                                            </div>
                                                            <div className="col-span-12 sm:col-span-8 p-6">
                                                                <p className="text-lg text-primary">{programsItem.fields.programName}</p>
                                                                <p className="text-xs text-slate-100  bg-slate-500 p px-2 inline-block">{programsItem.fields.country}</p>
                                                                <p className={`text-slate-500`}>{programsItem.fields.description}</p>
                                                                <div className="mt-4 text-sm text-base text-left h-24 whitespace-pre-line overflow-hidden line-clamp-4">
                                                                    {documentToReactComponents(programsItem.fields.content, options)}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProgramsPage.displayName = "Programs"

export default ProgramsPage;


export async function getServerSideProps() {
    // Fetch data from external API

    let clientObj = client();

    // const res: any = await clientObj.getAssets();
    let res: any = await clientObj.getEntries({
        content_type: 'programs'
    });

    //Append filter keys

    const countries = res.items.map(item => item.fields.country);
    const uniqueCountries = [...new Set(countries)];
    console.log({ uniqueCountries })

    res = {
        filters: {
            Humans: {
                countries: uniqueCountries
            }
        },
        ...res
    }

    return {
        props: {
            programs: res,
        }
    }

}