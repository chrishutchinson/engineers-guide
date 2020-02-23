import { NextApiRequest, NextApiResponse } from "next";

import { posts } from "../../fixtures/posts";
import { getQueryParamValue } from "../../utils/getQueryParamValue";

const validateParams = (params: { slug?: string }) => {
  if (!params.slug) {
    throw new Error("The 'slug' query parameter is required");
  }
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  const params = {
    slug: getQueryParamValue<string>("slug", req.query)
  };

  try {
    validateParams(params);

    const post = posts.find(p => p.slug === params.slug);

    if (!post) {
      res.status(404).send(`No post found matching slug '${params.slug}'`);
      return;
    }

    res.status(200).json(post);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
