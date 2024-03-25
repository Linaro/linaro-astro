layout: ../../layouts/Flow.astro
slug: ""
title: Linaro Astro Template
description: |
  This is the Astro template for building static Linaro websites.
hero:
  title: > 
    Arm Solutions at *Lightspeed*
  background_image: linaro-website/graphics/bg-logo-3
  description: Linaro empowers rapid product deployment within the dynamic ARM ecosystem. Our cutting-edge solutions and collaborative platform facilitate the swift development, testing, and delivery of ARM-based innovations, enabling businesses to stay ahead in today's competitive technology landscape.
  button:
    text: Contact Us
    url: /contact
flow:
  - row: container_row
    title: Trusted by Leading Companies
    style:
    sections:
      - component: file_carousel
        filename: trusted_by
      - component: text
        text_content: We foster an environment of collaboration, standardization, and optimization to accelerate the deployment of Arm-based products and technologies.
        style: text-center max-w-4xl mx-auto
      - component: buttons
        buttons:
          - text: Contact Us
            url: /contact
            style: linaro-gradient-buton
