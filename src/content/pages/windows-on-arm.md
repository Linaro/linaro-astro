---
layout: ../../layouts/Flow.astro
slug: projects/windows-on-arm
title: Windows on Arm
description: |
  Thanks to the collaborative work among Linaro, Arm, CIX Technology, Microsoft and Qualcomm we are building the Windows on Arm ecosystem for native development, unlocking better user experiences and broader adoption of Windows on Arm platforms.
hero:
  title: >
    Advancing the Arm ecosystem across diverse platforms
  background_image: linaro-website/graphics/man-sofa
  description: Thanks to the collaborative work among Linaro, Arm, CIX Technology, Microsoft and Qualcomm we are building the Windows on Arm ecosystem for native development, unlocking better user experiences and broader adoption of Windows on Arm platforms.
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
    sections:
      - component: text
        text_content: Growing the Arm open source ecosystem for Windows involves setting up CI and testing, coordinating with vendors to analyze and fix regressions and establishing relationships with project maintainers.
        style: text-center text-4xl mx-auto font-bold mb-24
      - component: image_cards
        styles:
          container: gap-12 justify-center flex flex-wrap
          card: flex flex-col justify-center items-center bg-white linaro-gradient-border aspect-square w-[20ch] rounded-full
          card_title: text-xl m-0 text-black font-normal
          image: w-[10ch] m-0
        cards:
          - title: Bazel
            image:
              src: linaro-website/logos/bazel
              alt: Bazel logo
          - title: Blender
            image:
              src: linaro-website/logos/blender
              alt: Blender logo
          - title: CMake
            image:
              src: linaro-website/logos/cmake
              alt: CMake logo
          - title: Dart
            image:
              src: linaro-website/logos/dart
              alt: Dart logo
          - title: Flutter
            image:
              src: linaro-website/logos/flutter
              alt: Flutter logo
          - title: Go
            image:
              src: linaro-website/logos/golang
              alt: Go logo
          - title: LLVM
            image:
              src: linaro-website/logos/llvm
              alt: LLVM logo
          - title: MySQL
            image:
              src: linaro-website/logos/mysql
              alt: MySQL logo
          - title: node.js
            image:
              src: linaro-website/logos/nodejs
              alt: node.js logo
          - title: OpenVPN
            image:
              src: linaro-website/logos/openvpn
              alt: OpenVPN logo
          - title: Perl
            image:
              src: linaro-website/logos/perl
              alt: Perl logo
          - title: PostgreSQL
            image:
              src: linaro-website/logos/postgresql
              alt: PostgreSQL
          - title: Python
            image:
              src: linaro-website/logos/python
              alt: Python logo
          - title: Qt
            image:
              src: linaro-website/logos/qt
              alt: Qt logo
          - title: Rust
            image:
              src: linaro-website/logos/rust
              alt: Rust logo
          - title: Tcl/Tk
            image:
              src: linaro-website/logos/tcltk
              alt: Tcl/Tk logo
  - row: container_row
    no_border: true
    styles:
      outer: purple-gradient-container mt-[-5rem]
    sections:
      - component: cards
        styles:
          card: max-w-[50ch] text-center flex flex-col items-start gap-8 text-left prose-invert prose-p:text-left prose-p:text-xl prose-h4:text-3xl prose-headings:text-left prose-h4:my-4 prose-h4:mt-0
          container: justify-center gap-36
          card_title: text-linaro-yellow text-5xl text-left w-full
        cards:
          - title: Client PC
            text: |
              #### UEFI+ACPI Firmware for Arm-based client devices.

              This project aims to enable booting both Linux and Windows on ARM based client machines using the same ARM SystemReady SR compliant UEFI/ACPI firmware.
            button:
              text: Learn More
              url: https://linaro.atlassian.net/wiki/spaces/CLIENTPC
          - title: WPerf
            text: |
              #### Performance analysis tool for Windows

              An open-source performance analysis tool for Windows similar to Linux Perf.
            button:
              text: Learn More
              url: https://linaro.atlassian.net/wiki/spaces/WPERF
  # - row: container_row
  #   title: Watch the Windows on Arm Testimonials
  #   sections:
  #     - component: videos
  #       styles:
  #         container: border-[0.5px] border-grey
  #         card: max-w-[40ch]
  #       videos:
  #         - src: https://static.linaro.org/videos/woa_microsoft.mp4
  #           title: Marcus Perryman  |  Principle Engineer Microsoft
  #           thumbnail: /videos/woa_microsoft.png
  #         - src: https://static.linaro.org/videos/woa_arm.mp4
  #           title: David Whaley  |  Director Ecosystem Partnerships, Arm
  #           thumbnail: /videos/woa_arm.png
  #         - src: https://static.linaro.org/videos/woa_cix.mp4
  #           title: Fang Liu  |  CTO CIX Technology
  #           thumbnail: /videos/woa_cix.png
  - row: container_row
    sections:
      - component: membership
        form_id: "4"
        formName: "projects"
        description: We provide a collaborative platform for the different industry players within the Arm ecosystem to come together, discuss, agree upon, and implement solutions to shared problems. We offer various avenues for engaging in collaborative engineering.
        styles:
          card: max-w-[30ch] text-center flex flex-col items-center
        text: "Check the different possibilities to become a project member:"
        MemberManagementPanel:
          - title: Become a
            title_style: whitespace-nowrap
            name: Project Member
            description: Access one project
          - title: Become a
            title_style: whitespace-nowrap
            name: Group Member
            description: Access a group and enter its entire projects portfolio
          - title: Become a
            title_style: whitespace-nowrap
            name: Core Member
            description: Access all Linaro driven projects & groups
        style: max-w-xl prose-em:linaro-gradient-text prose-em:not-italic prose-headings:text-5xl prose-headings:my-3 prose-ul:text-xl prose-headings:leading-tight prose-p:text-3xl text-center
  - row: container_row
    title: Explore Related Resources
    styles:
      outer: bg-transparent z-0
    sections:
      - component: more_info
        styles:
          container: justify-around border-2 border-[#6B6B6B] rounded-3xl py-10
          card: max-w-md  text-center
        more_info:
          - title: Check out the most read blogs
            icon: blogs
            url: /blog?tags=windows-on-arm
          - title: Watch presentations and webinars
            icon: webinar
            url: https://resources.linaro.org/en/tags/0e965752-e803-4fd8-9a71-f01c5c1a113f
#   - row: container_row
#     title: Explore Related Resources
#     styles: purple-gradient-container
#     sections:
#       - component: cards
---
