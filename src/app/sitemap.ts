// import { getPosts } from '~/libs/post-utils'

export default async function sitemap() {
  //   const articles = getPosts().map((p) => ({
  //     url: `https://jabed.dev/posts/${p.slug}`,
  //     lastModified: p.metadata.date,
  //   }))

  //   const projects = getPosts().map((p) => ({
  //     url: `https://jabed.dev/projects/${p.slug}`,
  //     lastModified: p.metadata.date,
  //   }))

  const routes = ['', '/posts', '/projects'].map((route) => ({
    url: `https://sush.me${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}
