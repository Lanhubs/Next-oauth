import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { Box } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <div className={styles.parentContainer}>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            <MantineProvider>
              <Component {...pageProps} />
            </MantineProvider>
          </main>
        </div>
      </SessionProvider>
    </>
  );
}

export default MyApp;
