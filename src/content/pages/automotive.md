---
layout: ../../layouts/Flow.astro
slug: solutions/automotive
title: Automotive
description: |
  ONELab revolutionizes edge and IoT device interoperability testing. We help Silicon Vendors and Device Makers to conduct continuous interoperability tests among different Operating Systems and Cloud Services.
hero:
  title: >
    Driving Innovation in the Future of Mobility with Software-Defined Vehicles
  background_image: linaro-website/graphics/automotive-2
  description: |
    The future of transportation lies in connected and autonomous vehicles. We actively work on technologies that enable seamless connectivity, such as V2X (Vehicle-to-Everything) communication, 5G integration, and edge computing.
  button:
    text: Contact Us
    url: /contact
  styles:
    text_container: max-w-2xl
    title: max-w-2xl mb-12
    description: max-w-xl text-xl
    background: bg-right-top xl:bg-right
    background_container: p-[5%] md:ml-[5%]
flow:
  - row: container_row
    title: Transforming Transportation
    styles:
      outer: purple-gradient-container
    sections:
      - component: cards
        styles:
          card: max-w-[60ch]
          container: justify-center gap-x-16
        cards:
          - text: |
              As vehicles evolve to meet the demands of today's tech-savvy consumers, automakers are seeking ways to enhance the driving experience with intuitive, interactive features. To meet these expectations and deliver new features profitably, automakers face the challenge of accelerating development while managing dependencies between hardware and software.
            styles: w-full lg:w-1/2
          - text: At Linaro, we are at the forefront of driving innovation in the automotive industry. Our Automotive and SOAFEE (Standardized Open Architecture for Embedded Edge) Lab is dedicated to advancing the development of cutting-edge technologies and solutions for the automotive sector. With our expertise in open-source software and collaborative engineering, we are shaping the future of automotive systems and enabling the next generation of connected and autonomous vehicles.
            styles: w-full lg:w-1/2
  - row: container_row
    title: SOAFEE Lab
    sections:
      - component: text
        text_content: The SOAFEE Lab is dedicated to establishing a standardized open architecture for embedded edge computing in the automotive domain.
        style: text-center text-3xl max-w-5xl mx-auto font-bold
      - component: cards
        styles:
          card: max-w-[60ch]
          container: justify-center gap-x-16
        cards:
          - text: |
              By defining common interfaces, APIs, and frameworks, we enable interoperability between hardware and software components, facilitating seamless integration and compatibility across different automotive platforms.

              This standardization promotes modularity, scalability, and reusability, allowing automotive manufacturers to build flexible and future-proof systems.
          - text: Our lab actively contributes to various open-source projects and communities, collaborating with industry leaders, automakers, and technology providers to develop robust and secure automotive software stacks. By leveraging open-source technologies, we enable faster time-to-market, reduced development costs, and increased transparency in the automotive ecosystem
      - component: buttons
        buttons:
          - text: Go to the SOAFEE Lab
            url: https://www.soafee.io/community/integration-lab
            style: linaro-gradient-button mt-12
  - row: container_row
    title: Explore Related Resources
    styles:
      outer: bg-transparent z-0
    sections:
      - component: more_info
        styles:
          container: justify-around border-2 border-[#6B6B6B] rounded-3xl py-10
          card: max-w-md  text-center
        more_info:
          - title: Check out the most read blogs
            icon: blogs
            url: /blog?tags=automotive
          - title: Watch presentations and webinars
            icon: webinar
            url: https://resources.linaro.org/en/themes/50057078-8f3b-4615-8f44-67c194e43b69
---
