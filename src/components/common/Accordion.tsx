import { createSignal, Show } from "solid-js";

const AccordionDrawer = ({ id, content }: { id: string; content: string }) => {
  const [isOpen, setIsOpen] = createSignal(false);

  const openHandler = () => {
    setIsOpen(!isOpen());
  };

  return (
    <div id={id} class="inline-flex flex-col gap-8 max-w-max items-center">
      <div
        onclick={openHandler}
        class="justify-around border-2 border-[#6B6B6B] rounded-3xl p-8 w-3/4 mx-auto mb-4"
      >
        <Show
          when={isOpen()}
          fallback={
            <div class="w-3/4 mx-auto gap-16">
              {content.slice(0, 128) + "..."}
            </div>
          }
        >
          <div class="w-3/4 columns-2 mx-auto gap-16">{content}</div>
        </Show>
      </div>
      <button
        class="linaro-gradient-button inline-flex max-w-fit align-self-center"
        onClick={openHandler}
      >
        {isOpen() ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default AccordionDrawer;
