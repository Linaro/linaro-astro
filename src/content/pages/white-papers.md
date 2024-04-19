---
layout: ../../layouts/Flow.astro
slug: white-papers
title: WhitePapers
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

flow:
  - row: container_row
    title: White Papers
    styles: purple-gradient-container
    sections:
      - component: image_cards
        styles:
          container: gap-2 justify-center flex flex-col md:flex-row
          button_style: my-4
          card: flex  px-4 flex-col justify-between items-center rounded-2xl text-white bg-black aspect-square px-1
          card_title: text-xl m-0 text-black font-normal
          image: w-full mt-[10px] mx-[10px]

        cards:
          - text: Linaro Automotive Strategy
            image:
              src: linaro-website/graphics/Automotive_strategy1_rgrqe8
              alt: Automotive_strategy logo
            button:
              text: Read more
              url: https://static.linaro.org/assets/Linaro_Automotive_Strategy_Document_v4.3.pdf
          - text: Standardisation in Edge Device Firmware
            image:
              src: linaro-website/graphics/sdv_1_vacr4z
              alt: Firmware logo
            button:
              text: Read more
              url: https://static.linaro.org/assets/Protecting-Investment-in-Code-Optimisation-with-Toolchain-CI-Linaro-White-Paper.pdf
          - text: Protecting Investment in Code Optimisation with Toolchain CI
            image:
              src: linaro-website/graphics/toolchain_1_zcsqgl
              alt: Optimisation logo
            button:
              text: Read more
              url: https://static.linaro.org/assets/automotive_white_paper_0921.pdf
          - text: Software Defined Vehicles and the Need for Standardisation
            image:
              src: linaro-website/graphics/AV_white_paper_1_ngtke8
              alt: Software logo
            button:
              text: Read more
              url: https://static.linaro.org/assets/TrustedSubstrateWhitePaper_v2.pdf
---
