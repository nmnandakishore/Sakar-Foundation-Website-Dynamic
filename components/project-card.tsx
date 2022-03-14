import Link from "next/link";

interface IProjectCard {
    projectItem: Object
}

const ProjectCard: React.FC<IProjectCard> = ({ projectItem }) => {
    let fields: Object = projectItem.fields;
    let raisedPercent: number = (fields.raisedAmount / fields.targetAmount) * 100;
    return (
        <div className="project col-span-1 mt-0 pt-0 bg-white text-left ">
            <div className="w-full h-52" style={{ backgroundImage: `url(${fields?.photograph?.fields?.file?.url ?? '/img/placeholder.jpg'})`, backgroundSize: "cover", overflow: "none" }}>
                <div className="w-full h-52 p-4 bg-gradient-to-t from-primary " >
                    <div className="title w-full h-36"></div>
                    <a href="" className="title w-full min-h-max text-lg text-white">{fields.title}</a>
                </div>
            </div>
            <div className="w-100 overflow-hidden h-auto mt-2 mb-1 px-4 text-gray-800 z-50 text-sm" >
                <span className="font-bold"> Campeigner : </span> {fields.campaigner}
            </div>
            <div className="w-100 overflow-hidden h-auto my-1 px-4 text-gray-800 z-50 text-sm" >
                <span className="font-bold"> Amount Raised : </span> {fields.raisedAmount}
                <div className="mt-3 grid grid-cols-2 text-slate-500 text-sm">
                    <div className="col-span-1">$0</div>
                    <div className="col-span-1 text-right">${fields.targetAmount}</div>
                </div>
                <div className="progress my-2 mx-2 block w-100 h-2 bg-slate-300" style={{ borderRadius: '13px' }}>
                    <div className="progress-value bg-gradient-to-r from-primary to-sky-500 h-2"
                        style={{ width: `${raisedPercent}` + "%", borderRadius: '13px' }}
                    ></div>
                </div>
            </div>

            <div >
                <Link
                    href={{
                        pathname: '/project/[slug]',
                        query: { slug: fields.slug },
                    }}
                >
                    <a className="w-1/2 arrow-btn inline-block h-10 bg-primaryDark text-center text-white py-2 px-4" data-id="3">View</a>
                </Link>

                <Link
                    href={{
                        pathname: '/project/[slug]/donate',
                        query: { slug: fields.slug },
                    }}
                >
                    <a className="w-1/2 arrow-btn inline-block h-10 bg-primaryDark text-center text-white py-2 bg-plants/95 hover:opacity-95 transition-all font-bold  px-4" data-id="3">Donate</a>
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard;