---
layout: ../../layouts/Flow.astro
slug: about
title: About
description: |
  At Linaro, we represent a global community of engineers, developers, and technology enthusiasts dedicated to pushing the boundaries of what's possible with Arm-based technologies. 
  Since 2010, we have played a pivotal role in shaping the Arm ecosystem, fostering collaboration, standardization, and optimization to drive innovation and accelerate product deployment.
flow:
  - row: container_row
    sections:
      - component: cards
        cards:
          - title: ""
            text: |
              <video autoplay loop  >
                  <source src="/NEW Linaro.mp4" type="video/mp4" > 
              </video>
  - row: container_row
    styles: purple-gradient-container
    sections:
      - component: cards
        styles:
          container: text-2xl
        cards:
          - type: text
            text: |
              At Linaro, we represent a global community of engineers, developers, and technology enthusiasts dedicated to pushing the boundaries of what's possible with Arm-based technologies. 

              Since 2010, we have played a pivotal role in shaping the Arm ecosystem, fostering collaboration, standardization, and optimization to drive innovation and accelerate product deployment.
            styles: w-full lg:w-1/2
          - type: text
            title: Collaboration lies at the heart of everything we do at Linaro.
            text: We work closely with industry leaders, open-source communities, and technology partners to co-create, standardize, and optimize solutions that drive innovation and enable seamless integration across diverse platforms and environments.
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
