import Head from "next/head";
import { tab_title } from "../hooks/constants";

import Content from "../components/layout/content";

export default function Home() {
  return (
    <>
      <Head>
        <title>{tab_title} | Home</title>
      </Head>

      <Content>testing</Content>
    </>
  );
}
