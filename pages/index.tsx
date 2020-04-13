import { NextPage } from "next";
import Head from "next/head";

import Layout from "../components/Layout";

const Index: NextPage = () => {
  return (
    <>
      <Head key="index">
        <title>An engineer's guide to...</title>
        <meta
          name="description"
          content="Straightforward guides to core concepts for all software engineers"
        />
      </Head>
      <Layout>
        <h2>Coming soon 🎉🎉</h2>
      </Layout>
    </>
  );
};

export default Index;
