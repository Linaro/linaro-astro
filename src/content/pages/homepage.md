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
          url: /services/testingandautomation
        image:
          src: https://res.cloudinary.com/dl7c2wmhi/image/upload/v1772537707/linaro-website/graphics/testingandautomation-bg.png
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
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: Linux Kernel
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
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: Unified Firmware Lifecycle Platform
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: IoT & Embedded
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: CRA & Software Supply Chain Management
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: Qualcomm Platform Services
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: NXP Platform Services
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: Android Platform Services
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: Windows Platform Services
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
          - title: HPC
            image:
              src: linaro-website/graphics/circle-gradient-border
              alt: ""
  - row: container_row
    title: Talk to our Experts
    styles:
      outer: bg-transparent z-0
      inner: "pt-4 pb-8"
    sections:
      - component: talk_to_experts
        subtitle: Book a time to talk with us
        # Add calendar embed URL to show the booking widget (e.g. Calendly or Cal.com):
        # embed_url: https://calendly.com/your-page
        button:
          text: Book a time to talk with us
          url: /contact

  - row: container_row
    title: Don't miss any of our *latest updates*
    styles:
      outer: bg-center-bottom bg-no-repeat bg-[center_top_0%] bg-[length:200%] md:bg-[length:150%] lg:bg-[length:100%] xl:bg-[length:90%] pb-[8rem] mb-[-8rem]
    sections:
      - component: buttons
        buttons:
          - button_text: Subscribe to our newsletter
            type: insight
            formName: newsletter
---
