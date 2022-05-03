import React from 'react'
import { useRouter } from 'next/router'
import Layout from '/components/Layout';


const SingleNews = () => {
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <Layout>
                {router.query.slug}
            </Layout>
        </div>
    )
}

export default SingleNews;