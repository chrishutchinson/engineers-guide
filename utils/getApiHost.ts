import { NextPageContext } from "next";

export const getApiHost = (req: NextPageContext["req"] | undefined) => {
  if (!req && typeof window !== "undefined") return "";

  const host = req
    ? req.headers["x-forwarded-host"] || req.headers.host
    : window.location.host;

  const proto = req
    ? req.headers["x-forwarded-proto"] || "http"
    : window.location.protocol.slice(0, -1);

  return `${proto}://${host}`;
};
