import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "content/blog")

export type PostData = {
    id: string
    date: string
    title: string
    excerpt: string
    coverImage: string
}

export function parseBlogDate(date: string) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) return date

    const [day, month, year] = date.split("-")
    if (!day || !month || !year) return date

    return `${year}-${month}-${day}`
}

export function formatBlogDate(date: string) {
    const parsedDate = new Date(`${parseBlogDate(date)}T00:00:00.000Z`)

    if (Number.isNaN(parsedDate.getTime())) return date

    return new Intl.DateTimeFormat("en-IE", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(parsedDate)
}

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "")

        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const fileStats = fs.statSync(fullPath)

        const matterResult = matter(fileContents)

        return {
            id,
            modifiedDate: fileStats.mtime.toISOString(),
            ...(matterResult.data as Omit<PostData, "id">),
        }
    })

    return allPostsData.sort((a, b) => {
        if (parseBlogDate(a.date) < parseBlogDate(b.date)) {
            return 1
        }
        return -1
    })
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map((fileName) => ({
        slug: fileName.replace(/\.md$/, ""),
    }))
}

export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const fileStats = fs.statSync(fullPath)

    const matterResult = matter(fileContents)

    const processedContent = await remark().use(html).process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
        id,
        contentHtml,
        modifiedDate: fileStats.mtime.toISOString(),
        ...(matterResult.data as Omit<PostData, "id">),
    }
}
