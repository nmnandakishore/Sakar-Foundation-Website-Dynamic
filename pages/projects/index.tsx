import * as React from 'react'
import ProjectCard from '../../components/project-card';
import { client } from '../../helpers/data-fetcher';


interface IProjectsPageProps {
    projects: any
}


const projectsPage: React.FC<IProjectsPageProps> = ({ projects = null }) => {
    let projectItems = projects?.items ?? [];
    return (
        <>

            <div className="page-header px-8 bg-primaryDark">
                <div className="container">
                    <div className="grid grid-cols-2 sm:gap-10">
                        <div className="my-auto text-white col-span-2 sm:col-span-1 animatedParent" data-sequence="300">
                            <p className="heading animated animateOnce fadeInDownShort" data-id="1">Projects</p>
                            <p className="mt-6 text-justify animated animateOnce fadeInLeftShort" data-id="2">
                                Through projects caried out by youths, under the initiative, Sākār Spark, we not only are able to reach
                                issues in the society across all cultures, territory, status and locations. Along with this we are also able to
                                make young minds realize the importance of charity in the society.
                            </p>
                        </div>
                        <div className="text-4xl my-auto text-white col-span-2 sm:col-span-1 animatedParent" data--sequence="300">
                            <img className="mt-16 -mb-24 animated animateOnce fadeInRightShort" data-id="1" src="/img/projects.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="section mt-16">
                <div className="container animatedParent" data--sequence="300">
                    <p className="heading text-primary animated animateOnce fadeInDownShort" data-id="1">Projects we are working on</p>
                    <div className="mt-6 text-justify animated animateOnce fadeInUpShort" data-id="1">

                    </div>
                </div>
            </div>

            <div className="section overflow-section bg-gray-200">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-8 pb-20 animatedParent" data--sequence="100">
                        {projectItems.map((projectItem, index) => {
                            return (
                                <div className="animated animateOnce fadeInUpShort" key={projectItem.sys.id} data-id={index}>
                                    <ProjectCard projectItem={projectItem}></ProjectCard>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="section bg-white">
                <div className="container animatedParent" data-sequence="100">
                    <div className="heading text-center text-primary animated animateOnce fadeInDownShort" data-id="1">
                        Start your own fundraiser
                    </div>
                    <div className="grid grid-cols-3 sm:gap-16 mt-16 text-center sm:text-left animatedParent"
                        data-sequence="300">
                        <div className="col-span-3 sm:col-span-1 table sm:border-dashed sm:border-gray-600 sm:border-r">
                            <span className="text-6xl text-primary table-cell p-2 animated animateOnce fadeIn"
                                data-id="1">1</span>
                            <span className="table-cell align-middle text-xl animated animateOnce fadeInDownShort"
                                data-id="2">Register yourself <br /> at Sākār</span>
                        </div>
                        <div className="col-span-3 sm:col-span-1 table sm:border-dashed sm:border-gray-600 sm:border-r">
                            <span className="text-6xl text-primary table-cell p-2 animated animateOnce fadeIn"
                                data-id="3">2</span>
                            <span className="table-cell align-middle text-xl animated animateOnce fadeInDownShort"
                                data-id="4">Create a campaign <br /> for your cause</span>
                        </div>
                        <div className="col-span-3 sm:col-span-1 table">
                            <span className="text-6xl text-primary table-cell p-2 animated animateOnce fadeIn"
                                data-id="5">3</span>
                            <span className="table-cell align-middle text-xl animated animateOnce fadeInDownShort"
                                data-id="6">Start raising funds <br /> with our Tax ID</span>
                        </div>
                    </div>
                    <div className="text-center pt-6 animated animateOnce fadeInUpShort" data-id="6">
                        <a href="" className="arrow-btn text-primary font-bold inline-block">Register now</a>
                    </div>
                </div>
            </div>


        </>
    )
}

projectsPage.displayName = "Projects"

export default projectsPage;


export async function getServerSideProps() {
    // Fetch data from external API

    let clientObj = client();

    // const res: any = await clientObj.getAssets();
    const res: any = await clientObj.getEntries({
        content_type: 'projects'
    });

    return {
        props: {
            projects: res,
        }
    }

}