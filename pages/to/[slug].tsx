import Markdown from "react-markdown";
import { NextPage } from "next";

import Layout from "../../components/Layout";
import { initialisePostsApi } from "../../utils/postsApi";
import { Post } from "../../types";

const PostPage: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <>
      <Layout>
        <h1>{post.title}</h1>
        <div className="markdown">
          <Markdown source={post.content} />
        </div>
      </Layout>

      <style jsx global>{`
        .markdown {
          font-family: "Arial";
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
    </>
  );
};

PostPage.getInitialProps = async context => {
  const { slug } = context.query;

  const { getPost } = initialisePostsApi(context.req);

  const post = await getPost(Array.isArray(slug) ? slug[0] : slug);

  return {
    post
  };
};

export default PostPage;
