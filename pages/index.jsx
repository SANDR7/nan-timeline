import Head from "next/head";
import { tab_title } from "../hooks/constants";

import Content from "../components/layout/content";
import MainTitle from "../components/layout/partials/MainTitle";
import RouteButton from "../components/functional/RouteButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>{tab_title} | Home</title>
      </Head>

      <Content>
        <div className="mb-36">
          <MainTitle />
          <p className="w-7/12">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.{" "}
          </p>
        </div>
        <div className="flex justify-end gap-6">
          <RouteButton route={"Registreer"} name="Registreer" border />
          <RouteButton route={"login"} name="Login" />
        </div>
      </Content>
    </>
  );
}
