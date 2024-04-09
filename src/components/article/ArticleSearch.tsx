import "solid-js";
import {
  For,
  Match,
  Show,
  Switch,
  createEffect,
  createMemo,
  createResource,
  createSignal,
  type JSX,
} from "solid-js";
import type { CollectionEntry } from "astro:content";
import ArticleResults from "./ArticleResults";
import { Collapse } from "solid-collapse";
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
  console.log("fetching", query);
  return await pagefind.search(query, {
    filters,
    sort: {
      date: "desc"
    }
  });
};

const fetchFilterOptions = async () => {
  return await pagefind.filters();
};

const getQueryParams = ({ filters, query }: SearchQuery) => {
  const url = new URL(window.location.origin + window.location.pathname);
  if (query) url.searchParams.append("query", query);
  if (filters.tags?.length > 0) {
    url.searchParams.append("tags", filters.tags.join(","));
  }

  return url;
};

const Search = ({
  type,
  tags,
}: {
  type: "blog";
  tags?: CollectionEntry<"tags">[];
}) => {
  const pathParams = createMemo(() => {
    const url_string = window.location.href;
    const url = new URL(url_string);
    console.log(url.searchParams.get("tags"));
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

  createEffect(() => {
    console.log(results());
  });

  const [isExpanded, setIsExpanded] = createSignal(false);

  return (
    <div class={`w-full flex flex-col mt-12`}>
      
      <div class="w-full flex flex-col md:flex-row justify-between items-stretch mb-3 gap-3 md:gap-0">
        <form
          class="bg-white text-black basis-full rounded-full flex flex-row py-2 px-1 items-center pl-6"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            placeholder="Search for blogs"
            name="blog-search"
            value={search().query ?? ""}
            onInput={(e) => {
              setSearch({
                ...search(),
                query: e.target.value ?? null,
              });
            }}
            class="w-full h-full px-3"
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
      <div class="mt-4">
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
      
        <Collapse value={isExpanded()} >
          <Show when={!!tags}>
            <ul class="flex flex-wrap gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-8 py-8 justify-self-end">
              <For each={tags!.filter((tag) => results()?.filters.tags[tag.slug] > 0)}>
                {(tag) => (
                  <li>
                    <button
                      data-tag={tag.slug}
                      class="bg-grey px-6 py-2 rounded-full"
                      classList={{
                        "linaro-gradient-button":
                          search().filters.tags.includes(tag.slug),
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
         
        </Collapse>
      </div>
      <ArticleResults
        results={results}
        onClearSearch={onClearSearch}
        tags={tags}
      />
    </div>
  );
};

export default Search;
