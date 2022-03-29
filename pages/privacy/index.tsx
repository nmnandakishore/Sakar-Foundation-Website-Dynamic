import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
import * as React from 'react'
import { client } from '../../helpers/data-fetcher';


interface IprivacyPolicyProps {
    privacyPolicy: any
}


const privacyPage: React.FC<IprivacyPolicyProps> = ({ privacyPolicy = null }) => {

    console.log({ privacyPolicy });

    return (
        <>


            <div className="page-header px-8 bg-gradient-to-b from-primaryDark to-primaryDark bg-fixed bg-center bg-cover bg-blend-color-burn h-80 ">
                <div className="container">
                    <div className="my-auto text-white pt-36">
                        <a href="" className="title w-full block text-4xl ">Privacy Policy</a>
                    </div>
                </div>
            </div>

            <div className="section bg-section">
                <div className="container">
                    <div className="container animatedParent" data--sequence="300">
                        <div className="mt-6 text-justify animated animateOnce fadeInUpShort" data-id="1">
                            {documentToReactComponents(privacyPolicy)}
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

privacyPage.displayName = "Privacy Policy"

export default privacyPage;


export async function getServerSideProps() {
    // Fetch data from external API

    let clientObj = client();

    // const res: any = await clientObj.getAssets();
    const res: any = await clientObj.getEntries({
        content_type: 'siteInfo'
    });

    return {
        props: {
            privacyPolicy: res.items[0].fields.privacyPolicy,
        }
    }

}