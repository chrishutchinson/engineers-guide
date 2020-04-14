import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import { getGuides } from "../guides";

const Index: NextPage = () => {
  return (
    <>
      <Head key="index">
        <title>An Engineer's Guide to...</title>
        <meta
          name="description"
          content="Straightforward guides to core concepts for all software engineers"
        />
      </Head>

      <Layout>
        <h2>📗 The guides</h2>
        <ul>
          {getGuides().map((guide) => (
            <li key={guide.slug}>
              <Link href={`/to/${guide.slug}`}>
                <a>{guide.title}</a>
              </Link>
            </li>
          ))}
          <li>
            <em>Launch guides are coming soon...</em>
          </li>
        </ul>
      </Layout>
    </>
  );
};

export default Index;
