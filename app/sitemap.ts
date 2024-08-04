export default async function sitemap() {
  //   let blogs = getBlogPosts().map((post) => ({
  //     url: `https://leerob.io/blog/${post.slug}`,
  //     lastModified: post.metadata.publishedAt,
  //   }));

  let routes = ["", "/about"].map((route) => ({
    url: `https://botbee-labs.vercel.app${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
