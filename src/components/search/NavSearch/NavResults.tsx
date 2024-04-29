import dayjs from "dayjs";
import {
  createEffect,
  createResource,
  createSignal,
  For,
  Match,
  Switch,
  type Resource,
} from "solid-js";

const isDev = import.meta.env.DEV;

const PAGE_SIZE = 5;

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

const NavResult = ({ result }: { result: any }) => {
  const [article] = createResource(result, getArticle);
  return (
    <li class="w-full ">
      <a
        href={article()?.url}
        class="w-full px-4  inline-block  flex gap-8 outline-none  hover:outline-grey hover:outline-2  focus:outline-grey focus:outline-2 rounded-xl bg-darker py-2  my-4 "
      >
        <Switch>
          <Match when={article()?.filters.type.includes("page")}>
            <div class="basis-full">
              <p class="text-md mb-4 " innerHTML={article()?.excerpt + "..."} />
              <h3 class="text-md font-bold ">
                {article()?.meta.title}
                {" | Linaro"}
              </h3>

              {/* <p>{article()?.meta.summary}</p> */}
            </div>
          </Match>
          <Match
            when={
              article()?.filters.type.includes("news") ||
              article()?.filters.type.includes("blogs")
            }
          >
            <div class="basis-full">
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
          </Match>
          <Match when={article()?.filters.type.includes("events")}>
            <div class="basis-full">
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
          </Match>
        </Switch>
      </a>
    </li>
  );
};

const NavResults = ({
  results,
}: {
  results: Resource<any>;
  onClearSearch: (e: Event) => void;
}) => {
  const [page, setPage] = createSignal(1);
  const [paginatedResults, setPaginatedResults] = createSignal([]);

  createEffect(() => {
    setPaginatedResults(results()?.results.slice(0, page() * PAGE_SIZE) ?? []);
  });

  return (
    <div class="flex flex-col gap-4 items-center w-full">
      <Switch>
        <Match when={results.loading}>
          <div class="my-4 text-lg">Loading results...</div>
        </Match>
        <Match when={results()?.results.length > 0}>
          <ul class="w-full">
            <For each={paginatedResults()}>
              {(result) => <NavResult result={result} />}
            </For>
          </ul>
          <p class="text-lg">
            Showing {paginatedResults().length} of {results().results.length}{" "}
            results
          </p>
        </Match>
        <Match when={results()?.results.length === 0}>
          <p class="text-xl py-4">{results().results.length} results</p>
        </Match>
      </Switch>
    </div>
  );
};

export default NavResults;
