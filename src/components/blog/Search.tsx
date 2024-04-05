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
} from "solid-js";
import BlogResult from "./BlogResult";
import type { CollectionEntry } from "astro:content";

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
  });
};

const fetchFilterOptions = async () => {
  return await pagefind.filters();
};

const getQueryParams = ({ filters, query }: SearchQuery) => {
  const url = new URL(window.location.origin);
  if (query) url.searchParams.append("query", query);
  if (filters.tags?.length > 0) {
    url.searchParams.append("tags", filters.tags.join(","));
  }

  return url;
};

const Search = ({ type, tags }: { type: "blog", tags?: CollectionEntry<"tags">[] }) => {
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

  const setFilter: (
    filter: string,
    selection: string,
    value: boolean
  ) => void = (filter, selection, value) => {
    const prev = search();

    const prevFilter = prev.filters[filter] || [];
    const newSearch = {
      ...prev,
      filters: {
        ...prev.filters,
        [filter]: [
          ...prevFilter.filter(
            (item) => (value && item === selection) || item !== selection
          ),
          ...(value ? [selection] : []),
        ],
      },
    };
    setSearch(newSearch);
  };

  const clearSearch = () => {
    setSearch({
      query: null,
      filters: {
        type: [type],
      },
    });
  };

  const [results] = createResource(search, fetchResults);
  const [filterOptions] = createResource(search, fetchFilterOptions);

  createEffect(() => {
    console.log(results(), pathParams());
  });

  return (
    <div class={`w-full flex flex-col `}>
      <div class="w-full flex flex-col md:flex-row justify-between items-stretch mb-3 gap-3 md:gap-0">
        <form class="bg-white text-black basis-11/12 rounded-full flex flex-row py-2 px-1 items-center pl-6" onSubmit={(e) => {e.preventDefault()}}> 
          <label class="hidden" for="blog-search">
            Search for blogs
          </label>

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
                onClick={clearSearch}
                aria-label="Clear search query"
              >
                {/* <ClearIcon />
                 */}
                 Clear
              </button>
        </form>
      </div>
      <ul>
        <Switch>
          <Match when={results.loading}>
            <div class="w-full flex flex-col items-center gap-3 p-10 ">
              Loading results...
            </div>
          </Match>
          <Match when={results().results.length > 0}>
            <div class="flex flex-col">
              <ul class="flex flex-wrap gap-16 my-24">
                <For each={results().results}>
                  {(result) => <BlogResult result={result} tags={tags}/>}
                </For>
              </ul>
            </div>
          </Match>
          <Match when={results().results.length === 0}>
            <div class="w-full flex flex-col items-center gap-3 p-10">
              No Results
              <button
                class="px-10 py-2 bg-white hover:bg-slate-300 border-white text-black font-bold border rounded-full"
                onClick={clearSearch}
              >
                Clear search
              </button>
            </div>
          </Match>
        </Switch>
      </ul>
    </div>
  );
};

export default Search;
