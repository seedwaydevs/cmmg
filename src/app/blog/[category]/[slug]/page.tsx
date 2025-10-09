import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "@/app/blog/utils";
import Header from "@/components/Header";
import Container from "@/components/Container";
import BreadCrumb from "@/components/BreadCrumbs";
import { CustomMDX } from "@/components/mdx";
import { Metadata } from "next";
// import ReportViews from "@/components/ReportViews";
import { baseUrl } from "@/app/sitemap";
// import { getComments } from "@/lib/action";
// import { CommentForm } from "@/components/CommentForm";
// import { auth } from "@/lib/auth";
// import { Session } from "next-auth";
// import DeleteComment from "@/components/DeleteComment";

// ✅ Static params for dynamic routes
export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    category: post.metadata.category,
    slug: post.slug,
  }));
}

// ✅ Metadata generation
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;

  const post = getBlogPosts().find(
    (p) =>
      p.slug === slug &&
      p.metadata.category.toLowerCase() === category.toLowerCase()
  );

  if (!post) return { title: "Post Not Found" };

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post?.metadata.category}/${post?.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

// ✅ Page component
export default async function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  //const session = (await auth()) as Session;
  //console.log(session?.user);
  const post = getBlogPosts().find(
    (p) =>
      p.slug === slug &&
      p.metadata.category.toLowerCase() === category.toLowerCase()
  );

  if (!post) notFound();

  // Fetch comments from Prisma (view count handled by ReportViews)
  //const comments = await getComments(slug);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.metadata.category}/${post.slug}`,
            author: {
              "@type": "Person",
              name: "CMMG Blog",
            },
          }),
        }}
      />
      {/* <ReportViews
        category={post.metadata.category}
        slug={post.slug}
        title={post.metadata.title}
      /> */}
      <Header>
        <Container>
          <BreadCrumb category={post.metadata.category} slug={post.slug} />
          <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
            {post.metadata.title}
          </h1>
          <div className="flex justify-between items-center mt-2 mb-4 text-sm">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
          </div>
        </Container>
      </Header>
      <Container>
        <article
          className="prose prose-lg prose-neutral dark:prose-invert max-w-none py-5 
  prose-headings:font-semibold prose-headings:tracking-tight
  prose-p:text-neutral-700 dark:prose-p:text-neutral-300
  prose-p:leading-7 prose-p:mb-4
  prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
  prose-strong:text-neutral-900 dark:prose-strong:text-neutral-100"
        >
          <CustomMDX source={post.content} />
        </article>
        {/* <h2 className="text-xl font-semibold mt-6 mb-2">Comments</h2> */}

        {/* {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          <ul className="space-y-4">
            {comments.map((comment) => (
              <li
                key={comment.id}
                className="bg-gray-100 p-2 flex flex-col  gap-2 rounded"
              >
                <p>{comment.content}</p>
                <p className="text-sm text-gray-500">
                  By {comment.user.name || "Anonymous"} on{" "}
                  {formatDate(comment.createdAt.toISOString(), false)}
                </p>
                {comment.user.email === session.user?.email && (
                  <DeleteComment
                    id={comment.id}
                    email={session.user.email as string}
                    url={`${baseUrl}/blog/${post.metadata.category}/${post.slug}`}
                  />
                )}
              </li>
            ))}
          </ul>
        )}
        <CommentForm slug={slug} session={session} category={category} /> */}
      </Container>
    </>
  );
}
