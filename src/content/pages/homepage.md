---
layout: ../../layouts/Flow.astro
slug: "/"
title: Linaro | Arm solutions at lightspeed
description: |
  Linaro empowers rapid product deployment within the dynamic Arm ecosystem. Our cutting-edge solutions and collaborative platform facilitate the swift development, testing, and delivery of ARM-based innovations, enabling businesses to stay ahead in today's competitive technology landscape.
hero:
  title: >
    Arm Solutions at *Lightspeed*
  background_image: linaro-website/graphics/bg-logo-6
  description: Linaro empowers rapid product deployment within the dynamic Arm ecosystem. Our cutting-edge solutions and collaborative platform facilitate the swift development, testing, and delivery of Arm-based innovations, enabling businesses to stay ahead in today's competitive technology landscape.
  button:
    text: Contact Us
    url: /contact
  styles:
    text_container: max-w-80
    background: bg-right-top 2xl:bg-[length:1500px]
    description: text-md sm:text-lg
    background_container: mr-[20%] xl:mr-[10%] mt-[-5%]
    main_container: h-[calc(100vh)] min-h-[1100px] max-h-[1200px]
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
            text: We provide an ecosystem where experts, developers, and businesses collaborate seamlessly, pooling their knowledge and skills to drive innovation in the Arm ecosystem.
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
          container: max-w-full mx-auto justify-around gap-2 xl:gap-8 flex flex-wrap
          card: relative xl:h-[15rem] xl:w-[15rem] w-[10rem] h-[10rem]
          card_title: flex flex-col items-center justify-center h-full text-center max-w-full px-8 text-xl xl:text-2xl py-0 m-0
          image: absolute w-full h-full aspect-square top-0 left-0 right-0 bottom-0 mx-auto my-auto
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
          card_title: lg:min-h-[4ch] max-w-[10ch]
        cards:
          - title: Products & Solutions
            text: From optimized software platforms to cutting-edge development tools
            icon: rocket_launch
          - title: Services & Support
            text: Tailor-made solutions to meet your needs
            icon: settings
          - title: Ecosystem Projects
            text: Where industry leaders and open source ecosystems come together to innovate, develop and optimize.
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
            label: open source software maintainers
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
          - collection: news
            post: linaro-to-join-forces-with-renesas-on-soafee-integration-lab-project
          - collection: news
            post: linaro-undergoes-transformation-introducing-the-new-brand
          - collection: news
            post: linaro-unveils-onelab-at-connect-revolutionizing-edge-compute-interoperability-testing
          - collection: news
            post: linaro-announces-qualcomm-as-the-new-member-of-the-linaro-edge-group-ledge
  - row: container_row
    sections:
      - component: contact_buttons
        styles:
          card: max-w-[30ch]  mx-auto flex flex-col justify-center items-center
          container: justify-around gap-x-5 gap-y-20
          button: mt-8
          card_title: text-[2rem] text-center
        buttons:
          - button_text: Sign up for Linaro Insights newsletter
            type: insight
---
