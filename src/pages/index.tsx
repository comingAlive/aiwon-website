import React, { useEffect, useState } from "react";
import Loader from "../components/loader/loader";
import Head from "next/head";
import { Footer } from "../layout/footer/footer";
import Login from "../containers/login";

const IndexPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2600);
  }, []);

  return (
    <>
      <Head>
        <title>Aiwon</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Login />
          <Footer />
        </>
      )}
    </>
  );
};
export default IndexPage;
