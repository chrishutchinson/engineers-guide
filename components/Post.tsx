import Head from "next/head";
import { PostMeta } from "../types";
import Layout from "./Layout";

const Post: React.FC<{
  meta: PostMeta;
}> = ({ children, meta }) => {
  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="date" content={meta.publishedDate.toISOString()} />
      </Head>

      {children}
    </Layout>
  );
};

export default Post;
