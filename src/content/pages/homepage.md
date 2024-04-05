---
layout: ../../layouts/Flow.astro
slug: ""
title: Linaro
description: |
  Linaro empowers rapid product deployment within the dynamic ARM ecosystem. Our cutting-edge solutions and collaborative platform facilitate the swift development, testing, and delivery of ARM-based innovations, enabling businesses to stay ahead in today's competitive technology landscape.
hero:
  title: >
    Arm Solutions at *Lightspeed*
  background_image: linaro-website/graphics/bg-logo
  description: Linaro empowers rapid product deployment within the dynamic ARM ecosystem. Our cutting-edge solutions and collaborative platform facilitate the swift development, testing, and delivery of ARM-based innovations, enabling businesses to stay ahead in today's competitive technology landscape.
  button:
    text: Contact Us
    url: /contact
  styles:
    text_container: max-w-80
    background: bg-right-top
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
    styles: purple-gradient-container
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
    title: We are Experts of
    styles: bg-transparent z-0
    sections:
      - component: cards
        styles:
          container: max-w-6xl mx-auto justify-around gap-x-28 gap-y-20
          card: w-[35ch]
        cards:
          - title: Solutions
            text: hdhdhdhdh ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            icon: rocket_launch
            button:
              text: See More
              url: /solutions
          - title: Technologies
            text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            icon: key
            button:
              text: See More
              url: /technologies
          - title: Service & Support
            text: We provide an ecosystem where experts, developers, and businesses collaborate seamlessly, pooling their knowledge and skills to drive innovation in the Arm ecosystem. We ensure that the collective intelligence of the Arm community can be harnessed to create exceptional, cutting-edge solutions.
            button:
              text: See More
              url: /services
            icon: done_outline
          - title: Collaborative Projects
            text: We provide an ecosystem where experts, developers, and businesses collaborate seamlessly, pooling their knowledge and skills to drive innovation in the Arm ecosystem. We ensure that the collective intelligence of the Arm community can be harnessed to create exceptional, cutting-edge solutions.
            icon: diversity
            button:
              text: See More
              url: /collaborative-projects
  - row: container_row
    title: Our Maintainers Rock!
    styles: purple-gradient-container
    sections:
      - component: stat_grid
        stats:
          - value: "+125"
            label: contributions to linux kernel releases
          - value: "+495"
            label: open source software maintaners
          - value: "+943"
            label: open source software maintaners
          - value: "+329"
            label: patches submitted to upstream projects in the past 2 years
      - component: buttons
        buttons:
          - text: Contact Us
            url: /contact
            style: linaro-gradient-button
  - row: container_row
    title: Don't miss our *latest updates*
    background_image: linaro-website/graphics/bg-logo-4
    styles: bg-center-bottom bg-no-repeat bg-[center_top_0%] bg-[length:200%] md:bg-[length:150%] lg:bg-[length:100%] xl:bg-[length:90%] pb-[8rem] mb-[-8rem]
    sections:
      - component: socials
---
