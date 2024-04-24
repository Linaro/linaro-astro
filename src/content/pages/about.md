---
layout: ../../layouts/Flow.astro
slug: about
title: Automotive, IoT & Edge
description: |
  Linaro collaborates with member companies to develop open standards and interfaces that accelerate and secure the deployment of Automotive, IoT, and Edge solutions. Join us in revolutionizing the way we drive innovation at the edge.
flow:
  - row: container_row
    sections:
      - component: videos
        styles
        videos:
          - src: linaro-website/videos/NEW_linaro
            title: ""

  - row: container_row
    title: From autonomous AI-driven features to software-defined vehicles
    styles: purple-gradient-container
    sections:
      - component: two_column
        container_styles: items-start justify-start gap-8 lg:gap-24 w-full mx-auto text-2xl
        columns:
          - type: text
            title: Project Stratos
            text_content: |
              There is a growing trend towards virtualization in areas other than the traditional server environment. The server enviroment is uniform in nature but as we move towards a richer ecosystem in automotive, medical and general mobile and IoT spaces, the rich array of hypervisors and SoCs become a problem. Project Stratos is working towards developing hypervisor agnostic Virtio interfaces and standards.
            styles: w-full lg:w-1/2
          - type: text
            title: Trusted Substrate
            text_content: Trusted Substrate is a BIOS that brings standards based secure booting and over-the-air (OTA) updates to the most trust demanding embedded computing projects such as automotive and robotics. The project aims to upstream all necessary technologies in multiple projects to enable Arm SystemReady compliance.
            styles: w-full lg:w-1/2

      - component: two_column
        container_styles: items-start justify-start gap-8 lg:gap-24 w-full mx-auto text-2xl
        columns:
          - type: text
            title: Oniro
            text_content: Oniro OS is a publicly available open source version of the HarmonyOS operating system. Linaro is working with Huawei to further the capabilities of the Oniro OS (around trusted-boot and over-the-air updates), create a collaborative, Oniro OS Open CI testing system, and onboard Linaro Oniro project members and their devices into the project.
            styles: w-full lg:w-1/2
          - type: text
            title: Heterogeneous Platform
            text_content: The Heterogeneous Platform project is focused on software that allows the different core types or OS types to work together and creates a standards based framework to make the system developers job easier. The majority of Automotive SOCs use multiple CPU core types. Adding M profile or R profile cores to a SOC with A profile cores, allows the A profile cores to focus on the Linux tasks it is designed for, while M/R cores can focus on low latency sense/control loops, isolated security, or increased safety.
            styles: w-full lg:w-1/2
  - row: container_row
    sections:
      - component: membership
        form_id: "4"
        description: We provide a collaborative platform for the different industry players within the Arm ecosystem to come together, discuss, agree upon, and implement solutions to shared problems. We offer various avenues for engaging in collaborative engineering.
        styles:
          card: max-w-[30ch] text-center flex flex-col items-center
        text: "Check the different possibilities to become a project member:"
        MemberManagementPanel:
          - title: Become a
            title_style: whitespace-nowrap
            name: Project Member
            description: Access one project
          - title: Become a
            title_style: whitespace-nowrap
            name: Group Member
            description: Access a group and enter its entire projects portfolio
          - title: Become a
            title_style: whitespace-nowrap
            name: Core & Club Member
            description: Access all Linaro driven projects & groups
        style: max-w-xl prose-em:linaro-gradient-text prose-em:not-italic prose-headings:text-5xl prose-headings:my-3 prose-ul:text-xl prose-headings:leading-tight prose-p:text-3xl text-center
---
