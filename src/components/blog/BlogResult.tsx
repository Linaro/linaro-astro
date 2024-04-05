import type { CollectionEntry } from "astro:content";
import dayjs from "dayjs";
import { createEffect, createResource, Show } from "solid-js";

const getBlog = async (result: any) => {
  console.log(result);
  return await result.data();
};

const BlogResult = ({ result, tags }: { result: any, tags?: CollectionEntry<"tags">[] }) => {
  const [blog] = createResource(result, getBlog);
  createEffect(() => {
    console.log(blog())
  })
  return (
    <li class="w-80 border-[0.25px] border-grey rounded-3xl hover:border-transparent hover:linaro-gradient-border cursor-pointer bg-background flex flex-col justify-between">
      <a
        href={blog()?.url}
        class="w-full px-4 pt-8 pb-12 inline-block basis-full"
      >
        <img
          src={blog()?.meta.image}
          alt=""
          width={800}
          height={800}
          class="w-full h-36 object-cover rounded-lg"
        />
        <h2 class="text-2xl my-6">{blog()?.meta.title}</h2>
        <Show when={blog()?.meta.author_image}>
          <img
            src={blog()?.meta.author_image}
            alt={blog()?.meta.author}
            width={75}
            height={75}
            class="aspect-square object-cover rounded-full my-4"
          />
        </Show>
        <p class="text-linaro-yellow mt-2">{[blog()?.meta.author].join(" ")}</p>
        <p class="text-neutral-400 mb-2">
          {dayjs(blog()?.meta.date).format("dddd, MMMM D, YYYY")}
        </p>
        <p>{blog()?.meta.summary}</p>
      </a>
      <ul class="flex flex-wrap gap-x-4 gap-y-8 px-4 py-8 justify-self-end">
        {blog()?.filters.tags.map((tag: string) => (
          <li>
            <a href={`/blog?tags=${tag}`} class="linaro-gradient-button">
              {tags?.find(({slug}) => slug === tag)?.data.name}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default BlogResult;
