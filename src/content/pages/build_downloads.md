---
layout: ../../layouts/Flow.astro
slug: /downloads
title: Downloads | Linaro
description: |
  ONELab revolutionizes edge and IoT device interoperability testing. We help Silicon Vendors and Device Makers to conduct continuous interoperability tests among different Operating Systems and Cloud Services.
hero:
  title: >
    Builds & Downloads
  background_image: linaro-website/graphics/automotive
  description: |
    Since 2010, Linaro has played a key role in upstreaming Arm software, with many of its engineers actively maintaining open source projects. This page provides links to downloads currently produced by Linaro’s engineering teams. 

    If you have any technical queries, go to Linaro’s support page to log a ticket with the Linaro Developer Technical Support team. For any other queries click here.
  button:
    text: Learn more
    url: /
  styles:
    text_container: max-w-2xl
    title: max-w-2xl mb-12
    description: max-w-xl text-xl
    background: bg-right-top
    background_container: p-[5%] ml-[5%] xl:ml-0
flow:
  - row: container_row
    title: Placeholder Text
    styles: purple-gradient-container
    sections:
      - component: two_column
        container_styles: items-start justify-start gap-8 lg:gap-24 w-full mx-auto text-2xl
        columns:
          - type: text
            text_content: |
              As vehicles evolve to meet the demands of today's tech-savvy consumers, automakers are seeking ways to enhance the driving experience with intuitive, interactive features. To meet these expectations and deliver new features profitably, automakers face the challenge of accelerating development while managing dependencies between hardware and software.
            styles: w-full lg:w-1/2
          - type: text
            text_content: At Linaro, we are at the forefront of driving innovation in the automotive industry. Our Automotive and SOAFEE (Standardized Open Architecture for Embedded Edge) Lab is dedicated to advancing the development of cutting-edge technologies and solutions for the automotive sector. With our expertise in open-source software and collaborative engineering, we are shaping the future of automotive systems and enabling the next generation of connected and autonomous vehicles.
            styles: w-full lg:w-1/2
  - row: container_row
    title: SOAFEE Lab
    sections:
      - component: two_column
        container_styles: items-center lg:items-start  justify-start gap-8 lg:gap-24 w-full mx-auto text-2xl
        columns:
          - type: text
            text_content: |
              The SOAFEE Lab is dedicated to establishing a standardized open architecture for embedded edge computing in the automotive domain.

              By defining common interfaces, APIs, and frameworks, we enable interoperability between hardware and software components, facilitating seamless integration and compatibility across different automotive platforms.
              [make a graphic with this content] This standardization promotes modularity, scalability, and reusability, allowing automotive manufacturers to build flexible and future-proof systems.
          - type: text
            text_content: Our lab actively contributes to various open-source projects and communities, collaborating with industry leaders, automakers, and technology providers to develop robust and secure automotive software stacks. By leveraging open-source technologies, we enable faster time-to-market, reduced development costs, and increased transparency in the automotive ecosystem
      - component: buttons
        buttons:
          - text: Go to the SOAFEE Lab
            url: /
            style: linaro-gradient-button mt-12
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
            icon: grade
            url: /blog
          - title: Watch presentations and webinars
            icon: grade
            url: https://resources.linaro.org/
---
