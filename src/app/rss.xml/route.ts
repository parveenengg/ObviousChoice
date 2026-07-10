import { NextResponse } from "next/server";
import { getAllContent } from "@/lib/mdx";

export async function GET() {
  const posts = getAllContent("thinking");
  const siteUrl = "https://parveenkumar.co";

  const xmlItems = posts
    .map((post) => {
      const pubDate = new Date(post.frontmatter.date).toUTCString();
      return `
        <item>
          <title><![CDATA[${post.frontmatter.title}]]></title>
          <link>${siteUrl}/thinking/${post.slug}</link>
          <guid isPermaLink="true">${siteUrl}/thinking/${post.slug}</guid>
          <pubDate>${pubDate}</pubDate>
          <description><![CDATA[${post.frontmatter.summary}]]></description>
        </item>
      `;
    })
    .join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Parveen Kumar | B2B Authority &amp; AI Growth Systems</title>
        <link>${siteUrl}</link>
        <description>Essays and playbooks on B2B positioning, authority marketing, and AI growth systems.</description>
        <language>en-us</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
        ${xmlItems}
      </channel>
    </rss>
  `.trim();

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
