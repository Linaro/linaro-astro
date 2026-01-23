---
layout: ../../layouts/Flow.astro
slug: services/upstreaming-linux-kernel
title: Upstreaming Linux On Arm
description: |
  Product software quality issues feed into longer software update cycles, higher software support costs and now an increasing regulatory burden. An increased support load can further impact development resourcing leading to a spiral of technical debt to be maintained. Yet it can be hard to explain to business decision makers how the organisation can escape this spiral of support cost and delay in fixes and updates especially to driver and BSP code.
hero:
  title: >
    Upstreaming Linux On Arm
  description: |
    Product software quality issues feed into longer software update cycles, higher software support costs and now an increasing regulatory burden. An increased support load can further impact development resourcing leading to a spiral of technical debt to be maintained. 

    Yet it can be hard to explain to business decision makers how the organisation can escape this spiral of support cost and delay in fixes and updates especially to driver and BSP code.
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
    animation: none
    styles:
      inner: py-0
      outer: purple-gradient-container
    sections:
      - component: two_column
        container_styles: flex align-center w-full mb-24 gap-24 mx-auto item-center justify-center
        animation: none
        columns:
          - type: image
            image:
              src: linaro-website/graphics/freepik__software-upstreaming-abstract-dramatic-landscape__70812_1_u2y77j.png
              alt: |
                abstract-image-of-leveraging-software
              inferSize: true
            styles: not-prose lg:w-1/2 h-auto object-contain
          - type: text
            text_content: |
              The upstream Linux kernel enforces a quality standard for code which the community accepts and maintains. Meeting this standard is an objective quality measure that ensures low technical debt and, if the code is accepted into the upstream kernel, it enables a shared approach with the community to the burden of support. Close alignment with the upstream kernel pays off for faster update cycles, less time rebasing and testing bug and security fixes, and a kernel migration path for customers providing multiple options for long-term support. 

              Your customers and management can see the benefits of the improvement of code quality which comes from close alignment with the upstream kernel.

            styles: lg:w-1/2 text-lg
  - row: container_row
    styles:
      outer: bg-linaro-purple mb-12
    sections:
      - component: two_column
        container_styles: flex align-center w-full gap-24 mx-auto item-center justify-center
        animation: none
        columns:
          - type: text
            text_content: |
              Linaro specialises in upstreaming to the Linux kernel, having helped many customers over the years upstream their existing software contributions. We are consistently featured as a top ten contributor to the Linux kernel, with many of our engineers acting as maintainers of subsystems or architectures in the Linux kernel. Because of the active role we play in the open source community, we have the know-how and connections to accelerate your upstream development. 

              We strongly believe that the open source approach leads to the best technical implementation and are therefore committed to not only upstreaming code but also maintaining it.

              In addition to upstreaming to the Linux kernel, Linaro also specialises in upstreaming to U-Boot, OP-TEE and Yocto.

            styles: lg:w-1/2 text-lg
          - type: image
            image:
              src: linaro-website/graphics/Firefly_Gemini_Flash_rotate_the_image_into_perspective_and_add_depth_of_field_853366_1_vbfnib.png
              alt: |
                abstract-image-of-keeping-data-secure
              inferSize: true
            styles: not-prose lg:w-1/2 rounded-3xl h-auto object-contain
  - row: container_row
    sections:
      - component: two_column
        container_styles: flex align-center w-full gap-24 mx-auto item-center justify-center items-center border-grey border-[0.25px] rounded-xl px-2 sm:px-8
        animation: none
        columns:
          - type: text
            title: <span class="linaro-gradient-text">Testimonial</span>
            text_content: |
              “At Square, we face the challenge of maintaining our Terminal and Register hardware products, which are based on short-support-cycle mobile technology, in an industry that requires long lifespans and up-to-date security patching. After the Qualcomm SD615 processor (2014) powering our devices went end-of-life in 2018, Square chose to engage with the Arm Linux specialists at Linaro for upstream-based extended life. Having seen their previous work on the DragonBoard 410c, we were confident that upstreaming was the right path and Linaro was the right partner to deliver a new Linux kernel paired with an up-to-date Android release.

              The team dispatched from Linaro Developer Services was highly experienced in how to accomplish this without compromising on productization-level stability, battery life, or performance. As a result of this collaboration, Square is able to continue providing regular OS and kernel upgrades to our Terminal and Register customers for 5-10 more years. In particular, Linaro's expertise and assistance in bringing SoCs and boards into mainline ensures upstream support doesn't decay over time & provides a platform for the community to continue contributing to and benefiting from the work, reducing long term software burden. ”

              <span class="text-linaro-yellow">Benjamin J. Li, Hardware, Square</span>

            styles: lg:w-1/2 text-lg
          - type: image
            image:
              src: linaro-website/graphics/Group_193_p6de3r.png
              alt: |
                Square logo
              inferSize: true
            styles: not-prose lg:h-1/3 rounded-3xl h-auto object-contain
  - row: container_row
    sections:
      - component: buttons
        buttons:
          - text: Contact Us
            url: /contact
            style: linaro-gradient-button
---
