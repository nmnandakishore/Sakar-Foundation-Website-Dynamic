import Link from 'next/link';
import { useRouter } from 'next/router'
import * as React from 'react'
import ProjectSlider from '../../components/projects-slider';
import { client } from '../../helpers/data-fetcher'

interface ISingleProjectPage {
    project: any,
    // context: any
}

const singleProjectPage: React.FC<ISingleProjectPage> = ({ project }) => {
    // const router = useRouter()
    // const { slug } = router.query
    let fields = project.fields;
    let raisedPercent: number = (fields.raisedAmount / fields.targetAmount) * 100;


    console.log({ relatedProjects: fields });

    let relatedProjects: any = '';

    console.log({ relatedProjectsAt: fields.relatedProjects });

    if (fields.relatedProjects) {
        relatedProjects =
            <div className="section bg-gray-200">
                <div className="container text-center animatedParent">
                    <div className="heading text-center animated animateOnce fadeInDownShort" data-id="1">
                        Related Projects
                    </div>
                    <div className="animated animateOnce fadeInUpShort" data-id="2">
                        <ProjectSlider projects={fields.relatedProjects}></ProjectSlider>
                    </div>
                </div>
            </div>
    }


    return (
        <>
            <div style={{ backgroundImage: `url(${fields?.photograph?.fields?.file?.url ?? '/img/placeholder.jpg'})`, height: '400px' }}
                className="page-header h-96 bg-fixed bg-center bg-cover bg-blend-color-burn">
                <div className='px-8 w-full h-full bg-gradient-to-b from-transparent via-primary/75 to-primary/100'>
                    <div className="container">
                        <div className="grid grid-cols-2 sm:gap-10 animatedParent" data-sequence="100">
                            <div className="my-auto  col-span-2 sm:col-span-1 animated animateOnce fadeInUpShort" data-id="1">
                                <p className="text-4xl mt-44 -mb-44 text-white">{fields.title}</p>
                            </div>
                            <div className="my-auto col-span-2 sm:col-span-1 animated animateOnce fadeInDownShort" data-id="1">
                                <div className=" bg-gray-200 mt-60 -mb-60 animatedParent" data-sequence="100">
                                    <div className="p-14 animated animateOnce fadeInUpShort" data-id="3">

                                        <div className="w-100 overflow-hidden h-auto mt-2 mb-5 px-4 z-50" >
                                            <span className="font-bold"> Campeigner : </span> {fields.campaigner}
                                        </div>
                                        <div className="w-100 overflow-hidden h-auto my-1 px-4 z-50" >
                                            <span className="font-bold"> Amount Raised : </span> {fields.raisedAmount}
                                            <div className="mt-3 grid grid-cols-2">
                                                <div className="col-span-1">$0</div>
                                                <div className="col-span-1 text-right">${fields.targetAmount}</div>
                                            </div>
                                            <div className="progress my-2 mx-2 block w-100 p-px bg-white animated animateOnce fadeInUpShort" data-id="2" style={{ borderRadius: '13px' }}>
                                                <div className="progress-value bg-gradient-to-r from-primary to-sky-500 h-3"
                                                    style={{ width: `${raisedPercent}` + "%", borderRadius: '13px' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link
                                        href={{
                                            pathname: '/project/[slug]/donate',
                                            query: { slug: fields.slug },
                                        }}
                                    >
                                        <a className="w-full arrow-btn inline-block h-10 bg-primaryDark text-center text-white py-2 bg-plants/95 hover:opacity-95 transition-all font-bold  px-4 animated animateOnce fadeInUpShort" data-id="3" >Donate</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section mt-40">
                <div className="container">
                    {fields.details.content[0].content[0].value}
                </div>
            </div>

            {relatedProjects}

            <div className={`section ${fields.relatedProjects ? 'bg-white' : 'bg-primary text-white'}`}>
                <div className="container animatedParent" data-sequence="100">
                    <div className={`heading text-center  animated animateOnce fadeInDownShort ${fields.relatedProjects ? 'text-primary' : 'text-white'}`} data-id="1">
                        Start your own fundraiser
                    </div>
                    <div className="grid grid-cols-3 sm:gap-16 mt-16 text-center sm:text-left animatedParent"
                        data-sequence="300">
                        <div className="col-span-3 sm:col-span-1 table sm:border-dashed sm:border-gray-600 sm:border-r">
                            <span className={`text-6xl  table-cell p-2 animated animateOnce fadeIn  ${fields.relatedProjects ? 'text-primary' : 'text-white'}`}
                                data-id="1">1</span>
                            <span className="table-cell align-middle text-xl animated animateOnce fadeInDownShort"
                                data-id="2">Register yourself <br /> at Sākār</span>
                        </div>
                        <div className="col-span-3 sm:col-span-1 table sm:border-dashed sm:border-gray-600 sm:border-r">
                            <span className={`text-6xl table-cell p-2 animated animateOnce fadeIn  ${fields.relatedProjects ? 'text-primary' : 'text-white'}`}
                                data-id="3">2</span>
                            <span className="table-cell align-middle text-xl animated animateOnce fadeInDownShort"
                                data-id="4">Create a campaign <br /> for your cause</span>
                        </div>
                        <div className="col-span-3 sm:col-span-1 table">
                            <span className={`text-6xl table-cell p-2 animated animateOnce fadeIn  ${fields.relatedProjects ? 'text-primary' : 'text-white'}`}
                                data-id="5">3</span>
                            <span className="table-cell align-middle text-xl animated animateOnce fadeInDownShort"
                                data-id="6">Start raising funds <br /> with our Tax ID</span>
                        </div>
                    </div>
                    <div className="text-center pt-6 animated animateOnce fadeInUpShort" data-id="6">
                        <a href="" className={`arrow-btn font-bold inline-block  ${fields.relatedProjects ? 'text-primary' : 'text-white'}`}>Register now</a>
                    </div>
                </div>
            </div>
        </>

    )
}






singleProjectPage.displayName = "d";
export default singleProjectPage;

export async function getServerSideProps(context) {
    let slug: string = context.params.slug;
    let clientObj = client();

    const res: any = await clientObj.getEntries({
        content_type: 'projects',
        'fields.slug': slug
    })

    return {
        props: {
            project: res.items[0]
        }
    }

    // console.log({ "slugAtServerProps": context.params });

}