---
slug: services/bsp-development
title: BSP Development
description: |
  Linus and Android BSP development on Arm.
hero:
  title: >
    Linux and Android BSP development on Arm
  background_image: linaro-website/graphics/3d-illustration-computer-chip-processor-printed-circuit-board-concept-data-transfer-cloud-central-processor-form-artificial-intelligence-data-transfer_1_twjtuu.png
  description: |
    Integrating software components to create a bespoke BSP can be a complicated and labour-intensive undertaking. Linaro has years of experience developing all aspects of the BSP (Board Support Package) for Arm-based products. By customising your Linux or Android BSP, we can tailor your software to meet your hardware needs - thereby enhancing performance and efficiency.
  bottom_fade: true
  styles:
    text_container: max-w-2xl
    title: max-w-2xl mb-12
    description: max-w-xl text-xl
    background: bg-right-top
    background_container: ml-[10%]
flow:
  - row: container_row
    title: "Linaro will help you:"
    no_border: true
    styles:
      outer: mt-8 pt-12
      inner: py-0
      title: "!text-linaro-yellow !text-left w-full"
    sections:
      - component: cards
        # divider: true
        styles:
          container: mx-auto flex flex-col md:flex-row gap-2 md:gap-0 justify-evenly min-h-[1450px] md:min-h-[450px] px-4 items-center
          card: rounded-full bg-[linear-gradient(260deg,rgba(34,32,37,1)_39%,rgba(107,107,107,1)_100%)] w-64 h-64 flex items-center justify-center text-center p-6 text-xs m-0
          content: "!text-md"
        cards:
          - text: Develop all aspects of your BSP for your product - including bootloaders, kernels, and root file systems.
          - text: Patch all aspects of the BSP for security updates and provide validated releases on demand.
          - text: Upgrade the bootloaders, kernels and root filesystems in a BSP smoothly when needed.
          - text: Provide long term support and maintenance for your BSP.
          - text: Provide regular validated releases.
  - row: container_row
    styles:
      outer: purple-gradient-container
    sections:
      - component: cards
        styles:
          container: mx-auto justify-center gap-x-12 gap-y-20 my-20 lg:flex-row flex-col p-0
          card_title: text-linaro-yellow
          card: lg:w-2/5 bg-background border rounded-xl p-8 flex flex-col
        cards:
          - title: Linux BSP
            text: Linaro employs 40+ Linux kernel maintainers and is consistently listed as one of the top ten contributors to the Linux kernel. We have taken this expertise and applied it to Linux BSPs, helping customers customize their Linux-based embedded systems to meet their specific device requirements.
            image:
              url: linaro-website/logos/Tux.svg_1_lcvryi.png
              alt: linux tux logo
              container: true
          - title: Android BSP
            text: Linaro has over the years played an influential role in shaping the Android ecosystem on Arm. This experience makes us well suited to develop Android BSPs for a wide range of use cases.
            image:
              url: /linaro-website/logos/android-head_3D_1_xjkgqb.png
              alt: android logo
              container: true
  - row: container_row
    styles:
      inner: pt-0 pb-12
    sections:
      - component: text
        text_content: Let us support all the lower-level aspects of the Linux/Android system for your embedded product so you can focus on innovation.
        style: bg-linaro-gradient text-transparent bg-clip-text h-auto text-xl lg:text-4xl text-center mb-4 p-4 lg:mx-72
      - component: buttons
        buttons:
          - text: Contact Us
            url: /contact
            style: linaro-gradient-button
---
