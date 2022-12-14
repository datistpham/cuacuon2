import { Fragment, useEffect, useState } from "react";
import Router from "next/router";
import Head from "next/head";
import "../styles/globals.css";
import "./style.sass";
import "../styles/globals.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const SERVER_URL = "https://cuacuonserver.herokuapp.com";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
