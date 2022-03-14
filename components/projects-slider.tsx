import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import ProjectCard from "./project-card";

interface IProjectSlider {
    projects: string
}

const ProjectSlider: React.FC<IProjectSlider> = ({ projects }) => {
    console.log({ relatedProjects: projects })
    // let projectItems = projects.items;
    let projectItems = projects;

    return (
        <>
            <Splide
                options={{
                    type: 'loop',
                    focus: 'center',
                    autoWidth: true,
                    start: 1,
                    autoplay: true,
                    height: '450px',
                    gap: '20px'
                }}

                className="mt-12">

                {projectItems.map((projectItem) => {
                    return (
                        <SplideSlide key={projectItem.sys.id}>
                            <ProjectCard projectItem={projectItem}></ProjectCard>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </>
    )
}

export default ProjectSlider;

