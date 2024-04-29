import "solid-js";
import {
  For,
  Show,
  createEffect,
  createMemo,
  createResource,
  createSignal,
  type JSX,
} from "solid-js";
import type { CollectionEntry } from "astro:content";
import BlogResults from "./BlogResults";
import { FaSolidChevronRight, FaSolidXmark } from "solid-icons/fa";
import { AiFillTags } from "solid-icons/ai";

const bundlePath = `${import.meta.env.BASE_URL}pagefind/`;
const pagefind = await import(/* @vite-ignore */ `${bundlePath}pagefind.js`);

export type Filters = Record<string, string[]>;

export type SearchQuery = { query: string | null; filters: Filters };

const fetchResults = async ({
  query,
  filters,
}: {
  query: string | null;
  filters: Filters;
}) => {
  return await pagefind.debouncedSearch(query, {
    filters,
    sort: {
      date: "desc",
    },
  });
};

const getQueryParams = ({ filters, query }: SearchQuery) => {
  const url = new URL(window.location.origin + window.location.pathname);
  if (query) url.searchParams.append("query", query);
  if (filters.tags?.length > 0) {
    url.searchParams.append("tags", filters.tags.join(","));
  }

  return url;
};

const BlogSearch = ({
  tags,
  type,
  isSsr,
}: {
  tags: CollectionEntry<"tags">[];
  type: "blogs" | "news";
  isSsr: boolean;
}) => {
  const pathParams = createMemo(() => {
    const url_string = window.location.href;
    const url = new URL(url_string);
    return {
      query: url.searchParams.get("query"),
      tags: url.searchParams.get("tags")?.split(",") ?? [],
    };
  });

  const [search, setSearch] = createSignal<{
    query: string | null;
    filters: Filters;
  }>({
    query: pathParams().query ?? null,
    filters: {
      tags: pathParams().tags ?? [],
      type: [type],
    },
  });

  const updateSearch = (newSearch: SearchQuery) => {
    setSearch(newSearch);
    const url = getQueryParams(newSearch);
    window.history.pushState({}, "", url.toString());
  };

  const onClearSearch = () => {
    setSearch({
      query: null,
      filters: {
        type: [type],
        tags: [],
      },
    });
    window.history.pushState(
      {},
      "",
      window.location.origin + window.location.pathname
    );
  };

  const onClearTags = () => {
    const newSearch = {
      ...search(),
      filters: {
        ...search().filters,
        tags: [],
      },
    };
    updateSearch(newSearch);
  };

  const onClearQuery = () => {
    const newSearch = {
      ...search(),
      query: null,
    };
    updateSearch(newSearch);
  };

  const onClickTag: JSX.CustomEventHandlersCamelCase<HTMLButtonElement>["onClick"] =
    (e: MouseEvent) => {
      if (!e.currentTarget) return;
      const clickedTag = (e.currentTarget as any).dataset.tag as string;

      const currentTags = search().filters.tags;

      let newTags;
      if (currentTags.includes(clickedTag)) {
        newTags = [...currentTags.filter((tag) => tag !== clickedTag)];
      } else {
        newTags = [...currentTags, clickedTag];
      }

      const newSearch = {
        ...search(),
        filters: {
          ...search().filters,
          tags: newTags,
        },
      };

      updateSearch(newSearch);
    };

  const [results] = createResource(search, fetchResults);

  const [isExpanded, setIsExpanded] = createSignal(
    pathParams()?.tags?.length <= 0
  );

  return (
    <div class={`w-full flex flex-col mt-12`}>
      <div class="w-full lg:w-1/2 flex flex-col md:flex-row justify-between items-stretch mb-3 gap-3 md:gap-0">
        <form
          class="bg-transparent text-white basis-full rounded-lg flex flex-row py-1 px-1 items-center pl-2  border-grey border-2"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            placeholder={`Search for ${type}`}
            name="blog-search"
            value={search().query ?? ""}
            onInput={(e) => {
              const value = e.target.value === "" ? null : e.target.value;
              setSearch({
                ...search(),
                query: value ?? null,
              });
            }}
            class="w-full h-full px-3 w-full h-full px-1 bg-transparent outline-none"
          />
          <button
            class="py-2 px-2"
            onClick={onClearQuery}
            aria-label="Clear search query"
          >
            <FaSolidXmark size={20} />
          </button>
        </form>
      </div>
      <div class="mt-4 w-full lg:w-1/2">
        <div class="flex gap-4">
          <button
            onClick={() => setIsExpanded(!isExpanded())}
            class="flex text-2xl items-center align-middle"
          >
            <AiFillTags class="mr-1" />
            <span class="mb-2 mr-4">
              {`Tags` +
                (search().filters.tags.length > 0
                  ? ` (${search().filters.tags.length})`
                  : "")}
            </span>
            <span class={`${isExpanded() ? "rotate-90" : ""}`}>
              <FaSolidChevronRight size={20} />
            </span>
          </button>
          <Show when={search().filters.tags.length > 0}>
            <button
              class="py-2 rounded-full text-grey flex items-center gap-2"
              onClick={onClearTags}
            >
              <FaSolidXmark size={20} />
              Clear tags
            </button>
          </Show>
        </div>

        <Show when={isExpanded()}>
          <ul class="flex flex-wrap gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-8 py-8 justify-self-end">
            <For
              each={tags.filter((tag) => results()?.filters.tags[tag.slug] > 0)}
            >
              {(tag) => (
                <li>
                  <button
                    data-tag={tag.slug}
                    class="bg-grey px-6 py-2 rounded-full"
                    classList={{
                      "linaro-gradient-button": search().filters.tags.includes(
                        tag.slug
                      ),
                    }}
                    onClick={onClickTag}
                  >
                    {`${tag.data.name} (${
                      results()?.filters.tags[tag.slug] ?? 0
                    })`}
                  </button>
                </li>
              )}
            </For>
          </ul>
        </Show>
      </div>
      <BlogResults
        results={results}
        onClearSearch={onClearSearch}
        tags={tags}
        isSsr={isSsr}
      />
    </div>
  );
};

export default BlogSearch;
