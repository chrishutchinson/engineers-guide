import Head from "next/head";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { PostMeta } from "../types";
import Layout from "./Layout";

dayjs.extend(advancedFormat);

const Post: React.FC<{
  meta: PostMeta;
}> = ({ children, meta }) => {
  const dateString = dayjs(
    meta.updatedDate ? meta.updatedDate : meta.publishedDate
  ).format("dddd MMMM Do, YYYY");

  return (
    <>
      <Head>
        <title>An Engineer's Guide to... {meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="date" content={meta.publishedDate.toISOString()} />
      </Head>

      <Layout>
        <div id="main">
          <h2>{meta.title}</h2>
          <aside>
            <time
              title={`${
                meta.updatedDate ? "Last updated" : "Originally published"
              } on ${dateString}`}
            >
              📆 {dateString}
              {meta.updatedDate ? " [Updated]" : null}
            </time>
          </aside>

          {children}
        </div>

        <style jsx global>
          {`
            h2 {
              font-size: 40px;
            }

            aside {
              margin-bottom: 22px;
            }

            aside time {
              font-family: "IBM Plex Mono", Helvetica;
              font-size: 14px;
            }

            p {
              font-size: 20px;
              line-height: 2em;
              margin-bottom: 1.5em;
              max-width: 710px;
            }
          `}
        </style>
      </Layout>
    </>
  );
};

export default Post;
