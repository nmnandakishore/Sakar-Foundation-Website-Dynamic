import * as React from 'react'

const sparkPage: React.FC = () => {
    return (
        <>
            <div style={{ backgroundImage: "url(/img/spark.png)" }}
                className="page-header bg-fixed bg-center bg-cover bg-blend-color-burn h-80 ">
                <div className='px-8 w-full h-full bg-gradient-to-b from-transparent via-primary/85 to-primary/100'>
                    <div className="container">
                        <div className="grid grid-cols-2 sm:gap-10">
                            <div className="my-auto text-white col-span-2 sm:col-span-1">
                                <div className="bg-gradient-to-b from-primary to-primaryDark mt-32 -mb-32 p-14">
                                    <p className="text-4xl">Sākār Spark</p>
                                    <p className="mt-6 text-justify">
                                        Sākār Spark lets highschool students start their own fundraiser for their own cause.
                                        The intent behind this program is to make the youth practically learn importance of giving back
                                        the community and keeping a healthy relation with the society.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section mt-40">
                <div className="container">
                    <div className="grid grid-cols-2 sm:gap-10">
                        <div className="col col-span-2 sm:col-span-1">
                            <img src="/img/spark-3.webp" alt="" />
                        </div>
                        <div className="col col-span-2 sm:col-span-1">
                            <div className="heading text-primary">Who can participate</div>
                            <p className="mt-5 text-justify">
                                Anyone committed to the cause of the charity he/she wants to work on can participate in this program.
                            </p>
                            <ol className="list-decimal mt-10 list-inside">
                                <li className="list-item p-1">Donec in volutpat erat. Praesent semper non nulla quis maximus.</li>
                                <li className="list-item p-1"> velit augue, hendrerit venenatis orci eu, hendrerit dignissim lorem.</li>
                                <li className="list-item p-1">Etiam in fringilla augue, non laoreet ex.</li>
                                <li className="list-item p-1">Pellentesque mollis placerat aliquam.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section bg-gray-200">
                <div className="container">
                    <div className="grid grid-cols-2 sm:gap-10">
                        <div className="col col-span-2 sm:col-span-1">
                            <div className="heading text-primary">The Benefits</div>
                            <p className="mt-5 text-justify">
                                Maecenas rutrum tellus dui, at pulvinar augue blandit lacinia. Etiam in fringilla augue, non laoreet ex.
                                Nunc
                                velit augue, hendrerit venenatis orci eu, hendrerit dignissim lorem. Morbi ultrices et felis nec
                                gravida.
                                Suspendisse venenatis magna metus, non malesuada justo dapibus vitae. Morbi scelerisque eget velit vitae
                                feugiat. Donec in volutpat erat. Praesent semper non nulla quis maximus. Pellentesque mollis placerat
                                aliquam.
                            </p>
                            <ol className="list-decimal mt-10 list-inside">
                                <li className="list-item p-1">Donec in volutpat erat. Praesent semper non nulla quis maximus.</li>
                                <li className="list-item p-1"> velit augue, hendrerit venenatis orci eu, hendrerit dignissim lorem.</li>
                                <li className="list-item p-1">Etiam in fringilla augue, non laoreet ex.</li>
                                <li className="list-item p-1">Pellentesque mollis placerat aliquam.</li>
                            </ol>
                        </div>
                        <div className="col col-span-2 sm:col-span-1">
                            <img src="/img/spark-2.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="section bg-white">
                <div className="container">
                    <div className="heading text-center text-primary">
                        How do I get started?
                    </div>
                    <div className="grid grid-cols-3 sm:gap-16 mt-16 text-center sm:text-left">
                        <div className="col-span-3 sm:col-span-1 table sm:border-dashed sm:border-gray-600 sm:border-r">
                            <span className="text-6xl text-primary table-cell p-2">1</span>
                            <span className="table-cell align-middle text-xl">Register yourself <br /> at Sākār</span>
                        </div>
                        <div className="col-span-3 sm:col-span-1 table sm:border-dashed sm:border-gray-600 sm:border-r">
                            <span className="text-6xl text-primary table-cell p-2">2</span>
                            <span className="table-cell align-middle text-xl">Create a campaign <br /> for your cause</span>
                        </div>
                        <div className="col-span-3 sm:col-span-1 table">
                            <span className="text-6xl text-primary table-cell p-2">3</span>
                            <span className="table-cell align-middle text-xl">Start raising funds <br /> with our Tax
                                ID</span>
                        </div>
                    </div>
                    <div className="text-center pt-6">
                        <a href="/new-fundraiser" className="arrow-btn text-primary font-bold">Register now</a>
                    </div>
                </div>
            </div>
        </>

    )
}

sparkPage.displayName = "Spark Page";
export default sparkPage;