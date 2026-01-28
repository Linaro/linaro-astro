---
slug: contact
title: Contact
description: |
  Linaro empowers rapid product deployment within the dynamic ARM ecosystem. Our cutting-edge solutions and collaborative platform facilitate the swift development, testing, and delivery of ARM-based innovations, enabling businesses to stay ahead in today's competitive technology landscape.
hero:
  title: >
    Contact Linaro
  background_image: /linaro-website/graphics/young-woman-with-curly-hair-using-phone-street_1_zfsbea.png
  description: ""
  styles:
    main_container: lg:h-[calc(100vh)] h-[calc(35vh)]
    text_container: text-center w-full lg:pl-40
    title: w-full text-left
    background: w-full
    description: text-md sm:text-lg
flow:
  - row: container_row
    styles:
      outer: purple-gradient-container
    sections:
      - component: contact
        form_id: "7"
        formName: "sales_contact"
        styles:
          card: flex flex-col md:flex-row bg-background border rounded-xl p-8
          form: w-full md:w-1/2 bg-background
          content: w-full md:w-1/2 text-2xl
        content: We’d love to hear from you so please send us a message and one of our team will be in touch!
  - row: container_row
    sections:
      - component: faded_line
      - component: cards
        styles:
          card: max-w-[40ch]  flex flex-col items-start
          container: justify-center gap-24
        cards:
          - title: Legal Information
            text: Linaro's legal information can be found on the [Legal page](/legal).

          - title: <span class="text-linaro-yellow">Subscribe to our newsletter</span>
            contact_button:
              button_text: Subscribe
              type: insight
              formName: newsletter
---
