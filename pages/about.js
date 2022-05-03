import React from 'react'
import Link from 'next/link'

const About = () => {
    return (
        <div>
            <h1>This Is About Page</h1>
            <Link href="/" passHref >Home</Link>
        </div>
    )
}

export default About