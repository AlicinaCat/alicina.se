import About from "@/components/about";
import Contact from "@/components/contact";
import Homepage from "@/components/homepage";
import Portfolio from "@/components/portfolio";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>alicina.se</title>
        <meta name="description" content="alicina.se homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homepage />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

//checklist - in order of importance

//add navigation
//fix scrolling to url section
//fix typings
//change favicon?
//add seo / schema markup?
//add 404 page
//add accessibility optimizations?
//add lint?
//add coherent prettier?
//add tests?
