---
layout: ../../layouts/Flow.astro
slug: projects/automotive-iot-edge
title: Automotive, IoT & Edge
description: |
  Linaro collaborates with member companies to develop open standards and interfaces that accelerate and secure the deployment of Automotive, IoT, and Edge solutions. Join us in revolutionizing the way we drive innovation at the edge.
hero:
  title: >
    From autonomous AI-driven features to software-defined vehicles
  background_image: linaro-website/graphics/car_inside_1_vp8snl
  description: |
    Linaro collaborates with member companies to develop open standards and interfaces that accelerate and secure the deployment of Automotive, IoT, and Edge solutions. Join us in revolutionizing the way we drive innovation at the edge.

  button:
    text: Contact Us
    url: /contact
  styles:
    text_container: max-w-2xl
    title: max-w-2xl mb-12
    description: max-w-xl text-xl
    background: bg-right-top
    background_container: p-[5%] ml-[5%] xl:ml-0
flow:
  - row: container_row
    title: Trusted Partners
    sections:
      - component: logo_grid
        logos:
          - src: "linaro-website/logos/amd-xilinx"
            alt: AMD Xilinx logo
          - src: "linaro-website/logos/arm"
            alt: Arm logo
          - src: "linaro-website/logos/hisilicon"
            alt: HiSilicon logo
          - src: "linaro-website/logos/quic"
            alt: Qualcomm logo

  - row: container_row
    title: From autonomous AI-driven features to software-defined vehicles
    styles:
      outer: purple-gradient-container
    sections:
      - component: cards
        styles:
          card: max-w-[60ch]
          container: justify-start gap-x-16
        cards:
          - title: Trusted Substrate
            text: Trusted Substrate is a BIOS that brings standards based secure booting and over-the-air (OTA) updates to the most trust demanding embedded computing projects such as automotive and robotics. The project aims to upstream all necessary technologies in multiple projects to enable Arm SystemReady compliance.
            button:
              text: See More
              url: https://linaro.atlassian.net/wiki/spaces/TS/overview
          - title: Heterogeneous Platform
            text: The Heterogeneous Platform project is focused on software that allows the different core types or OS types to work together and creates a standards based framework to make the system developers job easier. The majority of Automotive SOCs use multiple CPU core types. Adding M profile or R profile cores to a SOC with A profile cores, allows the A profile cores to focus on the Linux tasks it is designed for, while M/R cores can focus on low latency sense/control loops, isolated security, or increased safety.
            button:
              text: See More
              url: https://linaro.atlassian.net/wiki/spaces/HPP/overview
          - title: Project Orko
            text: |
              Project Orko delivers the foundational work needed to support VirtIO interfaces in the upstream. This is done by providing both the specs and implementations that the automotive industry can leverage in their future platforms.
            button:
              text: See More
              url: https://linaro.atlassian.net/wiki/spaces/ORKO/overview

  - row: container_row
    sections:
      - component: membership
        form_id: "4"
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
---
