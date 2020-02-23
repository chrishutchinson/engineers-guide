import { NextPage } from "next";
import Layout from "../components/Layout";
import Link from "next/link";

import { initialisePostsApi } from "../utils/postsApi";
import { Post } from "../types";

const PostLink: React.FC<{ slug: string; title: string }> = props => (
  <li>
    <Link href="/to/[slug]" as={`/to/${props.slug}`}>
      <a>{props.title}</a>
    </Link>

    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        font-family: "Arial";
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

const Index: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {posts.map(p => (
          <PostLink title={p.title} slug={p.slug} key={p.slug} />
        ))}
      </ul>

      <style jsx>{`
        h1 {
          font-family: "Arial";
        }

        ul {
          padding: 0;
          list-style-type: none;
        }
      `}</style>
    </Layout>
  );
};

Index.getInitialProps = async context => {
  const { getPosts } = initialisePostsApi(context.req);

  const posts = await getPosts();

  return {
    posts
  };
};

export default Index;
