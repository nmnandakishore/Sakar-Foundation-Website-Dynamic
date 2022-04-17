import Link from "next/link";

interface IProjectCard {
    projectItem: any
}

const ProjectCard: React.FC<IProjectCard> = ({ projectItem }) => {
    let fields: any = projectItem.fields;
    let raisedPercent: number = (fields.raisedAmount / fields.targetAmount) * 100;
    return (
        <Link
            href={{
                pathname: '/project/[slug]',
                query: { slug: fields.slug },
            }}
        >
            <div className="project col-span-1 mt-0 pt-0 bg-white text-left w-72 pb-8 cursor-pointer">
                <div className="w-full h-52 saturate-150" style={{ backgroundImage: `url(${fields?.photograph?.fields?.file?.url ?? '/img/placeholder.png'})`, backgroundSize: "cover", overflow: "none", backgroundPosition: "center" }}>
                    <div className="w-full h-52 p-4 p- bg-gradient-to-t from-primaryDark/60 " >
                        <div className="title w-full h-32"></div>
                        {/* <Link
                            href={{
                                pathname: '/project/[slug]',
                                query: { slug: fields.slug },
                            }}
                        > */}
                        <a className="title w-full min-h-max text-lg text-white">{fields.title}</a>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="w-100 overflow-hidden h-auto mt-8 mb-1 px-6 text-gray-800 z-50 text-sm" >
                    <div className="py-1"><span className="font-bold"> Campeigner : </span> {fields.campaigner}</div>
                    <div className="py-1"><span className="font-bold"> Amount Raised : </span> {fields.raisedAmount}</div>
                </div>
                <div className="w-100 overflow-hidden h-auto my-1 mt-3 px-6 text-gray-800 z-50 text-sm" >
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
                    {/* <Link
                    href={{
                        pathname: '/project/[slug]',
                        query: { slug: fields.slug },
                    }}
                >
                    <a className="w- arrow-btn inline-block h-10 bg-primaryDark text-center text-white py-2 px-4" data-id="3">View</a>
                </Link> */}

                    {/* <Link
                    href={{
                        pathname: '/project/[slug]/donate',
                        query: { slug: fields.slug },
                    }}
                >
                    <a className="w-1/2 arrow-btn inline-block h-10 bg-primaryDark text-center text-white py-2 bg-plants/95 hover:opacity-95 transition-all px-4" data-id="3">Donate</a>
                </Link> */}
                </div>
            </div>
        </Link >
    )
}

export default ProjectCard;