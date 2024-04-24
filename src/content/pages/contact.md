---
layout: ../../layouts/Flow.astro
slug: contact
title: Contact
description: |
  Linaro empowers rapid product deployment within the dynamic ARM ecosystem. Our cutting-edge solutions and collaborative platform facilitate the swift development, testing, and delivery of ARM-based innovations, enabling businesses to stay ahead in today's competitive technology landscape.
hero:
  title: >
    Contact Linaro
  background_image: linaro-website/graphics/close-up-woman_sbf1xz
  description: ""
  styles:
    text_container: max-w-[45rem]
    background: bg-center
    description: text-md sm:text-lg
    image_size: h-[calc(50vh)].
flow:
  - row: container_row
    sections:
      - component: cards
        styles:
          card: max-w-[30ch]  mx-auto flex flex-col justify-center items-center
          container: justify-around gap-x-5 gap-y-20
          button_style: mt-8
          card_title: text-[2rem] text-center
        cards:
          - title: Membership & General Enquiries
            icon: workspaces
            button:
              text: Get in Touch
              url: mailto:contact@linaro.org
          - title: Media Enquiries
            icon: flash_on
            button:
              text: Get in Touch
              url: mailto:marketing@linaro.org
          - title: Services Enquiries
            icon: rocket_launch
            button:
              text: Get in Touch
              url: mailto:contact@linaro.org
          - title: Careers Enquiries
            icon: handshake
            button:
              text: Get in Touch
              url: https://careers.linaro.org/
  - row: container_row
    styles: purple-gradient-container
    sections:
      - component: cards
        styles:
          card: max-w-[40ch]  flex flex-col items-start
          container: justify-center gap-24
        cards:
          - title: Technical Support
            text: |
              96Boards Technical Support - If you have a technical support query relating to 96Boards, please post your question on [96Boards](https://discuss.96boards.org/).

              Linaro Technical Support - If you have a technical support query relating to Linaro, please go to our support page.

          - title: Legal Information
            text: The Linaro legal pages/documents can be found here - [/legal/](/legal)

          - title: Getting Involved with the Community
            text: For discussion around Linux and Open Source on Arm, subscribe to the lists on [Linaro Lists Site](https://lists.linaro.org/mailman3/lists/).
---
