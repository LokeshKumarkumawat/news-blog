import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const About = () => {
    return (
        <div>
            <Layout title="About Page">
                <h1>This Is About Page</h1>
                <Link href="/" passHref >Home</Link>
            </Layout>
        </div>
    )
}

export default About