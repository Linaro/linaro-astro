---
layout: ../../layouts/Flow.astro
slug: /solutions/iot-embedded
title: Iot-embedded | Linaro
description: |
  Where innovation meets efficiency
hero:
  title: >
    Where innovation meets efficiency
  background_image: linaro-website/graphics/iStock_chwihb
  description: Your journey for better, faster and more efficient embedded systems development starts here.
  button:
    text: Contact Us
    url: /contact
  styles:
    text_container: max-w-4xl
    title: max-w-4xl
    description: max-w-80
    background: bg-center
flow:
  - row: container_row
    title: IoT & Embedded Applications
    styles: purple-gradient-container
    sections:
      - component: backcards
        styles:
          card: max-w-[30ch] text-center flex flex-col items-center
          container: justify-center gap-24
        background_image: linaro-website/graphics/Infinito_tod5dc

        cards:
          - text: From hardware support to software optimization and testing, we offer end-to-end solutions for IoT and Embedded Systems projects. We provide comprehensive support and services throughout the entire product lifecycle, from concept to deployment, ensuring that your project is delivered on time.

          - text: Scalability and Flexibility
            style: text-3xl
          - text: Linaro's solutions are designed to be highly scalable and flexible, allowing organizations to easily adapt and scale their IoT and Embedded Systems deployments as their needs evolve. Whether you're deploying a single device or managing a large-scale IoT network, our solutions can scale to meet your requirements.

  - row: container_row
    styles: purple-gradient-container
    sections:
      - component: text
        text_content: Linaro's solutions are built with security in mind
        style: text-center text-3xl max-w-[54ch] mx-auto font-bold mb-24
      - component: cards
        styles:
          card: max-w-[30ch] text-center flex flex-col items-center prose-headings:text-[1.5rem]
          container: justify-center gap-24
          cardTitle: text-linaro-yellow
        cards:
          - title: ONELab
            text: ONELab revolutionizes edge and IoT device interoperability testing.
            button:
              text: Find out more
              url: /onelab
          - title: CodeLinaro
            text: Revolutionize Your Embedded Software Development with CodeLinaro
            button:
              text: Request a demo
              url: https://www.codelinaro.org/
#   - row: container_row
#     title: Explore Related Resources
#     styles: purple-gradient-container
#     sections:
#       - component: cards
---
