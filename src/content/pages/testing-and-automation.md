---
slug: services/testingandautomation
title: Testing & Automation Services
description: |
  Testing & Automation Services
hero:
  title: >
    Testing & Automation Services
  background_image: linaro-website/graphics/testingandautomation-bg
  description: |
    At Linaro we design, deploy and manage test automation systems that scale from early silicon bring-up to global upstream validation programs.
  button:
    text: Let’s Build Your CI Strategy
    url: /contact
  styles:
    text_container: max-w-2xl
    title: max-w-2xl mb-12
    description: max-w-xl text-xl
    background: bg-right-top xl:bg-right
    background_container: p-[5%] md:ml-[5%]
flow:
  - row: container_row
    styles:
      inner: py-24 md:px-24
      outer: mb-20
    sections:
      # Use a text component for the custom HTML layout of the numbered cards
      - component: text
        text_content: |
          <div class="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-16 lg:gap-8 max-w-7xl mx-auto">
            
            <div class="flex-1 flex flex-col items-center w-full max-w-lg lg:max-w-none">
              <div class="w-14 h-14 pb-1.5 rounded-full border-4 border-white flex items-center justify-center text-5xl font-bold text-[#FFCE00] mb-8">1</div>
              <div class="w-full bg-gradient-to-b from-[#6715E8] to-[#3A0C82] rounded-3xl pl-6 pr-6 text-white flex flex-col h-full">
                <h3 class="text-2xl font-bold mb-4">Build & Test on virtual devices</h3>
                <p class="mb-4 text-base">On demand, highly scalable, build and test service that scale from single developer to large CI system</p>
                <ul class="list-disc pl-5 space-y-2 text-base text-white marker:text-white mb-10">
                  <li>Reproducible kernel & OpenEmbedded builds</li>
                  <li>Testing leveraging QEMU and FVP</li>
                  <li>Scalable compute without infrastructure burden</li>
                  <li>Easy integration from command line to CI pipelines</li>
                </ul> 
                <img src="https://res.cloudinary.com/dl7c2wmhi/image/upload/v1/linaro-website/graphics/tuxsuite" alt="LAA" class="mt-auto ml-auto w-72" />
              </div>
            </div>

            <div class="flex-1 flex flex-col items-center w-full max-w-lg lg:max-w-none">
              <div class="w-14 h-14 pb-1.5 rounded-full border-4 border-white flex items-center justify-center text-5xl font-bold text-[#FFCE00] mb-8">2</div>
              <div class="w-full bg-gradient-to-b from-[#6715E8] to-[#3A0C82] rounded-3xl pl-6 pr-6  text-white flex flex-col h-full">
                <h3 class="text-2xl font-bold mb-4">Testing on your hardware</h3>
                <p class="mb-4 text-base">The Linaro automation framework (LAVA) and the Linaro Automation Appliance (LAA) automatically test any layer of your software stack on your hardware.m</p>
                <ul class="list-disc pl-5 space-y-2 text-base text-white marker:text-white mb-10 mt-6">
                  <li>Bootloader, kernel or OS regression testing</li>
                  <li>Performance assessments</li>
                  <li>Plug and Test on your hardware</li>
                  <li>Supporting more than 400 different devices</li>
                </ul>
                <img src="https://res.cloudinary.com/dl7c2wmhi/image/upload/v1/linaro-website/graphics/LAA" alt="Tuxsuite Logo" class="mt-auto ml-auto w-72" />
              </div>
            </div>

            <div class="flex-1 flex flex-col items-center w-full max-w-lg lg:max-w-none">
              <div class="w-14 h-14 pb-1.5 rounded-full border-4 border-white flex items-center justify-center text-5xl font-bold text-[#FFCE00] mb-8">3</div>
              <div class="w-full bg-gradient-to-b from-[#6715E8] to-[#3A0C82] rounded-3xl pl-6 pr-6  text-white flex flex-col h-full">
                <h3 class="text-2xl font-bold mb-4">Integration with upstream testing: KernelCI</h3>
                <p class="mb-4 text-base">Upstream-first continuous integration of the Linux kernel on vendor hardware.</p>
                <ul class="list-disc pl-5 space-y-2 text-base text-white marker:text-white mb-10">
                  <li>Testing upstream kernel on your hardware</li>
                  <li>Fast enablement of your hardware</li>
                  <li>Seamless integration with KernelCI</li>
                </ul>
                <img src="https://res.cloudinary.com/dl7c2wmhi/image/upload/v1/linaro-website/graphics/kernelci-logo" alt="KernelCI Logo" class="mt-auto ml-auto w-72" />
              </div>
            </div>

          </div>
  - row: container_row
    styles:
      inner: flex flex-col text-center m-0 p-0
      outer: mb-10 purple-gradient-container-no-padding
    sections:
      - component: text
        text_content: SCALE. BUILD. TEST
        style: linaro-gradient-text text-6xl
      - component: text
        text_content: |
          <div class="flex flex-col items-center justify-center text-white font-semibold text-lg lg:text-xl max-w-3xl mx-auto py-8">
            
            <div class="py-1 px-4 text-center">Share hardware across global teams</div>
            <div class="w-2 h-2 rounded-full bg-white my-1"></div>
            
            <div class="py-1 px-4 text-center">Access platforms remotely without reconnection</div>
            <div class="w-2 h-2 rounded-full bg-white my-1"></div>
            
            <div class="py-1 px-4 text-center">Avoid physical relocation of devices</div>
            <div class="w-2 h-2 rounded-full bg-white my-1"></div>
            
            <div class="py-1 px-4 text-center">Eliminate repeated lab reconfiguration</div>
            <div class="w-2 h-2 rounded-full bg-white my-1"></div>
            
            <div class="py-1 px-4 text-center">Integrate secure access and user permissions</div>
            
          </div>
  - row: container_row
    styles:
      inner: py-10 md:px-24
    sections:
      - component: text
        text_content: Linaro’s Use Cases
        style: text-center text-yellow-500 text-4xl
      - component: cards
        styles:
          container: mx-auto justify-around gap-10 max-w-6xl
          card: md:w-[50ch]
        cards:
          - title: KernelCI
            style: text-white border border-black rounded-3xl p-10 bg-linaro-gradient-vertical
            text: LAVA and Tuxsuite incubated by Linaro are foundational components of the KernelCI project that continuously test the Linux kernel on vendor hardware.
            list:
              - Reproducible build with tuxsuite OSS tools
              - Multiple remote hardware labs orchestrated by LAVA
              - Linaro pull-lab orchestrated on LAAs
              - Testing with LAVA or Labgrid
          - title: OneLab
            style: text-white border border-black rounded-3xl p-10 bg-linaro-gradient-vertical
            text: In an era where connectivity is king, Onelab ensures edge and IOT device interoperability though automated testing
            list:
              - Automatically run the ARM ACS test suite
              - Leverage the Linaro Automation Appliance for full hardware automation
              - Test OS and distribution installation of various vendors
          - title: ClangBuilt Linux CI
            style: text-white border border-black rounded-3xl p-10 bg-linaro-gradient-vertical
            text: The ClangBuiltLinux project is improving the quality of the LLVM toolchain by ensuring that every version of Clang is able to fully build the Linux kernel.
            list:
              - Large scale CI leveraging tuxsuite build service
              - Tight integration with Github actions
              - Building on average 40k Linux kernels per month
              - On average 460 days of computation per month.
          - title: Linux Kernel Functional Testing
            style: text-white border border-black rounded-3xl p-10 bg-linaro-gradient-vertical
            text: "The LKFT project is improving the Linux Kernel quality with intensive testing, utilising all of Linaro’s automation framework and tools: LAVA, tuxsuite, LAA and Hay"
            list:
              - Linaro hosted Kernel testing service
              - Service Level Agreement (SLA) Kernel Testing
              - Regression Monitoring
              - Public or Private Labs supported
              - Daily reports and triaging of your test results
  - row: container_row
    styles:
      inner: p-0 m-0
    sections:
      - component: text
        text_content: Discover the Linaro service model that tailors to your needs
        style: text-yellow-500 text-center text-3xl
      - component: buttons
        buttons:
          - text: Contact Us
            url: /contact
            style: linaro-gradient-button
---
