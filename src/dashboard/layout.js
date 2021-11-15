import Overlay from "./provider/overlay";
import TopNavigation from "./topnavigation";
import SideNavigation from "./sidenavigation";
import DashboardProvider from "./provider/context";
import SigninPage from "../../pages/signin";
import React, { useState, useContext } from "react";
import Head from "next/head";
import { AuthContext } from "../../appstate/AuthProvider";
const style = {
  container: `h-screen overflow-hidden relative`,
  mainContainer: `bg-body flex flex-col h-screen pl-0 w-full lg:w-99`,
  main: `bg-gray-100 h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:px-4 lg:px-6 lg:rounded-tl-3xl`,
};

export default function DashboardLayout({ children }) {
  const { user, signout } = useContext(AuthContext);
  return (
    <DashboardProvider>
      <Head>
        <title>KMITL REVIEWER ADMIN</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      {user ? (<>
        <div className={style.container}>
        <div className="flex items-start">
          <Overlay />
          <SideNavigation mobilePosition="right" />
          <div className={style.mainContainer}>
            <TopNavigation user={user} />
            <main className={style.main}>{children}</main>
          </div>
        </div>
      </div>
      </>) : <SigninPage></SigninPage>}
      
    </DashboardProvider>
  );
}
