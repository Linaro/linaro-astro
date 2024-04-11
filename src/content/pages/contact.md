---
layout: ../../layouts/Flow.astro
slug: /contact
title: Linaro
description: |
  Linaro empowers rapid product deployment within the dynamic ARM ecosystem. Our cutting-edge solutions and collaborative platform facilitate the swift development, testing, and delivery of ARM-based innovations, enabling businesses to stay ahead in today's competitive technology landscape.
hero:
  title: >
    Contact Linaro
  background_image: linaro-website/graphics/close-up-woman_sbf1xz
  description: ""
  styles:
    text_container: max-w-[45rem]
    background: bg-right-top
    description: text-md sm:text-lg
flow:
  - row: container_row
    sections:
      - component: cards
        styles:
          card: max-w-[18ch]  mx-auto justify-center
          container: justify-around gap-x-5 gap-y-20
          button_style: mt-8
        cards:
          - text: Membership & General Enquiries
            icon: workspaces
            button:
              text: Get in Touch
              url: /
          - text: Media Enquiries
            icon: flash_on
            button:
              text: Get in Touch
              url: /
          - text: Quality
            icon: rocket_launch
            button:
              text: Get in Touch
              url: /
          - text: Careers Enquiries
            icon: handshake
            button:
              text: Get in Touch
              url: /
  - row: container_row
    styles: purple-gradient-container
    sections:
      - component: cards
        styles:
          card: max-w-[30ch]  flex flex-col items-center
          container: justify-center gap-24

        cards:
          - title: Technical Support
            text: |
              96Boards Technical Support - If you have a technical support query relating to 96Boards, please post your question on 96Boards.

              Linaro Technical Support - If you have a technical support query relating to Linaro, please go to our support page.

          - title: Legal Information
            text: The Linaro legal pages/documents can be found here - /legal/

          - title: Getting Involved with the Community
            text: For discussion around Linux and Open Source on Arm, subscribe to the lists on Linaro Lists Site.
---
