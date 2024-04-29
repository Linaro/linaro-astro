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

const isDev = import.meta.env.DEV;
const isSsr = import.meta.env.SSR;

const PAGE_SIZE = 12;

const getArticle = async (result: any) => {
  return await result.data();
};

const getType = (type: "blogs" | "news" | "events" | "page") => {
  switch (type) {
    case "blogs":
      return "Blog";
    case "news":
      return "Newsroom";
    case "events":
      return "Event";
    case "page":
      return "Page";
  }
};

const SiteResult = ({
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
    <li class="w-full ">
      <a
        href={article()?.url}
        class="w-full px-4 py-4 inline-block  flex gap-8 outline-none  hover:outline-grey hover:outline-2  focus:outline-grey focus:outline-2 rounded-xl bg-dark   my-2  border-[0.25px] border-grey"
      >
        <Switch>
          <Match when={article()?.filters.type.includes("page")}>
            <div class="flex gap-4">
              <div class="w-full max-w-[10rem] rounded-xl">
                <img
                  src={
                    isDev || isSsr ? "/placeholder.jpg" : article()?.meta.image
                  }
                  alt=""
                  class="h-full w-full object-cover rounded-xl"
                />
              </div>
              <div class="flex flex-col justify-between">
                <p
                  class="text-md mb-4 "
                  innerHTML={article()?.excerpt + "..."}
                />
                <h3 class="text-md font-bold ">
                  {article()?.meta.title}
                  {" | Linaro"}
                </h3>
              </div>
            </div>
          </Match>
          <Match
            when={
              article()?.filters.type.includes("news") ||
              article()?.filters.type.includes("blogs")
            }
          >
            <div class="flex gap-4">
              <div class="w-full max-w-[10rem] rounded-xl">
                <img
                  src={
                    isDev || isSsr ? "/placeholder.jpg" : article()?.meta.image
                  }
                  alt=""
                  class="h-full w-full object-cover rounded-xl"
                />
              </div>
              <div class="flex flex-col justify-between">
                <p class="text-md mb-4" innerHTML={article()?.excerpt} />
                <h3 class="text-md font-bold">
                  <span>
                    {article()?.meta.title}
                    {" | "}
                    {getType(article().filters.type[0])}
                    {" | "}
                    {article()?.meta.author}
                  </span>
                </h3>
              </div>
            </div>
          </Match>
          <Match when={article()?.filters.type.includes("events")}>
            <div class="flex gap-4">
              <div class="w-full max-w-[10rem] rounded-xl">
                <img
                  src={isDev ? "/placeholder.jpg" : article()?.meta.image}
                  alt=""
                  class="h-full w-full object-cover rounded-xl"
                />
              </div>
              <div class="flex flex-col justify-between">
                <p class="text-md mb-4" innerHTML={article()?.excerpt} />
                <h3 class="text-md font-bold">
                  <span>
                    {article()?.meta.title}
                    {" | "}
                    {getType(article().filters.type[0])}
                    {" | "}
                    {article()?.meta.dates}
                    {" | "}
                    {article()?.meta.location}
                  </span>
                </h3>
              </div>
            </div>
          </Match>
        </Switch>
      </a>
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
    <div class="flex flex-col mt-8 mb-24 gap-4 items-center w-full">
      <Switch>
        <Match when={results.loading}>
          <div class="h-56">Loading results...</div>
        </Match>
        <Match when={results()?.results.length > 0}>
          <p class="text-2xl self-start">{results()?.results.length} results</p>
          <ul class="">
            <For each={paginatedResults()}>
              {(result) => (
                <SiteResult result={result} tags={tags} isSsr={isSsr} />
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
