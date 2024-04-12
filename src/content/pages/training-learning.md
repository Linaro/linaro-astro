---
layout: ../../layouts/Flow.astro
slug: /services/training
title: Training and Learning | Linaro
description: |
  With our expert knowledge of open source licenses, code reviews, and hands-on Linux training, we help companies eliminate risk, achieve compliance, and build strong relationships with open source communities. Our customized training courses cover a wide range of topics and can be tailored to meet the specific needs of your team. Gain the skills and expertise to embrace emerging technologies and best practices in the world of Linux and Arm technology.
hero:
  title: >
    Training & Learning
  background_image: linaro-website/graphics/working-remotely
  description: With our expert knowledge of open source licenses, code reviews, and hands-on Linux training, we help companies eliminate risk, achieve compliance, and build strong relationships with open source communities. Our customized training courses cover a wide range of topics and can be tailored to meet the specific needs of your team. Gain the skills and expertise to embrace emerging technologies and best practices in the world of Linux and Arm technology.
  button:
    text: Download our Catalogue
    url: /docs/Linaro_Training_Catalogue_February_2023.pdf
  styles:
    text_container: max-w-4xl
    title: max-w-md
    description: max-w-2xl
    background: bg-center
flow:
  - row: container_row
    title: Most Popular Courses
    styles: purple-gradient-container
    sections:
      - component: bullet_point
        styles:
          container: justify-around lg:justify-items-center
          card: lg:max-w-md
        bullet_point:
          - title: Introduction to Kernel Development
            sub_text:
              - text: Introduction to Devicetree
              - text: Pragmatic Linux driver development - Part 1
              - text: Pragmatic Linux driver development - Part 2
              - text: Symbolic debugging for Linux kernel and userspace
          - title: A Practical Introduction to OpenEmbedded/Yocto
            sub_text:
              - text: Introduction to Devicetree
              - text: Pragmatic Linux driver development - Part 1
              - text: Pragmatic Linux driver development - Part 2
              - text: Symbolic debugging for Linux kernel and userspace
          - title: Advanced Kernel Debugging
            sub_text:
              - text: Kernel debug stories
              - text: Tracing with ftrace
              - text: Debugging with eBPF
              - text: Using perf on Arm platforms
          - title: Building Custom Systems with OpenEmbedded/Yocto
            sub_text:
              - text: Introduction to OpenEmbedded and the Yocto Project
              - text: OpenEmbedded main concepts
              - text: Build workflow
              - text: OpenEmbedded advanced concepts
              - text: Debug the build
              - text: Toolchain
          - title: Trusted Firmware A for Armv8 systems
            sub_text:
              - text: ARMv8 exception model and boot
              - text: Secure monitor and power management
  - row: container_row
    sections:
      - component: text
        text_content: We have trained many engineers across key areas such as OP-TEE, Energy Aware Scheduler, Arm Trusted Firmware, Power Management and Open Source development to name but a few.
        style: text-center max-w-4xl mx-auto text-2xl
      - component: buttons
        buttons:
          - text: Contact Us
            url: /contact
            style: linaro-gradient-button
---
