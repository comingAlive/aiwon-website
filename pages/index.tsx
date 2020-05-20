import React, {useEffect, useState} from "react";
import Loader from "../components/Loader";
import Login from "../components/Login";
import Footer from "../components/Footer";
import Head from 'next/head'


const IndexPage = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2800)
    }, [])

    return <>    <Head>
        <title>Aiwon</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <link rel="shortcut icon" href="/static/favicon.ico"/>
    </Head>
        {loading ? <Loader/> : <><Login/><Footer/></>}</>
}
export default IndexPage

export async function getStaticProps() {
    return {
        props: {}, // will be passed to the page component as props
    }
}