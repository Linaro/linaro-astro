---
slug: solutions/oneboot
title: ONEBoot
description: |
  The Secure, CRA-compliant BIOS for Arm Embedded Edge Platforms
hero:
  title: >
    The Secure, CRA-compliant BIOS for Arm Embedded Edge Platforms
  background_image: linaro-website/graphics/oneboot-hero-bg
  description: |
    ONEBoot is designed to eliminate complexity, reduce lifecycle costs, and bring transparency and compliance to modern firmware management.
  button:
    text: Discover ONEBoot
    url: /contact
  styles:
    text_container: max-w-2xl
    title: max-w-2xl mb-12
    description: max-w-xl text-xl
    background: bg-right-top xl:bg-right
    background_container: p-[5%] md:ml-[5%]
flow:
  - row: container_row
    title: Traditional Firmware Lifecycle Management is Broken
    styles:
      inner: py-24 md:px-24
    sections:
      - component: text
        text_content: |
          <div class="flex flex-col lg:flex-row lg:w-[85ch] mx-auto py-auto gap-8 lg:gap-4 text-left">
            <div class="flex-1 flex flex-col gap-1">
              <div class="bg-[#6B6B6B] text-white font-bold p-4 text-2xl">
                Traditional Firmware
              </div>
              <div class="bg-gray-400 text-white px-4 py-5.5">Flash & Forget</div>
              <div class="bg-gray-400 text-white px-4 py-5.5">Security Configuration isn't Assured</div>
              <div class="bg-gray-400 text-white px-4 py-5.5">BSP-Bound Updates</div>
              <div class="bg-gray-400 text-white px-4 py-5.5">Limited Transparency</div>
              <div class="bg-gray-400 text-white px-4 py-5.5">Proprietary Lock-in</div>
              <div class="bg-gray-400 text-white px-4 py-5.5">Operating System Lock-in</div>
              <div class="bg-gray-400 text-white px-4 py-5.5">Compliance Afterthought</div>
            </div>

            <div class="flex-1 flex flex-col gap-1">
              <div class="bg-violet-700 text-white font-bold p-4 text-2xl">
                ONEBoot
              </div>
              <div class="bg-linaro-gradient text-white p-4 flex justify-between items-center font-medium">
                <span>Continuous Lifecycle Management</span>
                <svg class="w-10 h-10 mr-10 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div class="bg-linaro-gradient text-white p-4 flex justify-between items-center font-medium">
                <span>Secure out-of-the-box</span>
                <svg class="w-10 h-10 mr-10 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div class="bg-linaro-gradient text-white p-4 flex justify-between items-center font-medium">
                <span>Long-term Support</span>
                <svg class="w-10 h-10 mr-10 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div class="bg-linaro-gradient text-white p-4 flex justify-between items-center font-medium">
                <span>Integrated SBOM + VMS</span>
                <svg class="w-10 h-10 mr-10 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div class="bg-linaro-gradient text-white p-4 flex justify-between items-center font-medium">
                <span>Vendor-agnostic</span>
                <svg class="w-10 h-10 mr-10 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div class="bg-linaro-gradient text-white p-4 flex justify-between items-center font-medium">
                <span>OS Agnostic (interoperability)</span>
                <svg class="w-10 h-10 mr-10 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div class="bg-linaro-gradient text-white p-4 flex justify-between items-center font-medium">
                <span>CRA-aligned by design</span>
                <svg class="w-10 h-10 mr-10 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
            </div>
          </div>
  - row: container_row
    styles:
      title: text-yellow-500
      outer: purple-gradient-container
      inner: p-0 m-0
    sections:
      - component: text
        text_content: Enter ONEBoot
        style: text-yellow-500 text-5xl
      - component: three_column
        styles:
          container: justify-center
        cards:
          - text: Device tree-based firmware architecture, standards-compliant interfaces, commercial support from Linaro experts, integrated SBOM and vulnerability management, CRA-aligned compliance monitoring
            style: text-base sm:text-xl md:max-w-[30ch] text-center sm:text-left text-white
          - image: linaro-website/graphics/oneboot-lifecycle-diagram-mobile
            image_style: w-[500px] h-auto
          - text: "ONEBoot delivers:"
            style: text-2xl text-white mb-0
            list:
              - text: Transparency
                style: text-white text-base sm:text-xl
              - text: EU-CRA compliance readiness
                style: text-white text-base sm:text-xl
              - text: Secure-by-design BIOS
                style: text-white text-base sm:text-xl
              - text: Commercial support
                style: text-white text-base sm:text-xl
              - text: Multi-OS flexibility
                style: text-white text-base sm:text-xl
              - text: Vendor-agnostic deployment
                style: text-white text-base sm:text-xl
              - text: Modern lifecycle management
                style: text-white text-base sm:text-xl
              - text: Reduced long-term maintenance cost
                style: text-white text-base sm:text-xl
      - component: text
        text_content: It’s the first CRA Compliant Embedded BIOS Firmware Built for the Arm Edge & IOT Ecosystem
        style: text-center text-yellow-500 text-3xl max-w-[45ch] mx-auto font-bold
  - row: container_row
    styles:
      inner: p-0 m-0
    sections:
      - component: text
        text_content: Firmware is Infrastructure |  Infrastructure Must Be Secure, Compliant & Sustainable
        style: text-center text-3xl max-w-[54ch] mx-auto font-bold mb-24
      - component: buttons
        buttons:
          - text: Read the press release with AMI and ADLink
            url: /contact
            style: linaro-gradient-button
---
