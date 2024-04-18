import {
  createEffect,
  createMemo,
  createResource,
  createSignal,
  For,
  Match,
  Show,
  Switch,
  type Resource,
} from "solid-js";

const isDev = import.meta.env.DEV;

const PAGE_SIZE = 12;

const getEvents = async (results: any[]) => {
  return await Promise.all(results.map((result) => result.data()));
};

const EventResult = ({ event }: { event: any }) => {
  return (
    <li class="w-full sm:w-80 max-w-full border-[0.25px] border-grey rounded-3xl hover:border-transparent hover:linaro-gradient-border cursor-pointer bg-background flex flex-col justify-between">
      <a
        href={event.url}
        class="w-full px-4 pt-8 pb-12 inline-block basis-full"
      >
        <img
          src={isDev ? "/placeholder.jpg" : event.meta.image}
          alt=""
          width={800}
          height={800}
          class="w-full h-36 object-cover rounded-lg"
        />
        <h2 class="text-2xl my-6">{event.meta.title}</h2>
        <Show when={event.meta.author_image}>
          <img
            src={isDev ? "/placeholder.jpg" : event.meta.author_image}
            alt={event.meta.author}
            width={75}
            height={75}
            class="aspect-square object-cover rounded-full my-4 max-w-full"
          />
        </Show>
        <p class="text-neutral-400 mb-2">{event.meta.dates}</p>
        <p>{event.meta.summary}</p>
      </a>
      <div class="px-4 py-8 justify-self-end">
        <button class="linaro-gradient-button">
          <a href={event.meta.button_url} target="_blank">
            {event.meta.button_text}
          </a>
        </button>
      </div>
    </li>
  );
};

const EventResults = ({
  results,
  onClearSearch,
}: {
  results: Resource<any>;
  onClearSearch: () => void;
}) => {
  const [page, setPage] = createSignal(1);
  const [paginatedResults, setPaginatedResults] = createSignal([]);

  createEffect(() => {
    setPaginatedResults(results()?.results.slice(0, page() * PAGE_SIZE) ?? []);
  });

  const onClickMore = () => {
    setPage((prev) => prev + 1);
  };

  const [events] = createResource(paginatedResults, getEvents);

  const upcoming = createMemo(
    () => events()?.filter((event) => event.meta.event_start > Date.now()) ?? []
  );

  const past = createMemo(
    () =>
      events()?.filter((event) => event.meta.event_start <= Date.now()) ?? []
  );

  createEffect(() => console.log(past()));

  return (
    <div class="flex flex-col mt-8 mb-24 gap-12 items-center w-full">
      <Switch>
        <Match when={results.loading}>
          <div class="h-56">Loading results...</div>
        </Match>
        <Match when={results()?.results.length > 0}>
          {/* <p class="font-bold text-2xl self-start">
            {results()?.results.length} results
          </p> */}
          <Show when={upcoming().length > 0}>
            <h2 class="text-left text-3xl text-linaro-yellow font-bold self-start">
              Past Events
            </h2>
            <ul class="flex flex-wrap gap-16  justify-center">
              <For each={upcoming()}>
                {(event) => <EventResult event={event} />}
              </For>
            </ul>
          </Show>
          <Show when={past().length > 0}>
            <h2 class="text-left text-3xl text-linaro-yellow font-bold self-start">
              Past Events
            </h2>
            <ul class="flex flex-wrap gap-16  justify-center">
              <For each={past()}>
                {(event) => <EventResult event={event} />}
              </For>
            </ul>
          </Show>
          <p class=" text-2xl">
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
          <p class=" text-2xl">{results().results.length} results</p>

          <button class=" linaro-gradient-button" onClick={onClearSearch}>
            Clear search
          </button>
        </Match>
      </Switch>
    </div>
  );
};

export default EventResults;
