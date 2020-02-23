import { NextApiRequest, NextApiResponse } from "next";

import { posts } from "../../fixtures/posts";
import { getQueryParamValue } from "../../utils/getQueryParamValue";

const validateParams = (params: { next: string; cursor?: string }) => {
  if (!Number.isInteger(parseInt(params.next))) {
    throw new Error("Param 'next' must be an integer");
  }

  if (parseInt(params.next) > 10 || parseInt(params.next) < 1) {
    throw new Error("Param 'next' must be between 1 and 10");
  }
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const params = {
      next: getQueryParamValue<string>("next", req.query, "10"),
      cursor: getQueryParamValue<string>("cursor", req.query)
    };

    validateParams(params);

    const cursorIndex = params.cursor
      ? posts.findIndex(p => p.slug === params.cursor)
      : 0;

    const postsToReturn = posts.slice(cursorIndex, parseInt(params.next));

    res.status(200).json(postsToReturn);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
