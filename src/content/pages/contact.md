---
slug: contact
title: Contact
description: |
  Linaro empowers rapid product deployment within the dynamic ARM ecosystem. Our cutting-edge solutions and collaborative platform facilitate the swift development, testing, and delivery of ARM-based innovations, enabling businesses to stay ahead in today's competitive technology landscape.
flow:
  - row: container_row
    styles:
      outer: "purple-gradient-container !pt-0 !pb-8 !mb-0"
      inner: "!pt-0 pb-8"
    sections:
      - component: contact
        form_id: "7"
        formName: "sales_contact"
        styles:
          card: pt-0 px-4 pb-4 md:px-8 md:pb-8 w-full max-w-full
          form: w-full max-w-xl min-w-0 px-4 md:px-8
        content: We’d love to hear from you so please send us a message and one of our team will be in touch!
  - row: container_row
    styles:
      inner: "!pt-12 py-12"
    sections:
      - component: faded_line
      - component: cards
        styles:
          card: max-w-[40ch] flex flex-col items-center text-center gap-6
          card_title: whitespace-normal sm:whitespace-nowrap
          container: justify-center gap-24
        cards:
          - title: <span class="text-linaro-yellow">Subscribe to our newsletter</span>
            contact_button:
              button_text: Subscribe
              type: insight
              formName: newsletter
---
