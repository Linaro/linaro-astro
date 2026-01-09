---
layout: ../../layouts/Flow.astro
slug: industries/industrial
title: Industrial
description: |
  Bridge innovation and life-cycle management for your embedded solutions with Linaro
hero:
  title: >
    Bridge innovation and life-cycle management for your embedded solutions with Linaro
  background_image: linaro-website/graphics/freepik__abstract-dynamic-swooping-image-showing-innovation__49847_2_rdrjpy.png
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
    sections:
      - component: two_column
        container_styles: flex align-center w-full mb-24 gap-24 mx-auto item-center justify-center
        animation: none
        bottom_fade: true
        columns:
          - type: image
            image:
              src: linaro-website/graphics/freepik__abstract-dynamic-swooping-image-no-text-and-no-cro__49846_1_b9b3ew.png
              alt: |
                abstract-dynamic-swooping-image
              inferSize: true
            styles: not-prose lg:w-1/2 h-auto object-contain
          - type: text
            title: Guaranteeing that products are secure and meet regulatory requirements is an ongoing battle
            text_content: |
              To accomplish this, companies need the ability to efficiently update and maintain their software in response to published security vulnerabilities - an undertaking which requires expertise and ongoing investment. How can Linaro help you ensure consistent high quality products which are secure and meet new regulatory compliance requirements through sustainable open source software?
            styles: lg:w-1/2 text-lg
  - row: container_row
    title: Develop high quality, compliant and secure Arm-based industrial products with Linaro
    no_border: true
    styles:
      outer: purple-gradient-container
    sections:
      - component: expandingcards
        cards:
          - id: 1
            title: |
              Future-proofing your Linux-based product
            description: |
              What happens when the Linux kernel you built your product on no longer has access to the latest bug fixes and does not meet regulatory requirements? With regulations such as the EU CRA (Cyber Resilience Act) kicking in next year, it is essential that your product is leveraging open source software which aligns with these standards.
            longDescription: |
              What happens when the Linux kernel you built your product on no longer has access to the latest bug fixes and does not meet regulatory requirements? With regulations such as the EU CRA (Cyber Resilience Act) kicking in next year, it is essential that your product is leveraging open source software which aligns with these standards. 

              Linaro specializes in developing code to meet the demanding quality standards required for upstreaming to the Linux kernel and has supported many companies in contributing their software upstream. By ensuring that your software is updatable to the latest kernel—and by minimizing the amount of non-upstream code you use your products will benefit from the most up-to-date open-source software and a clear strategy to achieve compliance with new cybersecurity regulations. 

              Once your product aligns closely with the upstream mainline kernel,the cost, complexity and cycle time to update, including new features and security patches, is very significantly reduced. This enables you to focus on innovation instead of managing costly repeated porting of your out-of-tree code to achieve compatibility with every new kernel release.
            image: |
              linaro-website/graphics/freepik__abstract-dynamic-image-showing-leveraging-software__49848_1_pj1ujb.png
          - id: 2
            title: |
              Lifetime support for secure and innovative industrial products
            description: |
              Industrial end-users still expect an installed life of up to 15–20 years with little or no change to the installed software.The new regulatory requirements require this software to receive updates during its lifetime, yet the open-source software that powers it is normally supported for only 2–6 years. How do you bridge this gap if you don’t have the in-house expertise or costly infrastructure to maintain your product for the remaining decade or more?
            longDescription: |
              Industrial end-users still expect an installed life of up to 15–20 years with little or no change to the installed software.The new regulatory requirements require this software to receive updates during its lifetime, yet the open-source software that powers it is normally supported for only 2–6 years. How do you bridge this gap if you don’t have the in-house expertise or costly infrastructure to maintain your product for the remaining decade or more?

              Consult with Linaro to better understand the trade-offs for long-term support, vs the possibility of migrating kernel versions in the field for industrial devices, and how to provide the security and stability you need to keep innovating without the risk of disrupting your product. We have spent many years delivering, maintaining, and testing Long Term Support Linux kernels for Arm. We automatically deploy and test operating systems and software, catching regressions early so fixes can be submitted promptly. With the right approach to managing your kernel codebase and minimizing the out-of-tree support load, your customers will appreciate the benefits of a sustainable support model.

              Speak with Linaro to learn how our world-class open-source engineers can monitor and integrate the latest fixes and CVEs for projects such as the Linux kernel, OP-TEE, Trusted Firmware-A, and U-Boot.
            image: |
              linaro-website/graphics/freepik__abstract-dynamic-image-showing-leveraging-software__49849_1_i37mpp.png
          - id: 3
            title: |
              Achieve regulatory compliance with Linaro’s Experts 
            description: |
              With regulations such as the CRA making it compulsory to conduct cybersecurity risk assessments, continuously run security audits, and more, companies are under pressure to ensure they have the infrastructure, know-how, and processes in place to meet these requirements.
            longDescription: |
              With regulations such as the CRA making it compulsory to conduct cybersecurity risk assessments, continuously run security audits, and more, companies are under pressure to ensure they have the infrastructure, know-how, and processes in place to meet these requirements.

              Linaro specialises in continuous testing, having created LAVA and LKFT (Linaro Kernel Functional Test), which runs millions of tests per year to spot security vulnerabilities before they end up in finished products. We have now created tooling to help customers prepare for CRA. The tooling consists of a back-end toolchain that integrates directly into the customer's build system, as well as a front-end dashboard to present data. Combined, the tooling provides the capability to:

                - Generate a complete SBOM (Software Bill of Materials)
                
                - Scan each software package for CVE’s to determine whether vulnerabilities are patched, unpatched or ignored.
                
                - Analyse the provenance of each software package to highlight potential cybersecurity risks
                
                - Continuously monitor and achieve compliance by integrating Linaro’s toolchain into your CI/CD pipeline
            image: |
              linaro-website/graphics/freepik__abstract-dynamic-image-showing-regulatory-complian__49850_1_eog0gn.png
  - row: container_row
    styles:
      outer: bg-linaro-purple mb-12
    sections:
      - component: two_column
        container_styles: flex align-center w-full gap-24 mx-auto item-center justify-center
        animation: none
        columns:
          - type: text
            title: Leverage our Arm Software Expertise to enhance your Embedded Solution
            text_content: |
              Linaro’s experience building and maintaining automated open source testing frameworks, make us the perfect partner for any company looking to truly harness the potential of Industry 4.0 while maintaining secure and compliant products. 

              Working with Linaro gives you access to some of the leading Arm Software Experts in the world whose experience working with the Linux kernel, OP-TEE and U-Boot is helping shape the future of industrial innovation on Arm.
            styles: lg:w-1/2 text-lg
          - type: image
            image:
              src: linaro-website/graphics/freepik__abstract-dynamic-swooping-image-showing-software-e__49852_1_mswbvm.png
              alt: |
                abstract-dynamic-swooping-image-showing-software
              inferSize: true
            styles: not-prose lg:w-1/2 rounded-3xl h-auto object-contain
  - row: container_row
    sections:
      - component: contact
        form_id: "7"
        formName: "solutions"
        content: |
          Developing Embedded Solutions on Arm?<br>

          <span class="text-linaro-yellow">Talk to Linaro!</span>
        description: |
          Linaro’s well-proven track record in automated testing, long-term support and upstreaming make us the perfect choice for anyone looking to build secure, compliant and high quality embedded products on Arm.

          <p class="text-linaro-yellow text-2xl text-left">Partner with our Services team to take your embedded solution to the next level!</p>
        styles:
          card: w-4/5 prose-em:linaro-gradient-text prose-em:not-italic prose-headings:text-5xl prose-headings:my-3 prose-ul:text-xl prose-headings:leading-tight prose-p:text-3xl flex flex-col mx-auto justify-center w-full not-prose text-center
          form: rounded-3xl p-8 w-4/5 bg-[#222025] border-gray-500 border-[1px] text-sm max-w-full
          description: font-normal text-2xl text-left
          content: text-5xl leading-loose
---
