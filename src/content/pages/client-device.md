---
layout: ../../layouts/Flow.astro
slug: industries/client-devices
title: Client Devices
description: |
  The future of transportation lies in connected and autonomous vehicles. We actively work on technologies that enable seamless connectivity, such as V2X (Vehicle-to-Everything) communication, 5G integration, and edge computing.
hero:
  title: >
    Deliver the ultimate user experience on your client device with Linaro
  description: Consumers expect their devices to seamlessly fit into their lives and be fast, intuitive, reliable and secure. Companies developing these devices face constant pressure to not only meet these expectations, but also comply with regulatory requirements designed to protect consumers.
  background_image: linaro-website/graphics/freepik__dramatic-and-abstract-image-showing-an-ultimate-us__88633_1_jh5ezp.png

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
              src: linaro-website/graphics/freepik__dramatic-and-abstract-image-showing-an-ultimate-us__88632_1_x99jtw.png
              alt: |
                abstract-image-showing-an-ultimate
              inferSize: true
            styles: not-prose lg:w-1/2 h-auto object-contain
          - type: text
            title: Deliver the ultimate user experience on your client device with Linaro
            text_content: |
              With more than fifteen years of experience optimizing performance on Arm architecture, Linaro helps companies bring up hardware and get applications working while ensuring devices continue to operate reliably. In addition to performance optimisation, we help customers deliver secure, high-quality products by providing the expertise and infrastructure needed to support regulatory compliance.  
            styles: lg:w-1/2 text-lg
  - row: container_row
    title: Develop high quality, compliant and secure Arm-based consumer devices with Linaro
    no_border: true
    styles:
      outer: purple-gradient-container
    sections:
      - component: expandingcards
        cards:
          - id: 1
            title: |
              Optimizing performance for an exceptional user experience
            description: |
              Porting your software to run efficiently on Arm-based systems is more than just recompiling your code.
            longDescription: |
              Porting your software to run efficiently on Arm-based systems is more than just recompiling your code. Code will need optimising to be performant - both the high-level software and underlying systems libraries and tools. 

              Linaro’s track record in maintaining power management subsystems on the Linux kernel and maintaining toolchains such as GNU and LLVM is well known and as such, we are perfectly placed to work with you on optimizing your code to ensure your device efficiently uses storage, enjoys long battery life and more. We specialize in optimizing code for the Linux kernel, Arm Architecture, Compilers (gcc, LLVM, flang) and System c libraries (glibc).
            image: |
              linaro-website/graphics/freepik__abstract-dynamic-image-showing-embedded-solution-t__83188_1_jlwrzi.png
          - id: 2
            title: |
              Protect your consumers’ devices with Long-Term Support
            description: |
              Legally, manufacturers are required to provide OS and security updates for phones, tablets and laptops for anything between five to ten years.
            longDescription: |
              Legally, manufacturers are required to provide OS and security updates for phones, tablets and laptops for anything between five to ten years. Yet the Linux Kernel on which many products are built is usually only supported for two to six years. This means that device makers must find a way to ensure their products remain supported long after upstream software maintenance ends. 

              In this scenario, there are two options: migrate to a newer kernel or take on long-term software maintenance in-house. Both approaches require significant expertise and experience. This is where Linaro can help. We provide long-term support for your device, ensuring it stays up to date with the latest security fixes and feature enhancements. We can maintain your software over its full lifecycle so that you have peace of mind and can focus on differentiating your product. 
            image: |
              linaro-website/graphics/freepik__dramatic-and-abstract-image-showing-compliance-on-__88629_1_kej04p.png
          - id: 3
            title: |
              Guarantee your devices meet regulatory requirements
            description: |
              Regulations such as the Cyber Resilience Act (CRA) is putting pressure on device makers to establish robust processes and infrastructure.
            longDescription: |
              Regulations such as the Cyber Resilience Act (CRA) is putting pressure on device makers to establish robust processes and infrastructure for cybersecurity risk assessments, continuous security auditing and more.Without the right tools in place, maintaining regulatory compliance across the lifetime of a device can quickly become a costly and labour-intensive undertaking. 

              Linaro created LAVA (Linaro Automated Validation Architecture) and LKFT (Linux Kernel Functional Test) - two de-facto open source frameworks widely used for continuous automated testing. Through this work, we have become highly specialised in running large-scale continuous testing and demonstrating results to the wider community. We have built on this experience to develop a dashboard which allows you to continuously demonstrate regulatory compliance. Through our dashboard you will be able to:

                - Generate a complete SBOM (Software Bill of Materials)

                - Scan each software package for CVE’s to determine whether vulnerabilities are patched, unpatched or ignored. 

                - Analyse the provenance of each software package to highlight potential cybersecurity risks

                - Continously monitor and achieve compliance by integrating Linaro’s toolchain into your CI/CD pipeline
            image: |
              linaro-website/graphics/freepik__dramatic-and-abstract-image-showing-secure-user-ex__88630_1_eg3oja.png
          - id: 4
            title: |
              Enabling Open Source Packages to run natively on Windows and Android on Arm
            description: |
              Android on Arm and Windows on Arm would not be where they are today had Linaro not driven the work needed to advance these ecosystems.
            longDescription: |
              Android on Arm and Windows on Arm would not be where they are today had Linaro not driven the work needed to advance these ecosystems. In both cases, Linaro worked with companies such as Google, HiSilicon, Qualcomm, Samsung, Microsoft, Arm and CIX to enable open source packages to run natively on Arm-based devices running Windows and/or Android. This work helped improve performance, reduce power consumption and ultimately deliver an exceptional user experience. 

              While Linaro does not drive these collaborations today, we still have the expertise to work with companies looking to enable open source packages to run natively on their device.
            image: |
              linaro-website/graphics/freepik__dramatic-and-abstract-image-showing-optimised-user__88631_1_hngdqs.png
  - row: container_row
    styles:
      outer: bg-linaro-purple mb-12
    sections:
      - component: two_column
        container_styles: flex align-center w-full gap-24 mx-auto item-center justify-center
        animation: none
        columns:
          - type: text
            title: Leverage our Arm Software Expertise to enhance your Consumer Device
            text_content: |
              Linaro’s experience in power management, toolchain and continuous testing make us the perfect partner for any company looking to deliver an exceptional user experience on Arm devices while ensuring regulatory requirements are met. 

              Working with Linaro gives you access to some of the leading Arm Software Experts in the world whose experience working with the Linux kernel, Android and Windows is helping shape the future of Arm-based client devices.

            styles: lg:w-1/2 text-lg
          - type: image
            image:
              src: linaro-website/graphics/freepik__no-text__88628_1_xw7ibl.png
              alt: |
                image of a smart phone
              inferSize: true
            styles: not-prose lg:w-1/2 rounded-3xl h-auto object-contain
  - row: container_row
    sections:
      - component: faded_line
      - component: contact
        form_id: "7"
        formName: "solutions"
        content: |
          Partner with our Services team to take your client device to the next level!
        description: |
          <p class="text-linaro-yellow text-2xl text-left">Partner with our Services team to take your Client Device to the next level!</p>
        styles:
          card: w-4/5 prose-em:linaro-gradient-text prose-em:not-italic prose-headings:text-5xl prose-headings:my-3 prose-ul:text-xl prose-headings:leading-tight prose-p:text-3xl flex flex-col mx-auto justify-center w-full not-prose text-center mt-16
          form: rounded-3xl p-8 w-4/5 bg-[#222025] border-gray-500 border-[1px] text-sm max-w-full
          description: font-normal text-2xl text-left
          content: text-5xl leading-loose
---
