import { env } from "@/env";

const API_URL = env.API_URL;

export const blogService = {
  getBlogPost: async function () {
    try {
      //* SSG => static
      // const res = await fetch(`${API_URL}/posts`);

      //* ISR => not Static | not Dynamic
      const res = await fetch(`${API_URL}/posts`, { next: { revalidate: 10 } });

      //* SSR => Dynamic
      // const res = await fetch(`${API_URL}/posts`, { cache: "no-store" });

      const data = await res.json();

      /* Example
        if (data.suceess) {
            return
        }
        */
      return { data: data, error: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: { message: "Something went wrong" } };
    }
  },
};
