import React from "react";
import Head from "next/head";
import {Footer} from "../layout/footer/footer";
import Loader from "../components/loader/loader";

const Next = () => {
  return (
    <>
      <Head>
        <title>Aiwon</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      <Loader/>
      <Footer />
    </>
  );
};

export default Next;
