---
layout: ../../layouts/Flow.astro
slug: projects/cloud-computing
title: Cloud Computing & Datacenter
description: |
  By verifying the projects build continuously, get tested and have binaries available for Arm server targets, the Arm ecosystem is able to depend on quality software for use in production environments.
hero:
  title: >
    Growing the Arm-based Servers Adoption
  background_image: linaro-website/graphics/data-center
  description: |
    By verifying the projects build continuously, get tested and have binaries available for Arm server targets, the Arm ecosystem is able to depend on quality software for use in production environments.
  button:
    text: Talk to our experts
    url: /contact
  styles:
    text_container: max-w-4xl
    title: max-w-xl
    description: max-w-80
    background: bg-right-top
    background_container: ml-[5%]
flow:
  - row: container_row
    title: Cloud Computing & Datacenter
    styles:
      outer: purple-gradient-container
    sections:
      - component: text
        text_content: Discover Linaro driven projects with the best in class software for Arm-based Servers
        style: text-center text-3xl mx-auto font-bold mb-24 max-w-[49ch]
      - component: cards
        styles:
          container: w-full mx-auto flex justify-around gap-y-16
          card: w-[55ch] p-6 md:p-12
        cards:
          - title: Big Data & Data Science
            text: Big Data and Data Science technologies play a vital role in enabling businesses to become more efficient and succesful. This project focuses on the engineering activities Linaro is driving in this area, focusing specifically on ARMv8 builds for Apache BigTop, Ambari, Spark and Hadoop.
            button:
              text: See More
              url: https://linaro.atlassian.net/wiki/spaces/BDDS/overview
          - title: System Ready Compliant Platform Collaboration
            text: This project focuses on Server Standardisation. This involves working on architectures such as SBSA and xBBR to enable simplified adoption of mainline builds on new server hardware.
            button:
              text: See More
              url: https://linaro.atlassian.net/wiki/spaces/SRCPC/overview
          - title: Enhance Software-Defined-Storage on Arm Servers
            text: There is a shift towards using all-flash storage solutions (SSD/NVME) as opposed to traditional HDD disks due to improvements in performance. The goal of this project is to collaborate with industry leaders in the Arm server ecosystem so that we can provide competitive and leading storage solutions with Arm servers.
            button:
              text: See More
              url: https://linaro.atlassian.net/wiki/spaces/STOR/overview
          - title: Deploy CCA on Arm platforms
            text: Confidential computing is a security and privacy-enhancing computational technique focused on protecting data in use. Arm’s solution for this is specified in the Confidential Computing Architecture (CCA) which only looks at hardware and system software. This project fills the gap by focusing on lower level bits, as well as the user space and higher level applications.
            button:
              text: See More
              url: https://linaro.atlassian.net/wiki/spaces/CCR/overview
  # - row: container_row
  #   sections:
  #     - component: membership
  #       form_id: "4"
  #       formName: "projects"
  #       description: We provide a collaborative platform for the different industry players within the Arm ecosystem to come together, discuss, agree upon, and implement solutions to shared problems. We offer various avenues for engaging in collaborative engineering.
  #       styles:
  #         card: max-w-[30ch] text-center flex flex-col items-center
  #       text: "Check the different possibilities to become a project member:"
  #       MemberManagementPanel:
  #         - title: Become a
  #           title_style: whitespace-nowrap
  #           name: Project Member
  #           description: Access one project
  #         - title: Become a
  #           title_style: whitespace-nowrap
  #           name: Group Member
  #           description: Access a group and enter its entire projects portfolio
  #         - title: Become a
  #           title_style: whitespace-nowrap
  #           name: Core Member
  #           description: Access all Linaro driven projects & groups
  #       style: max-w-xl prose-em:linaro-gradient-text prose-em:not-italic prose-headings:text-5xl prose-headings:my-3 prose-ul:text-xl prose-headings:leading-tight prose-p:text-3xl text-center
  - row: container_row
    title: Explore Related Resources
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
            url: /blog?tags=datacenter
---
