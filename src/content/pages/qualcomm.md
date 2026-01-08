---
layout: ../../layouts/Flow.astro
slug: projects/qualcomm-platform
title: Qualcomm Platform Services
description: |
  Linaro is a leader in providing Linux BSP development, maintenance and optimization for Qualcomm platforms such as Qualcomm Snapdragon. 
  Linaro software engineers are recognized worldwide as experts in the Linux kernel community, and the maintainers in the official Linux kernel for main key Qualcomm subsystems and drivers.
hero:
  title: >
    Qualcomm Platform Services
  background_image: linaro-website/graphics/qualcomm
  description: |
    Linaro is a leader in providing Linux BSP development, maintenance and optimization for Qualcomm platforms such as Qualcomm Snapdragon. 

    Linaro software engineers are recognized worldwide as experts in the Linux kernel community, and the maintainers in the official Linux kernel for main key Qualcomm subsystems and drivers.
  button:
    text: Contact Us
    url: /contact
  styles:
    text_container: max-w-4xl
    title: max-w-md
    description: max-w-80
    background: bg-right-top
    background_container: ml-[5%]
flow:
  - row: container_row
    title: Qualcomm and Linaro
    styles:
      outer: purple-gradient-container
    sections:
      - component: text
        text_content: Ten years of open-source innovation
        style: text-center text-4xl mx-auto font-bold mb-24 text-yellow-500
      - component: cards
        styles:
          container: w-full mx-auto justify-around gap-16
          card: md:w-[50ch]
        cards:
          - title: Land
            text: Introduce support for Qualcomm SoCs and technologies in open source (kernel,      toolchain, bootloader, QEMU, etc). Track open source projects, adapt and maintain
            icon: handshake
          - title: Package
            text: Integrate, test and package publicly available fully upstream Qualcomm Linux OS images (Yocto Project, Debian, etc)
            icon: low_density
          - title: Certify
            text: Achieve and maintain compliance with industry standards (YP Compatibility, Arm System Ready, etc)
            icon: shield_person
          - title: Deploy
            text: Support Qualcomm’s customers and device makers with customizations, compliance artifacts, OS production-grade releases, support and maintenance
            icon: rocket_launch
  - row: container_row
    sections:
      - component: text
        text_content: Qualcomm’s Robotic Platforms Upstream Support Status
        style: text-center text-4xl font-bold
      - component: image_cards
        styles:
          container: mx-auto flex justify-around
          card: w-[50ch] text-center
        cards:
          - text: Started with DragonBoards
              (db410c, db820c), linux kernel 4.4
            image:
              src: linaro-website/graphics/DragonBoard
              alt: ""
          - text: Moved on to Robotics Boards (RB3, RB5, RB2, RB1) and latest kernel 6.4
            image:
              src: linaro-website/graphics/Qualcomm_board
              alt: ""
      - component: cards
        styles:
          container: mx-auto flex justify-around prose-a:break-all
          card: max-w-5xl text-center
          card_title: text-2xl
        cards:
          - title: Supported board peripherals
            text: |
              Display, GPU (freedreno), DSPs, WLAN, audio, BT, CPU freq scaling, Hot Plug, Storage, PCIe, FastRPC, USB, Security Crypto, Thermal, Bus scaling, I2C/SPI/UART, Watchdog
      - component: cards
        styles:
          container: mx-auto flex justify-around my-24 prose-a:break-all border-2 border-grey rounded-3xl p-6 gap-16
          card: w-[50ch] text-left
          card_title: text-2xl
        cards:
          - title: Upstream reference builds
            text: |
              [https://releases.linaro.org/96boards/rb5/linaro/](https://releases.linaro.org/96boards/rb5/linaro/)

              [https://releases.linaro.org/96boards/dragonboard845c/linaro/](https://releases.linaro.org/96boards/dragonboard845c/linaro/)

              [https://releases.linaro.org/96boards/rb2/linaro/](https://releases.linaro.org/96boards/rb2/linaro/)
          - title: Upstream Releases
            text: |
              * Yocto Project Compatible meta-qcomBSPs layer
                https://git.yoctoproject.org/meta-qcom/
              * Linaro Images based on latest stable kernel
              * Mainline Snapshot Images
          - title: Unified Boot for RBx platforms
            text: |
              * U-Boot powered
              * Single Kernel image for all platforms
              * Single disk image for all platforms

          - title: Arm SystemReady-IR Compliance
            text: |
              * Work via Linaro Edge Group (PR coming!)
              * RB3, RB5, RB2, RB1
      # - component: membership
      #   form_id: "4"
      #   formName: "projects"
      #   description: We provide a collaborative platform for the different industry players within the Arm ecosystem to come together, discuss, agree upon, and implement solutions to shared problems. We offer various avenues for engaging in collaborative engineering.
      #   styles:
      #     card: max-w-[30ch] text-center flex flex-col items-center
      #   text: "Check the different possibilities to become a project member:"
      #   MemberManagementPanel:
      #     - title: Become a
      #       title_style: whitespace-nowrap
      #       name: Project Member
      #       description: Access one project
      #     - title: Become a
      #       title_style: whitespace-nowrap
      #       name: Group Member
      #       description: Access a group and enter its entire projects portfolio
      #     - title: Become a
      #       title_style: whitespace-nowrap
      #       name: Core Member
      #       description: Access all Linaro driven projects & groups
      #   style: max-w-xl prose-em:linaro-gradient-text prose-em:not-italic prose-headings:text-5xl prose-headings:my-3 prose-ul:text-xl prose-headings:leading-tight prose-p:text-3xl text-center
  - row: container_row
    title: Explore Related Resources
    styles:
      outer: bg-transparent z-0
    sections:
      - component: more_info
        styles:
          container: justify-around border-2 border-grey rounded-3xl py-10
          card: max-w-md  text-center
        more_info:
          - title: Check out the most read blogs
            icon: blogs
            url: /blog?tags=qualcomm
#   - row: container_row
#     title: Explore Related Resources
#     styles: purple-gradient-container
#     sections:
#       - component: cards
---
