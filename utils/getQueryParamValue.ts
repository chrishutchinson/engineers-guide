import { NextApiRequest } from "next";

export const getQueryParamValue = <T = any>(
  key: string,
  query: NextApiRequest["query"],
  defaultValue?: T
): T => {
  const param = query[key];

  if (!param && defaultValue) {
    return defaultValue;
  }

  return Array.isArray(param)
    ? ((param[0] as unknown) as T)
    : ((param as unknown) as T);
};
