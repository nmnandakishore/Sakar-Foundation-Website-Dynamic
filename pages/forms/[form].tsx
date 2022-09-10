import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
import { useRouter } from 'next/router'
import * as React from 'react'
import { client } from '../../helpers/data-fetcher'
import Image from 'next/image';

interface ISinglenewsPage {
    news: any,
    latestNews: any
    // context: any
}

const singlenewsPage: React.FC<ISinglenewsPage> = ({ news, latestNews }) => {
    // const router = useRouter()
    // const { slug } = router.query
    let fields = news.fields;

    let latestNewsArr = latestNews.items;

    console.log({ fields: fields });


    return (
        <></>
    )
}


export default singlenewsPage;

export async function getServerSideProps(context) {
    let slug: string = context.params.slug;
    let clientObj = client();

    const res: any = await clientObj.getEntries({
        content_type: 'news',
        'fields.slug': slug
    })

    const latestNewsRes: any = await clientObj.getEntries({
        content_type: 'news',
        limit: 5,
    });

    console.log({ latestNewsRes });

    return {
        props: {
            news: res.items[0],
            latestNews: latestNewsRes
        }
    }

    // console.log({ "slugAtServerProps": context.params });

}