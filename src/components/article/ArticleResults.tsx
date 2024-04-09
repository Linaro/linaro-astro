import type { CollectionEntry } from "astro:content";
import dayjs from "dayjs";
import {
  createEffect,
  createResource,
  createSignal,
  For,
  Match,
  Show,
  Switch,
  type Accessor,
  type Resource,
} from "solid-js";
import type { SearchQuery } from "./ArticleSearch";

const isDev = import.meta.env.DEV;

const PAGE_SIZE = 12;

const getArticle = async (result: any) => {
  return await result.data();
};

const ArticleResult = ({
  result,
  tags,
}: {
  result: any;
  tags?: CollectionEntry<"tags">[];
}) => {
  const [blog] = createResource(result, getArticle);

  return (
    <li class="w-80 border-[0.25px] border-grey rounded-3xl hover:border-transparent hover:linaro-gradient-border cursor-pointer bg-background flex flex-col justify-between">
      <a
        href={blog()?.url}
        class="w-full px-4 pt-8 pb-12 inline-block basis-full"
      >
        <img
          src={isDev ? "/placeholder.jpg" : blog()?.meta.image}
          alt=""
          width={800}
          height={800}
          class="w-full h-36 object-cover rounded-lg"
        />
        <h2 class="text-2xl my-6">{blog()?.meta.title}</h2>
        <Show when={blog()?.meta.author_image}>
          <img
            src={isDev ? "/placeholder.jpg" : blog()?.meta.author_image}
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
              {tags?.find(({ slug }) => slug === tag)?.data.name}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

const ArticleResults = ({
  results,
  onClearSearch,
  tags,
}: {
  results: Resource<any>;
  onClearSearch: () => void;
  tags?: CollectionEntry<"tags">[];
}) => {
  const [page, setPage] = createSignal(1);
  const [paginatedResults, setPaginatedResults] = createSignal([]);

  createEffect(() => {
    setPaginatedResults(results()?.results.slice(0, page() * PAGE_SIZE) ?? []);
  });

  const onClickMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div class="flex flex-col mt-8 mb-24 gap-12 items-center w-full">
      <Switch>
        <Match when={results.loading}>
          <div>Loading results...</div>
        </Match>
        <Match when={results()?.results.length > 0}>
          
          <ul class="flex flex-wrap gap-16  justify-center">
            <For each={paginatedResults()}>
              {(result) => <ArticleResult result={result} tags={tags} />}
            </For>
          </ul>
          <p class="font-bold text-2xl">
            Showing {paginatedResults().length} of {results().results.length}{" "}
            results
          </p>
          <Show when={paginatedResults().length < results().results.length}>
          <button
            class="px-10 py-2 bg-white hover:bg-slate-300 border-white text-black font-bold border rounded-full"
            onClick={onClickMore}
          >
            Load more
          </button>
        </Show>
        </Match>
        
        <Match when={results()?.results.length === 0}>
          <p class="font-bold text-2xl">{results().results.length} results</p>

          <button
            class="px-10 py-2 bg-white hover:bg-slate-300 border-white text-black font-bold border rounded-full"
            onClick={onClearSearch}
          >
            Clear search
          </button>
        </Match>
      </Switch>
    </div>
  );
};

export default ArticleResults;
