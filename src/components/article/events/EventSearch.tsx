import {
  createEffect,
  createMemo,
  createResource,
  createSignal,
} from "solid-js";
import { FaSolidXmark } from "solid-icons/fa";
import EventResults from "./EventResults";

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
      event_start: "desc",
    },
  });
};

const getQueryParams = ({ filters, query }: SearchQuery) => {
  const url = new URL(window.location.origin + window.location.pathname);
  if (query) url.searchParams.append("query", query);
  return url;
};

const EventSearch = () => {
  const pathParams = createMemo(() => {
    const url_string = window.location.href;
    const url = new URL(url_string);
    console.log(url.searchParams.get("tags"));
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
      type: ["event"],
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
        type: ["event"],
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

  createEffect(() => {
    console.log(results());
  });

  return (
    <div class={`w-full flex flex-col mt-12`}>
      <div class="w-full lg:w-1/2 flex flex-col md:flex-row justify-between items-stretch mb-3 gap-3 md:gap-0">
        <form
          class="bg-white text-black basis-full rounded-full flex flex-row py-2 px-1 items-center pl-6"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            placeholder="Search for events"
            name="event-search"
            value={search().query ?? ""}
            onInput={(e) => {
              const value = e.target.value === "" ? null : e.target.value;
              setSearch({
                ...search(),
                query: value ?? null,
              });
            }}
            class=" w-full  h-full px-3"
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
      <EventResults results={results} onClearSearch={onClearSearch} />
    </div>
  );
};

export default EventSearch;
