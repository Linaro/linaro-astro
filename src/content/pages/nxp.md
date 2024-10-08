---
layout: ../../layouts/Flow.astro
slug: services/nxp-platform-services
title: NXP Platform Services
description: |
  Empowering Development on NXP Architectures
hero:
  title: >
    Empowering Development on NXP Architectures
  background_image: linaro-website/graphics/nxp_zbhudz.png
  description: |
    Whether your project requires secure IoT applications, multimedia processing, or embedded system innovation, Linaro can help you unlock the full potential of NXP architectures.
  styles:
    text_container: max-w-2xl
    title: max-w-2xl mb-12
    description: max-w-xl text-xl
    background: bg-right-top xl:bg-right
    background_container: p-[5%] md:ml-[5%]
flow:
  - row: container_row
    title: Why Choose Linaro for NXP Development?
    styles:
      outer: purple-gradient-container
    sections:
      - component: text
        text_content: "Linaro combines industry-leading expertise in Arm ecosystem OSS stacks development and integration with focus on security, performance, and reliability, scalability helping your business to:"
      - component: cards
        styles:
          card: max-w-[40ch]
          container: justify-center gap-x-16
          card_title: bg-linaro-gradient text-transparent bg-clip-text
        cards:
          - title: Develop Standard Compliant Secure Solutions End-2-End
            text: |
              By utilizing Arm TrustZone Extension and NXP’s hardware security features together with OSS secure firmware stacks, we build platforms that prioritize security from the ground up.
          - title: Optimize Software Performance
            text: |
              We fine-tune BSPs and drivers, low-level firmware stacks for NXP SoCs, ensuring the best performances for the different use cases, from edge computing,high-demand multimedia entertainment systems to industrial IOTs, automotive.
          - title: Ensure Compliance and Certification
            text: |
              We assist in navigating complex certification processes and GAP analysis (e.g., FAA/EASA or UNECE R155/R156 depending on your industry) and achieving DRM compliance for multimedia delivery systems (e.g., Google WideVine L1).
          - title: We build with reliability and scalability
            text: |
              Linaro ONELab facility provides automated test framework focusing on CI/CD and Q/A control over your entire SDLC for regression test automation and also validates your system’s compatibility.
          - title: Accelerate Time-to-Market
            text: |
              Our open-source development approach and rich experience in NXP platforms ensure faster project delivery, reducing costs and deployment risks.
      - component: buttons
        buttons:
          - text: Read the Aviation use case
            url: /assets/downloads/Linaro Security Expertise Case Study- secure video streaming system for the aviation industry.pdf
            style: linaro-gradient-button
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
