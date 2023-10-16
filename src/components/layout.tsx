import Head from "next/head";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from "@/styles/Home.module.scss";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.app}>
            {children}
          </div>

      </main>
    </>
  );
};

export default Layout;
