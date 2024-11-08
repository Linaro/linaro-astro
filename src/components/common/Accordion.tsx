import { createSignal, Show } from "solid-js";

const AccordionDrawer = ({ id, content }: { id: string; content: string }) => {
  const [isOpen, setIsOpen] = createSignal(false);

  const openHandler = () => {
    setIsOpen(!isOpen());
  };

  return (
    <div id={id} class="inline-flex flex-col gap-8 max-w-max items-center">
      <button
        class="linaro-gradient-button inline-flex max-w-fit align-self-center"
        onClick={openHandler}
      >
        {isOpen() ? "Hide" : "Show"}
      </button>
      <Show when={isOpen()}>
        <div class="w-3/4 columns-2 mx-auto gap-16">{content}</div>
      </Show>
    </div>
  );
};

export default AccordionDrawer;
