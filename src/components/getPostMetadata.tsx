import {PostMetaData} from "./PostMetaData";
import fs from "fs";
import matter from "gray-matter";

const getPostMetadata = (): PostMetaData[] => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    // Get gray-matter data from each file.
    return markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf-8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: fileName.replace(".md", ""),
        };
    });
};

export default getPostMetadata;