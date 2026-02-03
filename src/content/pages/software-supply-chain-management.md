---
slug: services/software-supply-chain-management
title: Software Supply Chain Management
description: |
  The software supply chain found in modern embedded devices is a complex web of software components. With each device containing hundreds of software packages, tracking vulnerabilities across a product’s entire lifecycle is a huge undertaking.  When you factor in the pressure of frequent software updates and strict regulatory requirements, it is clear that this is not a "one-off" task—it is a continuous commitment.
hero:
  title: >
    Software Supply Chain Management
  description: |
    The software supply chain found in modern embedded devices is a complex web of software components. With each device containing hundreds of software packages, tracking vulnerabilities across a product’s entire lifecycle is a huge undertaking.  

    When you factor in the pressure of frequent software updates and strict regulatory requirements, it is clear that this is not a "one-off" task—it is a continuous commitment.
  bottom_fade: true
  background_image: linaro-website/graphics/freepik__computer-code-dramatic-layered-brackets-and-symbol__58091_1_wajxcr.png
  styles:
    text_container: max-w-2xl
    title: max-w-2xl mb-12
    description: max-w-xl text-xl
    background: bg-right-top xl:bg-right
    background_container: md:ml-[5%]
    main_container: h-[calc(75vh)]
flow:
  - row: container_row
    bottom_fade: true
    styles:
      outer: bg-gradient-to-b from-white/0 to-white/15 bg-[length:100%_100px] bg-bottom bg-no-repeat
    animation: none
    sections:
      - component: text
        text_content: Implementing an Effective Compliance Program with Linaro
        style: text-xl md:text-4xl font-bold mb-12 md:mx-24 mx-4
      - component: text
        text_content: Managing vulnerabilities and maintaining regulatory standards requires total visibility into your software supply chain. Linaro can help you achieve this through a phased approach, taking you from policy through to execution and continuous compliance.
        style: text-sm md:text-xl mb-12 md:mx-24 mx-4
      - component:
          cards
          # divider: true
        styles:
          container: mx-auto flex flex-col md:flex-row gap-4 md:gap-0 justify-evenly px-4 items-center
          card: bg-[linear-gradient(90deg,#FFCE0033_0%,#FFCE0000_100%)] w-80 h-48 md:h-64 flex flex-col p-4 text-xs m-0
          content: "!text-sm md:!text-lg"
          card_title: "text-lg md:text-xl text-linaro-yellow !my-0"
        cards:
          - title: Policy & Training Definition
            text: Define a policy that establishes roles, responsibilities, and which license types are acceptable.
          - title: Toolchain Infrastructure Setup & Initial Deployment
            text: Set up the tooling infrastructure which integrates Linaro’s compliance dashboard into your environment, allowing you to generate SBOMs.
          - title: Audit & Legal Support
            text: Review your supply chain data in detail, inspecting for license accuracy and critical vulnerabilities. Provide a report with recommended next steps.
          - title: Continuous Deployment/ Compliance
            text: Make compliance part of your standard release process, ensuring each build or release automatically passes through the supply chain analysis workflow
  - row: container_row
    sections:
      - component: contact
        form_id: "7"
        formName: "solutions"
        description: |
          Need to prepare for CRA (Cyber Resilience Act)?<br><p class="text-linaro-yellow text-xl md:text-5xl self-center">Talk to our Experts!</p>
        styles:
          card: w-4/5 flex flex-col mx-auto justify-center w-full not-prose text-center
          form: rounded-3xl p-8 w-4/5 bg-[#222025] border-gray-500 border-[1px] text-sm max-w-full
          description: font-normal text-xl md:text-5xl text-center self-center
---
