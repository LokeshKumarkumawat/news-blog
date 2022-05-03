import React from 'react'
import Head from 'next/head'

const Layout = ({ title, description, keywords, children }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            {children}
        </div>
    )
}

export default Layout;

Layout.defaultProps = {
    title: 'My Blog',
    description: 'This is a description',
    keywords: "news1, news2",
}