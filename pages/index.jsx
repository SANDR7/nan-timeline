import Head from "next/head";
import { useRouter } from "next/router";
import { tab_title } from "../hooks/constants";

import Content from "../components/layout/content";
import MainTitle from "../components/layout/partials/MainTitle";
import RouteButton from "../components/functional/RouteButton";

// dependancies
import { getSession, useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  console.log(user);
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
        <div className="flex justify-end gap-12">
          <RouteButton route={"Registreer"} name="Registreer" border />
          {!user ? (
            <RouteButton route={"api/auth/login"} name="Login" />
          ) : ( <RouteButton route={"api/auth/logout"} name="Logout" />
          )}
        </div>
        {user && (
          <>
          <img src={user.picture} alt="tset" />
          <RouteButton route={"/dashboard"} />
          <p>
            {user.name}
            <br />
            {user.email}
          </p>
          </>
        )}
      </Content>
    </>
  );
}