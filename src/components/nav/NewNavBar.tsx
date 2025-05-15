// Navbar.tsx
import { For } from "solid-js";
import NewDropdown from "./NewDropdown";
// import CloudinaryImg from "../cloudinary/CloudinaryImg.astro";
import SearchModal from "../search/NavSearch/SearchModal.astro";
// import { Icon } from "solid-heroicons"; // Adjust if using another Icon lib
const navData = [
  {
    label: "Products & Solutions",
    key: "solutions",
    children: [
      {
        label: "Linux Kernel Testing",
        items: [
          { label: "Functional testing", url: "" },
          { label: "Long term Support", url: "/solutions/lts" },
        ],
      },
      {
        label: "Virtualization",
        items: [
          { label: "QEMU", url: "" },
          { label: "VIRTIO", url: "" },
        ],
      },
      { label: "Toolchain", items: [{ label: "LLVM", url: "" }] },
      {
        label: "Security",
        items: [
          { label: "Confidential Computing", url: "" },
          { label: "OP-TEE", url: "" },
        ],
      },
      {
        label: "HPC",
        items: [{ label: "LinaroForge", url: "https://www.linaroforge.com" }],
      },
      { label: "", url: "", divider: true },
      { label: "IoT&Embedded", url: "/solutions/onelab" },
      { label: "AI&Machine Learning", url: "/solutions/ai-ml" },
      { label: "Automotive", url: "/solutions/automotive" },
    ],
  },
  {
    label: "Services",
    key: "Services",
    children: [
      {
        label: "NXP Platform Services",
        url: "/services/nxp-platform-services",
      },
      {
        label: "Qualcomm Platform Services",
        url: " /projects/qualcomm-platform",
      },
      { label: "Windows on Arm", url: "/projects/windows-on-arm" },
      { label: "Android Platform Services", url: "/services/training" },
      { label: "Training", url: "/services/training" },
    ],
  },
  {
    label: "Ecosystem Projects",
    key: "ecosystem",
    children: [
      {
        label: "Ecosystem Dashboard",
        url: "https://ecosystemdashboard.linaro.org",
      },
      { label: "Projects", url: "" },
    ],
  },
  {
    label: "Resource Center",
    key: "resources",
    children: [
      { label: "Downloads", url: "/downloads" },
      { label: "Blog", url: "/blog" },
      { label: "White Papers", url: "/whitepapers" },
      { label: "Newsroom", url: "/news" },
      { label: "Videos & Webinars", url: "https://resources.linaro.org/" },
      { label: "Events", url: "/events" },
      { label: "Connect 2025", url: "/connect" },
    ],
  },
  { label: "Support", key: "Support", url: "/support" },
  {
    label: "Company",
    key: "company",
    children: [
      { label: "About", url: "/about" },
      { label: " Careers", url: "/careers" },
    ],
  },
  {
    label: "Linaro Solutions Hub",
    key: "solutionsHub",
    url: "https://hub.linaro.com",
  },
];

const Navbar = () => {
  return (
    <header class="relative fade-border-bottom bg-background z-50" id="top-nav">
      <div class="flex flex-col lg:flex-row w-full xl:container lg:items-center mx-auto px-8 my-3 lg:mt-4 lg:text-sm xl:text-[1rem] py-4">
        <div class="flex w-full lg:w-auto items-start justify-between pt-1 min-w-[125px] xl:min-w-[150px]">
          <a href="/" class="text-xl">
            {/* <CloudinaryImg
              src="linaro-website/graphics/logo"
              alt="Linaro Logo"
              class="h-auto w-[125px] xl:w-[200px] mt-[-2px] ml-[-10px]"
              width={500}
              height={500}
            /> */}
            Logo Here
          </a>
          <div class="block lg:hidden pr-8">
            {/* <Icon name="menu" class="w-6 h-6 text-white" /> */}
          </div>
        </div>
        <ul class="w-full lg:w-auto mt-4 lg:flex lg:mt-0 font-medium lg:justify-start">
          <div class="flex flex-col lg:flex-row w-full lg:items-center gap-6">
            <For each={navData}>{(item) => <NewDropdown item={item} />}</For>
            <div class="flex justify-between w-full items-start grow-1">
              <div class="ml-0 lg:ml-2 xl:ml-8 mt-[2px]">
                <a href="/contact" class="mx-auto">
                  <div class="linaro-gradient-button-small ">Contact us</div>
                </a>
              </div>
              <div class="grow">{/* <SearchModal id="nav-search" /> */}</div>
            </div>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
