import React from "react";
import Head from "next/head";
import { tab_title } from "../hooks/constants";
import Content from "../components/layout/content";
import MainTitle from "../components/layout/partials/MainTitle";

import RouteButton from "../components/functional/RouteButton";

const Login = () => {
  return (
    <>
      <Head>
        <title>{tab_title} | Login</title>
      </Head>

      <Content>
        <MainTitle title="Login" />
        <form>
          <input type="submit" className="custom-button bg-red" />
        </form>
      </Content>
    </>
  );
};

export default Login;
