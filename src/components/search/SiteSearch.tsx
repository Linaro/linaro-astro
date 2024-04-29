import "solid-js";
import {
  Show,
  createEffect,
  createMemo,
  createResource,
  createSignal,
  type JSX,
} from "solid-js";
import SiteResults from "./SiteResults";
import { FaSolidChevronRight, FaSolidXmark } from "solid-icons/fa";
import { AiFillTags } from "solid-icons/ai";
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
  return await pagefind.debouncedSearch(query, {
    filters,
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

const SiteSearch = ({
  tags,
  isSsr,
}: {
  tags: CollectionEntry<"tags">[];
  isSsr: boolean;
}) => {
  const pathParams = createMemo(() => {
    const url_string = window.location.href;
    const url = new URL(url_string);
    return {
      query: url.searchParams.get("query"),
    };
  });

  const [search, setSearch] = createSignal<{
    query: string | null;
    filters: Filters;
  }>({
    query: pathParams().query ?? null,
    filters: {
      type: [],
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
        type: [],
      },
    });
    window.history.pushState(
      {},
      "",
      window.location.origin + window.location.pathname
    );
  };

  const onClearQuery = () => {
    const newSearch = {
      ...search(),
      query: null,
    };
    updateSearch(newSearch);
  };

  const [results] = createResource(search, fetchResults);

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
            placeholder={`Search linaro.org`}
            name="site-search"
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
      <SiteResults
        results={results}
        onClearSearch={onClearSearch}
        tags={tags}
        isSsr={isSsr}
      />
    </div>
  );
};

export default SiteSearch;
