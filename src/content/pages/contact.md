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
    text_container: text-center w-full
    title: w-full text-center
    background: bg-right-top md:bg-top opacity-50
    description: text-md sm:text-lg
    main_container: max-h-[30rem] min-h-[30ch] h-[30vh]
flow:
  - row: container_row
    sections:
      - component: contact_buttons
        styles:
          card: max-w-[30ch]  mx-auto flex flex-col justify-center items-center
          container: justify-around gap-x-5 gap-y-20
          button: mt-8
          card_title: text-[2rem] text-center
        buttons:
          - title: Sales Enquiries
            type: form
            icon: workspaces
            button_text: Get in Touch
            form_id: "7"
            modal_id: general
          - title: Media Enquiries
            type: form
            icon: flash_on
            button_text: Get in Touch
            form_id: "8"
            modal_id: marketing
          - title: Careers Enquiries
            type: link
            icon: handshake
            button_text: Get in Touch
            url: /careers
  - row: container_row
    styles:
      outer: purple-gradient-container
    sections:
      - component: cards
        styles:
          card: max-w-[40ch]  flex flex-col items-start
          container: justify-center gap-24
        cards:
          - title: Legal Information
            text: The Linaro legal pages/documents can be found here - [/legal/](/legal)

          - title: Getting Involved with the Community
            text: For discussion around Linux and Open Source on Arm, subscribe to the lists on [Linaro Lists Site](https://lists.linaro.org/mailman3/lists/).
---
