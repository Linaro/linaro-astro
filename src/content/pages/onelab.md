---
layout: ../../layouts/Flow.astro
slug: solutions/onelab
title: ONELab
description: |
  ONELab revolutionizes edge and IoT device interoperability testing. We help Silicon Vendors and Device Makers to conduct continuous interoperability tests among different Operating Systems and Cloud Services.
hero:
  title: >
    In an era where connectivity is king, compatibility is your kingdom
  background_image: linaro-website/graphics/onelab-bg
  description: |
    ONELab revolutionizes edge and IoT device interoperability testing. 

    We help Silicon Vendors and Device Makers to conduct continuous interoperability tests among different Operating Systems and Cloud Services.
  styles:
    text_container: max-w-6xl
    title: max-w-3xl mb-12
    description: max-w-2xl text-xl
    background: bg-right-top
    background_container: lg:p-[10%]
flow:
  - row: container_row
    title: ONELab is innovation done right
    styles:
      outer: purple-gradient-container
    sections:
      - component: graphic
        src: linaro-website/graphics/onelab-diagram
        mobile:
          src: linaro-website/graphics/onelab-diagram-mobile
          width: 1000
          height: 1000
        alt: diagram explaining how onelab innovation is done at each stage of the lifecycle
        width: 2000
        height: 2000
        svg: false
        accessible_version: |
          <ul>
            <li>Board Providers</li>
            <li>Board names</li>
            <li>SoCs</li>
            <li>Run continuous tets</li>
            <li>Issues track</li>
            <li>Compatibility framework</li>
            <li>Identify and address interoperability issues before they impact customers</li>
            <li>Share your devices' cloud-native capabilities with potential customers</li>
            <li>Allow users to collaborate on shared issues, such as enabling new hardware defaults in an OS</li>
            <li>Identify firmware changes in advance</li>
          </ul>

  - row: container_row
    sections:
      - component: cards
        styles:
          container: w-full mx-auto justify-around gap-28
          card: w-[35ch]
        cards:
          - title: Save Time & Resources
            text: Designed to streamline the testing and Arm SystemReady and PSA Certified certification process, making it effortless for users to verify hardware and software compatibility.
            icon: flash_on
          - title: Minimize Risks & Reduce Costs
            text: Identify issues early by addressing compatibility concerns throughout your development process, reducing the risk of costly setbacks later on.
            icon: thumb_up
          - title: Trust Granted
            text: Provide evidence that products are cloud-native edge-ready and ensures products work seamlessly together.
            icon: shield_person
  - row: container_row
    styles:
      outer: purple-gradient-container
    sections:
      - component: contact
        form_id: "7"
        description: Reach out to our team and level up your interoperability testing process
        content: |
          Solving the challenges of cloud-native edge computing requires collaboration among all contributing players.

          With ONELab you can focus on your core business, ensuring seamless compatibility with your partner products.
        styles:
          card: max-w-8xl prose-em:linaro-gradient-text prose-em:not-italic prose-headings:text-5xl prose-headings:my-3 prose-ul:text-xl prose-headings:leading-tight prose-p:text-2xl text-center flex flex-col lg:flex-row
  - row: container_row
    title: Supporting Partners
    sections:
      - component: logo_grid
        logos:
          - src: "linaro-website/logos/adlink"
            alt: ADLINK logo
          - src: "linaro-website/logos/arm"
            alt: Arm logo
          - src: "linaro-website/logos/amd-xilinx"
            alt: AMD Xilinx logo
          - src: "linaro-website/logos/bosch"
            alt: Bosch logo
          - src: "linaro-website/logos/openeuler"
            alt: OpenEuler logo
          - src: "linaro-website/logos/qualcomm"
            alt: Qualcomm logo
          - src: "linaro-website/logos/renesas"
            alt: Renesas logo
          - src: "linaro-website/logos/texas-instruments"
            alt: Texas Instruments logo
---
