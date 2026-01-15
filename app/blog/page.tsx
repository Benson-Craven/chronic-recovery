import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Image from 'next/image'

export default function Blog() {
  const allPostsData = getSortedPostsData()
  return (
    <div className="bg-background font-Satoshi text-primary-text min-h-screen">
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-butler font-bold mb-8 text-center uppercase">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPostsData.map(({ id, date, title, excerpt, coverImage }) => (
            <div key={id} className="bg-white border-2 border-black rounded-[25px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Link href={`/blog/${id}`}>
                <div>
                    <Image src={coverImage} alt={title} width={500} height={300} className="w-full h-48 object-cover" />
                    <div className="p-6">
                    <h2 className="text-2xl font-butler font-bold mb-2">{title}</h2>
                    <p className="text-gray-600 mb-4">{date}</p>
                    <p>{excerpt}</p>
                    </div>
                </div>
                </Link>
            </div>
            ))}
        </div>
        </div>
    </div>
  )
}
