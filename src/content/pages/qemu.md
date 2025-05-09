---
layout: ../../layouts/Flow.astro
slug: virtualization/qemu
title: QEMU
description: |
  Linaro is the QEMU expert
hero:
  title: >
    Linaro is the <span class="text-linaro-yellow">QEMU</span> expert
  background_image: linaro-website/graphics/empowered_developer_1_rfcnad.png
  description: ""
  newHero: true
  styles:
    text_container: max-w-2xl text-center w-full mx-auto
    title: max-w-2xl text-center
    background: mx-auto
    background_container: p-[5%]
flow:
  - row: container_row
    styles:
      outer: purple-gradient-container pt-0
    sections:
      - component: text
        text_content: At Linaro, we don't just use QEMU<br><span class="bg-linaro-gradient text-transparent bg-clip-text h-auto">We help shape it</span>
        style: text-center max-w-4xl mx-auto text-4xl
      - component: cards
        styles:
          container: max-w-6xl mx-auto justify-around gap-x-28 gap-y-20 my-20
          card: w-[35ch]
        cards:
          - title: Experts in Upstream Contribution
            text: We actively maintain and contribute to upstream QEMU, ensuring the latest Arm features and device models are available and production-ready
            icon: edge_ai

          - title: Custom Device Emulation
            text: Linaro provides early QEMU device model support for custom SoCs and boards, accelerating hardware bring-up and testing by mirroring real hardware.
            icon: custom_ai

          - title: CI Integration & Automation
            text: We integrates QEMU into continuous integration systems, enabling developers to test frequently without needing physical hardware.
            icon: ai_dev

          - title: Support for Industry Standards
            text: Our work standardizes QEMU across Arm platforms, facilitating efficient software development and validation.
            icon: cloud_ai
      - component: buttons
        buttons:
          - text: Contact Us
            url: /contact
            style: linaro-gradient-button mt-4
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
            url: /blog?tags=qemu
          - title: Watch presentations and webinars
            icon: webinar
            url: https://resources.linaro.org/en/search?q=Qemu
---
