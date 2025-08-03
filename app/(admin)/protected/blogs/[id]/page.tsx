import { isUndefined } from "lodash";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchBlog } from "utils/actions/blog";
import UpdateBlogForm from "../_components/UpdateBlogForm";

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const blog = await fetchBlog({
        id: Number((await params).id),
    });

    return {
        title: blog?.title,
    };
}

export default async function BlogPage({ params }: Props) {
    const blog = await fetchBlog({
        id: Number((await params).id),
    });

    if (isUndefined(blog)) {
        notFound();
    }

    return (
        <main className="mb-20">
            <UpdateBlogForm
                id={blog.id}
                headerImgUrl={blog.headerUrl}
                thumbnailImgUrl={blog.thumbnailUrl}
                content={blog.content}
                description={blog.description}
                isPublished={blog.isPublished}
                title={blog.title}
            />
        </main>
    );
}
