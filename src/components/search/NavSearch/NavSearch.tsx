import {
  createEffect,
  createResource,
  createSignal,
  Show,
  type JSX,
  type ResourceFetcher,
} from "solid-js";
import NavResults from "./NavResults";
import { FaSolidXmark } from "solid-icons/fa";

const bundlePath = `${import.meta.env.BASE_URL}pagefind/`;
const pagefind = await import(/* @vite-ignore */ `${bundlePath}pagefind.js`);
pagefind.preload("");
export type Filters = Record<string, string[]>;

export type SearchQuery = { query: string | null } | null;

const fetchResults: ResourceFetcher<SearchQuery, SearchQuery, boolean> = async (
  search
) => {
  if (!search) return null;
  return await pagefind.debouncedSearch(search.query, {
    // filters: { type: ["page"] },
  });
};

const NavSearch = () => {
  const [search, setSearch] = createSignal<SearchQuery>(null);
  const [results, { mutate }] = createResource(search, fetchResults);

  const onClearSearch = (e: Event) => {
    e.preventDefault();
    setSearch(null);
    mutate(null);
  };

  const onSubmit: JSX.EventHandler<HTMLFormElement, SubmitEvent> = (e) => {
    e.preventDefault();
    if (e.target) {
      const query = (e.target as any)[0].value;
      const url = new URL(window.location.href);
      url.pathname = "/search";
      if (query) {
        url.searchParams.append("query", query);
      }
      window.location.href = url.href;
    }
  };

  const onInput: JSX.InputEventHandler<HTMLInputElement, InputEvent> = (e) => {
    if (!e.target.value || e.target.value === "") {
      setSearch(null);
      mutate(null);
      return;
    }

    setSearch({
      ...search(),
      query: e.target.value ?? null,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div class={`w-full flex flex-col`}>
        <div class="w-full  md:gap-0">
          <div class="bg-transparent text-white basis-full rounded-lg flex flex-row py-1 px-1 items-center pl-2  border-grey border-2">
            <input
              placeholder="Search linaro.org"
              name="nav-search"
              value={search()?.query ?? ""}
              onInput={onInput}
              class="w-full h-full px-1 bg-transparent outline-none"
            />
            <button
              class="py-2 px-2"
              onClick={onClearSearch}
              aria-label="Clear search query"
              type="button"
            >
              <FaSolidXmark size={20} />
            </button>
          </div>
        </div>
        <NavResults results={results} onClearSearch={onClearSearch} />
        <Show when={!!search()}>
          <div class="mx-auto mt-4">
            <button class="linaro-gradient-button block" type="submit">
              Search All
            </button>
          </div>
        </Show>
      </div>
    </form>
  );
};

export default NavSearch;
