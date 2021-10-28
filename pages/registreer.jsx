import Head from "next/head";
import { tab_title } from "../hooks/constants";

import Content from "../components/layout/content";
import MainTitle from "../components/layout/partials/MainTitle";
import RouteButton from "../components/functional/RouteButton";
const Registreer = () => {
  return (
    <>
      <Head>
        <title>{tab_title} | Registreer</title>
      </Head>
      <Content>Sub</Content>
    </>
  );
};

export default Registreer;
