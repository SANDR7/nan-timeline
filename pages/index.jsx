import Head from "next/head";
import { tab_title } from "../hooks/constants";

import Content from "../components/layout/content";
import MainTitle from '../components/layout/partials/MainTitle'

export default function Home() {
  return (
    <>
      <Head>
        <title>{tab_title} | Home</title>
      </Head>

      <Content>
        <MainTitle />
        <h1>tesin</h1>
      </Content>
    </>
  );
}
