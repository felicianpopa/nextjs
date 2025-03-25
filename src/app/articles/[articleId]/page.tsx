import Link from "next/link";

const NewsArticle = async ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang: string }>;
}) => {
  const { articleId } = await params;
  const { lang } = await searchParams;
  return (
    <div>
      <h1>News article {articleId}</h1>
      <p>Reading in {lang}</p>
      <ul className="flex space-x-4 text-blue-400">
        <li>
          <Link href="/articles/breaking-news-123?lang=en">
            Read in English
          </Link>
        </li>
        <li>
          <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
        </li>
      </ul>
    </div>
  );
};

export default NewsArticle;
