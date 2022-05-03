import React from 'react'
import { useRouter } from 'next/router'

const SingleNews = () => {
    const router = useRouter();
    console.log(router);
    return (
        <div>{router.query.slug}</div>
    )
}

export default SingleNews;