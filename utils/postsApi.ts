import fetch from "cross-fetch";
import { NextApiRequest, NextPageContext } from "next";

import { Post } from "../types";
import { getApiHost } from "./getApiHost";

export const initialisePostsApi = (req?: NextPageContext["req"]) => {
  const apiHost = getApiHost(req);

  const getPosts = (): Promise<Post[]> => {
    return fetch(`${apiHost}/api/posts`).then(res => res.json());
  };

  const getPost = (slug: string): Promise<Post> => {
    return fetch(`${apiHost}/api/post?slug=${slug}`).then(res => res.json());
  };

  return {
    getPost,
    getPosts
  };
};
