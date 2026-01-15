import { getPostData, getAllPostIds } from '../../lib/posts'
import Head from 'next/head'
import Image from 'next/image'

export async function generateStaticParams() {
  const paths = getAllPostIds()
  return paths
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug)
  return (
    <div className="bg-background font-Satoshi text-primary-text min-h-screen">
        <div className="container mx-auto px-4 py-8">
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article className="bg-white border-2 border-black rounded-[25px] p-8">
            <h1 className="text-4xl font-butler font-bold mb-4">{postData.title}</h1>
            <div className="text-gray-600 mb-4">
            {postData.date}
            </div>
            {postData.coverImage && (
                <div className="mb-8">
                    <Image src={postData.coverImage} alt={postData.title} width={1200} height={600} className="w-full rounded-lg" />
                </div>
            )}
            <div className="prose lg:prose-xl max-w-none prose-h1:font-butler prose-h2:font-butler prose-h3:font-butler prose-a:text-secondary-text" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
        </div>
    </div>
  )
}
