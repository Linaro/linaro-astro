---
layout: ../../layouts/Flow.astro
slug: "/"
title: Linaro | Arm solutions at lightspeed
description: |
  Linaro empowers rapid product deployment within the dynamic ARM ecosystem. Our cutting-edge solutions and collaborative platform facilitate the swift development, testing, and delivery of ARM-based innovations, enabling businesses to stay ahead in today's competitive technology landscape.
hero:
  title: >
    Arm Solutions at *Lightspeed*
  background_image: linaro-website/graphics/bg-logo-6
  description: Linaro empowers rapid product deployment within the dynamic ARM ecosystem. Our cutting-edge solutions and collaborative platform facilitate the swift development, testing, and delivery of ARM-based innovations, enabling businesses to stay ahead in today's competitive technology landscape.
  button:
    text: Contact Us
    url: /contact
  styles:
    text_container: max-w-80
    background: bg-right-top
    description: text-md sm:text-lg
    background_container: mr-[20%] xl:pr-[20%]
flow:
  - row: container_row
    title: Trusted by Leading Companies
    sections:
      - component: file_carousel
        filename: trusted_by
      - component: text
        text_content: We foster an environment of collaboration, standardization, and optimization to accelerate the deployment of Arm-based products and technologies.
        style: text-center max-w-4xl mx-auto text-xl
      - component: buttons
        buttons:
          - text: Contact Us
            url: /contact
            style: linaro-gradient-button
  - row: container_row
    title: Why Choose Linaro?
    styles:
      outer: purple-gradient-container
    sections:
      - component: cards
        styles:
          card: w-[35ch]
          container: justify-around gap-x-28 gap-y-20
        cards:
          - title: Trust
            text: We are transparent and our open approach fosters trust among partners, developers, and the community. We build trust ensuring the reliability and credibility of Arm-based solutions.
            icon: handshake
          - title: Collaboration
            text: We provide an ecosystem where experts, developers, and businesses collaborate seamlessly, pooling their knowledge and skills to drive innovation in the Arm ecosystem. We ensure that the collective intelligence of the Arm community can be harnessed to create exceptional, cutting-edge solutions.
            icon: workspaces
          - title: Quality
            text: Our dedication to quality ensures that the software and tools we deliver to the Arm ecosystem are reliable, efficient, and of the highest standard. Our commitment to quality contributes to the success and trustworthiness of Arm-based technologies.
            icon: done_outline
  - row: container_row
    title: We are Experts in
    styles:
      outer: bg-transparent z-0
    sections:
      - component: image_cards
        styles:
          container: max-w-full mx-auto justify-around gap-x-8 gap-y-8 flex flex-wrap
          card: w-[15rem] relative h-[15rem]
          card_title: flex flex-col items-center justify-center h-full text-center max-w-full px-8 text-2xl py-0 m-0
          image: absolute w-full  h-full aspect-square top-0 left-0 right-0 bottom-0 mx-auto my-auto
        cards:
          - title: Automotive
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: Testing
            image:
              alt: ""
              src: linaro-website/graphics/circle-gradient-border
          - title: Linux Kernel
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
            icon: done_outline
          - title: Security
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: Cloud & Edge Computing
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: IoT & Embedded
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: Artificial Intelligence
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: CI/CD
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: Toolchain
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: Virtualization
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
  - row: container_row
    title: Building Production-Grade with Linaro
    styles:
      outer: purple-gradient-container
    sections:
      - component: cards
        styles:
          card: w-[35ch]
          container: justify-around gap-x-28 gap-y-20
        cards:
          - title: Production & Solutions
            text: From optimized software platforms to cutting-edge development tools
            icon: rocket_launch
          - title: Services & Support
            text: Tailor-made solutions to meet your needs
            icon: settings
          - title: Collaborative Projects
            text: Where industry leaders and open source ecosystems come together to innovate, develop and optmize.
            icon: diversity
  - row: container_row
    title: Our Maintainers Rock!
    animation: "none"
    sections:
      - component: stat_grid
        stats:
          - value: 41969
            label: contributions to linux kernel releases
          - value: 68
            label: open source software maintaners
          - value: 47000
            label: patches submitted to upstream projects in the past 2 years
      - component: buttons
        buttons:
          - text: Contact Us
            url: /contact
            style: linaro-gradient-button
  - row: container_row
    title: Don't miss our *latest updates*
    background_image: linaro-website/graphics/bg-logo-4
    styles:
      outer: bg-center-bottom bg-no-repeat bg-[center_top_0%] bg-[length:200%] md:bg-[length:150%] lg:bg-[length:100%] xl:bg-[length:90%] pb-[8rem] mb-[-8rem]
    sections:
      - component: articles
        posts:
          - collection: blogs
            post: linaro-fosdem-2024
---
