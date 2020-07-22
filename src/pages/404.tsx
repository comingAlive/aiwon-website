import React from "react";
import Head from "next/head";

// TODO: need to refactor entire error page //

const Error = () => {
  return (
    <>
      <Head>
        <title>Aiwon</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      <div
        className={"container"}
        style={{ fontSize: "30px", color: "#9dabc0" }}
      >
        An error 404 occurred on server
      </div>
    </>
  );
};
export default Error;
