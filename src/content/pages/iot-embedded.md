---
layout: ../../layouts/Flow.astro
slug: /solutions/iot-embedded
title: IoT & Embedded
description: |
  Where Innovation Meets Efficiency
hero:
  title: >
    Where Innovation Meets Efficiency
  background_image: linaro-website/graphics/iStock_chwihb
  description: Your journey for better, faster and more efficient embedded systems development starts here.
  button:
    text: Contact Us
    url: /contact
  styles:
    text_container: max-w-4xl
    title: max-w-md
    description: max-w-80 text-xl
    background: bg-center
flow:
  - row: container_row
    title: IoT & Embedded Applications
    styles: purple-gradient-container
    sections:
      - component: three_column
        styles:
          card: max-w-[35ch] text-center flex flex-col items-center text-2xl
          container: justify-center gap-24
        background_image: linaro-website/graphics/bg-logo-5
        cards:
          - text: From hardware support to software optimization and testing, we offer end-to-end solutions for IoT and Embedded Systems projects. We provide comprehensive support and services throughout the entire product lifecycle, from concept to deployment, ensuring that your project is delivered on time.
            style: text-2xl
          - text: Scalability and Flexibility
            style: text-4xl font-bold w-[11ch] leading-tight
          - text: Linaro's solutions are designed to be highly scalable and flexible, allowing organizations to easily adapt and scale their IoT and Embedded Systems deployments as their needs evolve. Whether you're deploying a single device or managing a large-scale IoT network, our solutions can scale to meet your requirements.
            style: text-2xl

  - row: container_row
    sections:
      - component: text
        text_content: Linaro's solutions are built with security in mind
        style: text-center text-3xl max-w-[54ch] mx-auto font-bold mb-24
      - component: cards
        styles:
          card: max-w-[50ch] text-center flex flex-col items-center prose-p:text-2xl
          container: justify-center gap-24
          card_title: text-linaro-yellow text-5xl
        cards:
          - title: ONELab
            text: ONELab revolutionizes edge and IoT device interoperability testing.
            button:
              text: Find out more
              url: /solutions/onelab
          - title: CodeLinaro
            text: Revolutionize Your Embedded Software Development with CodeLinaro
            button:
              text: Request a demo
              url: https://www.codelinaro.org/
  - row: container_row
    title: Explore Related Resources
    styles: bg-transparent z-0
    sections:
      - component: more_info
        styles:
          container: justify-around border-2 border-[#6B6B6B] rounded-3xl py-10
          card: max-w-md  text-center
        more_info:
          - title: Check out the most read blogs
            icon: blogs
            url: /blog
          - title: Watch presentations and webinars
            icon: webinar
            url: https://resources.linaro.org/
---
