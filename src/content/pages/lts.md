---
layout: ../../layouts/Flow.astro
slug: solutions/lts
title: LTS
description: |
  The security and support solution for your Linux boot-to-kernel product needs levelled-up with advanced Continuous Integration (CI) pipelines and LAVA technology
hero:
  title: >
    Linaro Long-Term Support: Enhance the Longevity of your Linux Software
  background_image: linaro-website/graphics/bg-logo-2
  description: The security and support solution for your Linux boot-to-kernel product needs levelled-up with advanced Continuous Integration (CI) pipelines and LAVA technology
  button:
    text: Contact Us
    url: /contact
  styles:
    text_container: max-w-4xl
    title: max-w-3xl
    description: max-w-80 text-md sm:text-lg
    background_container: pt-[10%]
    background: bg-center
flow:
  - row: container_row
    title: Why you can trust Linaro LTS
    styles: purple-gradient-container
    sections:
      - component: cards
        styles:
          container: w-full mx-auto justify-around gap-28
          card: w-[35ch]
        cards:
          - title: Extensive Expertise
            text: Since 2010, our contributions span multiple areas, including Arm SoC, Power, Thermal, IO, LLVM, Android, RT, and more.
            icon: thumb_up
          - title: Proven Quality
            text: We conduct over a billion tests annually, ensuring the highest level of quality.
            icon: grade
          - title: Tailored LTS
            text: We deliver, maintain, test Long Term Support Linux Kernels for arm, arm64 and x86_64.
            icon: done_outline
          - title: Customization
            text: Out-of-tree patches, hardware inclusion in the Linaro-hosted test farm, uprevving of patches, additional test suites, and more.
            icon: grain
          - title: Collaboration
            text: Join a collaborative ecosystem where economies of scale and shared testing resources drive efficiency and cost-effectiveness.
            icon: zoom_out_map
  - row: container_row
    sections:
      - component: text
        text_content: Linaro’s world class open source engineering team, monitors and integrates the latest fixes and CVEs for the Linux Kernel, OP-TEE, Trusted Firmware-A and U-Boot.
        style: max-w-5xl text-3xl mx-auto
      - component: two_column
        container_styles: justify-start gap-8 lg:gap-24 max-w-5xl mx-auto items-center
        columns:
          - type: text
            text_content: |
              Rigorous testing protocols are designed to detect regressions early, safeguarding your software updates from potential upstream impacts.

              We offer customizable solutions tailored to your needs, including additional or custom test suites, out of tree source management, upstreaming services, and device-specific testing.
            styles: max-w-full lg:max-w-md
          - type: image
            styles: max-w-full lg:max-w-xl
            image:
              src: linaro-website/graphics/lts-graphic
              alt: Linaro LTS CI testing and release by firmware
              width: 1000
              height: 1000
  - row: container_row
    background_image: linaro-website/graphics/film-globe
    styles: pb-[36rem] mb-[-36rem] mt-[-12rem] bg-[center_top_50%] md:bg-[center_top_60%] lg:bg-[center_top_30%] xl:bg-[center_top_30%] bg-[length:200%] md:bg-[length:150%] xl:bg-[length:100%] bg-no-repeat
    no_border: true
    sections: []
  - row: container_row
    title: Enter a world of benefits
    styles: purple-gradient-container
    sections:
      - component: cards
        styles:
          container: justify-around
          card: max-w-[35ch] mx-12 prose-p:text-base
        cards:
          - title: Cost-Efficiency
            text: Save money by providing a cost-effective alternative to in-house LTS kernel and firmware management
          - title: Compliance
            text: Ensure compliance with software update mandates.
          - title: Solid Foundation
            text: Build your product on a robust and long-lasting kernel base.
          - title: Resource Optimization
            text: Free up resources for high-ROI areas of development.
          - title: Expertise
            text: Leverage Linaro's Linux Kernel expertise and community connections.
          - title: Informed Decision-Making
            text: Stay informed as issues are discovered and resolved.
  - row: container_row
    sections:
      - component: contact
        form_id: "6"
        description: We are here to support your journey towards long-term stability and success. Complete the form and one of our experts will get in touch.
        content: |
          Are you ready to redefine your Linux Kernel LTS experience? 

          ## Get your *full package* quote now.

        styles: max-w-4xl prose-em:linaro-gradient-text prose-em:not-italic prose-headings:text-5xl prose-headings:my-3 prose-ul:text-xl prose-headings:leading-tight prose-p:text-3xl text-center
---
