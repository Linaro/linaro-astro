import { createSignal, onCleanup, onMount } from "solid-js";
import type { JSX } from "solid-js";

type NavItem = {
  label: string;
  url?: string;
  items?: { label: string; url: string }[];
  children?: NavItem[];
  divider?: boolean;
};

type NewDropdownProps = {
  item: NavItem;
};

export default function NewDropdown(
  props: Readonly<NewDropdownProps>,
): JSX.Element {
  const [open, setOpen] = createSignal(false);
  let menuRef: HTMLUListElement | undefined;
  let buttonRef: HTMLButtonElement | undefined;

  const toggleDropdown = () => setOpen(!open());

  const handleClickOutside = (e: MouseEvent) => {
    if (
      menuRef &&
      !menuRef.contains(e.target as Node) &&
      buttonRef &&
      !buttonRef.contains(e.target as Node)
    ) {
      setOpen(false);
    }
  };

  onMount(() => {
    document.addEventListener("mousedown", handleClickOutside);
    onCleanup(() => {
      document.removeEventListener("mousedown", handleClickOutside);
    });
  });

  return (
    <menu
      class={"group top-full"}
      aria-expanded="false"
      data-nav-group={props.item.label}
    >
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        class={`hover:linaro-gradient-text text-md ${open() ? "linaro-gradient-text" : "text-white"}`}
        aria-haspopup="true"
        aria-expanded={open()}
        aria-controls={`dropdown-${props.item.label.toLowerCase().replace(/\s+/g, "-")}`}
      >
        {props.item.label}
      </button>
      <ul
        ref={menuRef}
        id={`dropdown-${props.item.label.toLowerCase().replace(/\s+/g, "-")}`}
        class={`lg:absolute w-full lg:left-0 text-left top-full bg-background z-40 py-6 shadow-lg ${open() ? "" : "hidden opacity-0"}`}
      >
        <div class="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-8">
          {props.item.children?.map((child) =>
            child.items ? (
              <div class="flex flex-col gap-2">
                <ul>
                  <p class="text-white text-md">{child.label}</p>
                  {child.items.map((subItem) => (
                    <li>
                      <a
                        href={subItem.url}
                        class="py-2 text-grey hover:text-linaro-yellow cursor-pointer text-sm"
                      >
                        {subItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <li>
                {child.divider ? (
                  <div class="w-1/2 h-[3px] lg:w-[3px] lg:h-full bg-linaro-purple"></div>
                ) : (
                  <a
                    href={child.url}
                    class="text-white hover:text-linaro-yellow cursor-pointer whitespace-nowrap text-sm"
                    target={child.url?.startsWith("https") ? "_blank" : "_self"}
                  >
                    {child.label}
                  </a>
                )}
              </li>
            ),
          )}
        </div>
      </ul>
    </menu>
  );
}
