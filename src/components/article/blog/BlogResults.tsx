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
  type Resource,
} from "solid-js";

const PAGE_SIZE = 12;

const getArticle = async (result: any) => {
  return await result.data();
};

const BlogResult = ({
  result,
  tags,
  isSsr,
}: {
  result: any;
  tags: CollectionEntry<"tags">[];
  isSsr: boolean;
}) => {
  const [article] = createResource(result, getArticle);

  return (
    <li class="w-full sm:w-80 max-w-full border-[0.25px] border-grey rounded-3xl hover:border-transparent hover:linaro-gradient-border cursor-pointer bg-background flex flex-col justify-between">
      <a
        href={article()?.url}
        class="w-full px-4 pt-8 pb-12 inline-block basis-full"
      >
        <img
          src={isSsr ? "/placeholder.jpg" : article()?.meta.image}
          alt=""
          width={800}
          height={800}
          class="w-full h-36 object-cover object-top rounded-lg"
        />
        <h2 class="text-2xl my-6">{article()?.meta.title}</h2>
        <Show when={article()?.meta.author_image}>
          <img
            src={isSsr ? "/placeholder.jpg" : article()?.meta.author_image}
            alt={article()?.meta.author}
            width={75}
            height={75}
            class="aspect-square object-cover rounded-full my-4 max-w-full"
          />
        </Show>
        <p class="text-linaro-yellow mt-2">
          {[article()?.meta.author].join(" ")}
        </p>
        <p class="text-neutral-400 mb-2">
          {dayjs(article()?.meta.date).format("dddd, MMMM D, YYYY")}
        </p>
        <p innerHTML={article()?.excerpt} />
      </a>
      <ul class="flex flex-wrap gap-x-4 gap-y-8 px-4 py-8 justify-self-end">
        {article()?.filters.tags.map((tag: string) => (
          <li>
            <a href={`/blog?tags=${tag}`}>
              <div class="linaro-gradient-button">
                {tags?.find(({ slug }) => slug === tag)?.data.name}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

const BlogResults = ({
  results,
  onClearSearch,
  tags,
  isSsr,
}: {
  results: Resource<any>;
  onClearSearch: () => void;
  tags: CollectionEntry<"tags">[];
  isSsr: boolean;
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
          <div class="h-56">Loading results...</div>
        </Match>
        <Match when={results()?.results.length > 0}>
          <p class="text-2xl self-start">{results()?.results.length} results</p>
          <ul class="flex flex-wrap gap-16  justify-center">
            <For each={paginatedResults()}>
              {(result) => (
                <BlogResult result={result} tags={tags} isSsr={isSsr} />
              )}
            </For>
          </ul>
          <p class="text-2xl">
            Showing {paginatedResults().length} of {results().results.length}{" "}
            results
          </p>
          <Show when={paginatedResults().length < results().results.length}>
            <button class="linaro-gradient-button" onClick={onClickMore}>
              Load more
            </button>
          </Show>
        </Match>

        <Match when={results()?.results.length === 0}>
          <p class="text-2xl">{results().results.length} results</p>

          <button class="linaro-gradient-button" onClick={onClearSearch}>
            Clear search
          </button>
        </Match>
      </Switch>
    </div>
  );
};

export default BlogResults;
