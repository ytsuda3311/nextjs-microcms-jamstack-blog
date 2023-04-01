import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "blog-njs",
  apiKey: process.env.API_KEY,
});

