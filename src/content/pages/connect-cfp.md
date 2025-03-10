---
layout: ../../layouts/Flow.astro
slug: connect/schedule
title: Connect
description: Linaro Connect is a series of events that brings together the Arm Ecosystem. This is the ONLY place where developers, maintainers of both hardware and software can collaborate and discuss common problems
connectHero:
  child_page: true
  background: linaro-website/images/events/connect-hero-bg_kudeso.png
  inner_image: linaro-website/graphics/connect-logo_u9lscd.svg
flow:
  - row: container_row
    animation: none
    no_border: true
    styles:
      inner: py-0
      outer: mb-0
    sections:
      - component: title
        title_content:
          text: <span class="bg-linaro-gradient text-transparent bg-clip-text h-auto">Linaro Connect Lisbon 2025 Schedule</span>
          size: h1
        style: text-center
      - component: text
        text_content: The Linaro Connect 2025 schedule will go live on Wednesday 12 March 2025.
        style: text-center text-3xl mx-auto
      - component: buttons
        buttons:
          - text: Buy a ticket
            url: http://linaroconnect.bymeoblueticket.pt/
            style: linaro-gradient-button mt-4
          - text: Register with a code
            url: https://www.kitefor.events/events/linaro-connect-2025/register
            style: linaro-gradient-button mt-4
      # - component: connect_content
      #   styles:
      #     title: bg-linaro-gradient text-transparent bg-clip-text
      #     description: m-8
      #     content: items-center columns-1 md:columns-2 w-3/5 gap-12
      #   text_content: |
      #     The Linaro Connect 2025 event is calling for your proposals! Share your insights, innovations, and experiences with a global audience of tech enthusiasts, developers, and industry leaders.

      #     <span class="text-linaro-yellow">Why present at Linaro Connect?</span>
      #       - Engage with a diverse community of Arm experts.
      #       - Showcase your work to a global audience.
      #       - Foster collaboration and exchange ideas.

      #     <span class="text-linaro-yellow">When submitting your proposal, you have the following options to choose from:</span>
      #       - Technical presentation - 30 minutes (including Q&A)
      #       - Panel Discussion - 40 minutes 
      #       - Tutorial - 60 minutes
      #       - Training - 60 minutes 
      #       - Demo presentation at Demo Friday*
      # - component: text
      #   style: text-sm mx-auto w-4/5 md:w-2/5 mt-16
      #   text_content: |
      #     *Demo Friday is a Linaro Connect staple where attendees get to see a wide range of innovative Arm-based demos over lunch on the last day of the event. To submit your demo, select “Demo” in the “Session Type” section. Demos are allocated a table of size 1.8m wide by 0.5m deep. Please fill in [this form](https://forms.gle/Q8L1Wd9McpoSM1mN9) to request equipment such as monitors.
  # - row: container_row
  #   styles:
  #     inner: pt-16 pb-4
  #   animation: none
  #   no_border: true
  #   sections:
  #     - component: faded_line
  #     - component: cards
  #       styles:
  #         description: m-8
  #         content: not-prose leading-loose
  #         container: flex-col md:flex-row mx-auto items-center justify-center gap-16 m-24 not-prose w-full
  #         card: text-center w-1/8
  #       divider: true
  #       cards:
  #         - text: CFP closes<br><span class="text-linaro-yellow">Thursday<br>13 February 2025</span>
  #         - text: CFP notifications<br><span class="text-linaro-yellow">Wednesday<br>5 March 2025</span>
  #         - text: Schedule<br>Announcement<br><span class="text-linaro-yellow">Wednesday<br>12 March 2025</span>
  #         - text: Slides and demo<br>posters submission<br><span class="text-linaro-yellow">Tuesday<br>29 April 2025</span>
  #     - component: faded_line
  # - row: container_row
  #   title: Topics of Interest
  #   styles:
  #     outer: bg-transparent z-0 mt-16
  #     inner: py-8 md:py-16
  #     title: mx-auto
  #   no_border: true
  #   animation: none
  #   sections:
  #     - component: image_cards
  #       styles:
  #         container: max-w-full mx-auto justify-around gap-8 xl:gap-8 flex flex-wrap
  #         card: not-prose relative xl:h-[10rem] xl:w-[10rem] w-[8rem] h-[8rem]
  #         card_title: flex flex-col items-center justify-center h-full text-center max-w-full px-8 text-sm xl:text-lg py-0 m-0
  #         image: absolute w-full h-full aspect-square top-0 left-0 right-0 bottom-0 mx-auto my-auto
  #       cards:
  #         - title: AI & Machine Learning
  #           image:
  #             src: linaro-website/graphics/circle-gradient-border
  #             alt: ""
  #         - title: Arm Client PC and Windows
  #           image:
  #             alt: ""
  #             src: linaro-website/graphics/circle-gradient-border
  #         - title: Android
  #           image:
  #             alt: ""
  #             src: linaro-website/graphics/circle-gradient-border
  #         - title: Automation & Validation
  #           image:
  #             src: linaro-website/graphics/circle-gradient-border
  #             alt: ""
  #         - title: Automotive
  #           image:
  #             src: linaro-website/graphics/circle-gradient-border
  #             alt: ""
  #         - title: Big Data
  #           image:
  #             src: linaro-website/graphics/circle-gradient-border
  #             alt: ""
  #         - title: Confidential Compute
  #           image:
  #             src: linaro-website/graphics/circle-gradient-border
  #             alt: ""
  #         - title: Data Center & Cloud
  #           image:
  #             src: linaro-website/graphics/circle-gradient-border
  #             alt: ""
  #         - title: Edge, IoT & Embedded
  #           image:
  #             alt: ""
  #             src: linaro-website/graphics/circle-gradient-border
  #         - title: High Performance Computing
  #           image:
  #             src: linaro-website/graphics/circle-gradient-border
  #             alt: ""
  #         - title: Linux Kernel
  #           image:
  #             src: linaro-website/graphics/circle-gradient-border
  #             alt: ""
  #         - title: Open Source
  #           image:
  #             alt: ""
  #             src: linaro-website/graphics/circle-gradient-border
  #         - title: Regulatory, Licensing & Compliance
  #           image:
  #             alt: ""
  #             src: linaro-website/graphics/circle-gradient-border
  #         - title: Security
  #           image:
  #             src: linaro-website/graphics/circle-gradient-border
  #             alt: ""
  #         - title: Toolchain Development
  #           image:
  #             src: linaro-website/graphics/circle-gradient-border
  #             alt: ""
  #         - title: Virtualization
  #           image:
  #             src: linaro-website/graphics/circle-gradient-border
  #             alt: ""
  - row: container_row
    animation: none
    no_border: true
    full_width: true
    styles:
      inner: py-8
    sections:
      - component: large_image
        src: /linaro-website/images/events/connect-audience_bnhnll.png
        alt: Connect audience footer
        style: w-full
---
