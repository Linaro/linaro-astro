---
slug: "/"
title: Linaro | We help you build, test, deploy & maintain great products on Arm
description: |
  We guide you through every step of your journey, ensuring fast time to market, exceptional quality, security and cost-effective long-term maintenance.
hero:
  title: >
    We help you<br /><span class="linaro-gradient-text">build, test, deploy & maintain</span><br />great products on Arm
  background_image: linaro-website/graphics/bg-logo-6
  styles:
    text_container: max-w-4xl
    background: bg-right-top 2xl:bg-[length:1500px] opacity-70
    background_container: mr-[20%] xl:mr-[10%] mt-[-5%]
  carousel:
    slides:
      - title: We provide Linux and Open Source Engineering Training for Modern Systems
        button:
          text: I want to know more about Linaro Training
          url: https://training.linaro.com/w/US
        image:
          src: https://res.cloudinary.com/dl7c2wmhi/image/upload/v1772534784/linaro-website/graphics/young-elementary-school-girl-watching-online-education-class-coronavirus-covid-19-lockdown-education-concept_1_f7in5z.png
          alt: A Hands On Introduction to Rust - Linaro Training
      - title: "Testing & Automation Services - Ready to Scale your Validation Strategy?"
        button:
          text: Discover More
          url: /contact
        image:
          src: linaro-website/graphics/freepik__remove-the-robotic-arm__92237_1_1_tkf72c.png
          alt: Linaro Arm ecosystem
      - title: The Secure, CRA-compliant BIOS for Arm Embedded Edge Platforms
        button:
          text: Discover ONEBoot
          url: /solutions/oneboot
        image:
          src: linaro-website/graphics/freepik__a-dynamic-and-abstract-image-showing-an-embedded-e__65960_1_a4xr3n.png
          alt: Linaro development
      - title: Software Supply Chain Management
        button:
          text: Find out more abour CRA Compliance
          url: /services/software-supply-chain-management
        image:
          src: linaro-website/graphics/freepik__dynamic-image-of-software-supply-chain-managementn__15216_1_lsycrd.png
          alt: Linaro collaboration
      - title: Linaro Addresses the Demands of the Next Era of AI and Compute with New Model and Brings Open Collaboration to All
        button:
          text: Read the Press Release
          url: /news/linaro-addresses-the-demands-of-the-next-era-of-ai-and-compute-with-new-model-and-brings-open-collaboration-to-all
        image:
          src: https://res.cloudinary.com/dl7c2wmhi/image/upload/v1772787588/linaro-website/graphics/CC_PR_image_banner_copy_1_z9kp6c.png
          alt: Confidential Computing
        light_overlay: true
        logo:
          src: https://res.cloudinary.com/dl7c2wmhi/image/upload/v1772787588/linaro-website/graphics/Artboard_1_1_biawho.png
          alt: Confidential Computing logo
  tagline: |
    We guide you through <span class="text-linaro-yellow">every step of your journey</span>, ensuring fast time to market, exceptional quality, security & cost-effective long-term maintenance.
flow:
  - row: container_row
    title: '<span class="linaro-gradient-text">Start your journey now!</span>'
    styles:
      outer: bg-background pt-12 xl:pt-20
      inner: "py-0"
    sections:
      - component: journey_process
        subtitle: Linaro is your <span class="text-linaro-yellow">production-grade</span> software and <span class="text-linaro-yellow">CRA lifecycle</span> partner
        image:
          src: linaro-website/graphics/content/Linaro_Lifecycle_dlll8x.svg
          alt: Consultancy lifecycle - Start your journey now
  - row: container_row
    title: Trusted by Leading Companies
    sections:
      - component: file_carousel
        filename: trusted_by
      - component: text
        text_content: We foster an environment of collaboration, standardization, and optimization to accelerate the deployment of Arm-based products and technologies.
        style: text-center max-w-4xl mx-auto text-xl
      - component: buttons
        buttons:
          - text: Contact Us
            url: /contact
            style: linaro-gradient-button

  - row: container_row
    title: We are Experts in
    styles:
      outer: bg-transparent z-0
    sections:
      - component: image_cards
        styles:
          container: max-w-full mx-auto justify-around gap-2 xl:gap-8 flex flex-wrap [&_img]:mt-[2em] xl:[&_img]:mt-[3em]
          card: relative xl:h-[15rem] xl:w-[15rem] w-[10rem] h-[10rem]
          imageWrapper: absolute inset-0 w-full h-full
          card_title: flex flex-col items-center justify-center h-full text-center max-w-full px-8 text-base xl:text-2xl py-0 m-0
          image: absolute w-full h-full aspect-square top-0 left-0 right-0 bottom-0 mx-auto my-auto
          # image: absolute inset-0 w-full h-full object-contain
        cards:
          - title: Test Automation
            url: /services/testingandautomation
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: Linux Kernel
            url: /services/upstreaming-linux-kernel
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: Toolchain
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: Virtualization
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: Confidential Computing
            url: /solutions/confidential-computing
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: Unified Firmware Lifecycle Platform
            url: /solutions/oneboot
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: IoT & Embedded
            url: /solutions/onelab
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: CRA & Software Supply Chain Management
            url: /services/software-supply-chain-management
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: Qualcomm Platform Services
            url: /services/qualcomm-platform
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: "NXP<br />Platform<br />Services"
            url: /services/nxp-platform-services
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: Android Platform Services
            url: /industries/client-devices
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: Windows Platform Services
            url: /industries/client-devices
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: HPC
            url: https://www.linaroforge.com
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
  - row: container_row
    styles:
      outer: section-gradient-background z-0 pt-12 pb-16
    blocks:
      - title: '<span class="linaro-gradient-text">Contact Linaro</span>'
        styles:
          inner: "pt-12 pb-8"
        sections:
          - component: contact
            form_id: "7"
            formName: "sales_contact"
            hideTitle: true
            styles: {}
      - title: Don't miss any of our *latest updates*
        styles:
          outer: "mt-24 lg:mt-32"
          inner: "pt-16 pb-8"
        sections:
          - component: buttons
            buttons:
              - button_text: Subscribe to our newsletter
                type: insight
                formName: newsletter
---
