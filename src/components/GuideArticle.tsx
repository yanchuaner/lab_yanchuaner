import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getGuidePair } from "@/lib/content-server";

export async function GuideArticle({ id }: { id: string }) {
  const pair = await getGuidePair(id);
  const options = { mdxOptions: { remarkPlugins: [remarkGfm] } };
  return <div className="guide-article" id="lesson-1">
    <div className="locale-content locale-zh"><MDXRemote source={pair.zh.body} options={options} /></div>
    <div className="locale-content locale-en"><MDXRemote source={pair.en.body} options={options} /></div>
  </div>;
}
