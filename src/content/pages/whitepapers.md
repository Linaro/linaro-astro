---
layout: ../../layouts/Flow.astro
slug: whitepapers
title: Whitepapers
description: |
  We like to share our knowledge and success stories.  Please check back to the page regularly to read our latest insights on various industry trends and technologies.
hero:
  title: >
    White Papers and Customer Success Stories
  background_image: linaro-website/graphics/bg-logo-2
  description: We like to share our knowledge and success stories.  Please check back to the page regularly to read our latest insights on various industry trends and technologies.
  styles:
    text_container: max-w-[40rem]
    background: bg-right-top
    description: text-md sm:text-lg
    main_container: h-[600px]

flow:
  - row: container_row
    title: White Papers
    styles:
      outer: purple-gradient-container-no-padding
    sections:
      - component: image_cards
        styles:
          container: gap-2 justify-center flex flex-wrap
          button: my-4 max-w-[129px]
          card: flex px-4 flex-col justify-between rounded-2xl text-white bg-black w-full max-w-[30ch] min-h-[450px]
          card_title: text-xl m-0 text-black font-normal
          image: w-full h-[10rem] max-w-full object-cover rounded-2xl
        cards:
          - text: Security Case Study for next-gen consumer electronics devices
            image:
              src: linaro-website/graphics/chip_jzn4vq.png
              alt: ""
            button:
              text: Read more
              url: https://static.linaro.org/assets/Linaro+Case+Study+-+Building+a+Secure+Platform+for+Next-Generation+Consumer+Electronics+Devices.pdf
          - text: Build Production-Ready, Secure Embedded and IoT Devices with CRA compliance in mind
            image:
              src: linaro-website/graphics/smart-car-security-unlock-via-smartphone-digital-remix_seaskj.png
              alt: ""
            button:
              text: Read more
              url: https://static.linaro.org/assets/WP+-+Buile+Modern+Secure+Connected+Devices_v2.pdf
          - text: HPC Performance Tuning Case Study
            image:
              src: linaro-website/graphics/shearwater-image_tx7apl.jpg
              alt: ""
            button:
              text: Read more
              url: https://static.linaro.org/assets/Linaro_Forge_Shearwater_Case_Study.pdf
          - text: Secure Video Streaming Case Study
            image:
              src: linaro-website/graphics/airplane-seat-back-with-blank-screen_yaqoa2.jpg
              alt: ""
            button:
              text: Read more
              url: https://static.linaro.org/assets/Linaro_Security_Expertise_Case_Study-secure_video_streaming_system_for_the_aviation_industry.pdf
          - text: Linaro Automotive Strategy
            image:
              src: linaro-website/graphics/Automotive_strategy1_rgrqe8
              alt: ""
            button:
              text: Read more
              url: https://static.linaro.org/assets/Linaro_Automotive_Strategy_Document_v4.3.pdf
          - text: Standardisation in Edge Device Firmware
            image:
              src: linaro-website/graphics/sdv_1_vacr4z
              alt: ""
            button:
              text: Read more
              url: https://static.linaro.org/assets/TrustedSubstrateWhitePaper_v2.pdf
          - text: Protecting Investment in Code Optimisation with Toolchain CI
            image:
              src: linaro-website/graphics/toolchain_1_zcsqgl
              alt: ""
            button:
              text: Read more
              url: https://static.linaro.org/assets/Protecting-Investment-in-Code-Optimisation-with-Toolchain-CI-Linaro-White-Paper.pdf
          - text: Software Defined Vehicles and the Need for Standardisation
            image:
              src: linaro-website/graphics/AV_white_paper_1_ngtke8
              alt: ""
            button:
              text: Read more
              url: https://static.linaro.org/assets/automotive_white_paper_0921.pdf
---
