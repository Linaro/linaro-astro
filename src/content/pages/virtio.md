---
layout: ../../layouts/Flow.astro
slug: virtualization/virtio
title: QEMU
description: |
  Linaro is the QEMU expert
hero:
  title: >
    <span class="text-linaro-yellow">VIRTIO</span> accelerates consolidation of ECUs
  background_image: linaro-website/graphics/blurred-motion-shiny-luxury-illuminated-night-drive-generative-ai_1_1_pkecvs.png
  description: Into a single high-performance processor running virtual machinesSeparating infotainment, ADAS, and instrument clusters securely and efficiently.
  doubleHero: true
  title2: >
    <span class="text-linaro-yellow">VIRTIO</span> supports modular hypervisor architectures
  description2: Enabling secure app domains, test automation, and efficient resource sharing.
  background_image2: linaro-website/graphics/young-woman-using-her-smartphone-city_1_bokf6d.png

flow:
  - row: container_row
    styles:
      outer: purple-gradient-container-no-padding pt-0
    no_border: true
    sections:
      - component: text
        text_content: <span class="bg-linaro-gradient text-transparent bg-clip-text h-auto">We help bring</span><br>features to upstream earlier
        style: text-center max-w-4xl mx-auto text-4xl my-32
      - component: faded_line
      - component: text
        text_content: <span class="bg-linaro-gradient text-transparent bg-clip-text h-auto">We enable VIRTIO</span><br>over PCIe, MMIO & new transport layers
        style: text-center max-w-4xl mx-auto text-4xl my-32
      - component: faded_line
      - component: text
        text_content: <span class="bg-linaro-gradient text-transparent bg-clip-text h-auto">We develop & upstream</span><br>new VIRTIO device types
        style: text-center max-w-4xl mx-auto text-4xl my-32
      - component: faded_line
      - component: text
        text_content: <span class="bg-linaro-gradient text-transparent bg-clip-text h-auto">We provide</span><br>validated reference VIRTIO stacks that can be integrated into Linus-based IVI systems, Android partitions or embedded hypervisors
        style: text-center max-w-4xl mx-auto text-4xl my-32
      - component: faded_line
      - component: buttons
        buttons:
          - text: Contact Us to discuss your VIRTIO roadmap
            url: /contact
            style: linaro-gradient-button mt-16
  - row: container_row
    no_border: true
    styles:
      outer: bg-transparent z-0
    sections:
      - component: more_info
        styles:
          container: justify-around border-2 border-[#6B6B6B] rounded-3xl py-10
          card: max-w-md  text-center
        more_info:
          - title: Check out the most read blogs
            icon: blogs
            url: /blog?tags=iot-embedded
          - title: Watch presentations and webinars
            icon: webinar
            url: https://resources.linaro.org/en/themes/50057078-8f3b-4615-8f44-67c194e43b69
---
