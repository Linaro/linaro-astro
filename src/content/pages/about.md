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
          container: flex justify-around gap-12 prose-a:text-blue-300 prose-a:no-underline hover:prose-a:underline
          card: max-w-[60ch]
          card_title: text-yellow-500
        cards:
          - text: |
              At Linaro, we represent a global community of engineers, developers, and technology enthusiasts dedicated to pushing the boundaries of what's possible with Arm-based technologies. 

              Since 2010, we have played a pivotal role in shaping the Arm ecosystem, fostering collaboration, standardization, and optimization to drive innovation and accelerate product deployment.
          - title: Collaboration lies at the heart of everything we do at Linaro.
            text: We work closely with industry leaders, open-source communities, and technology partners to co-create, standardize, and optimize solutions that drive innovation and enable seamless integration across diverse platforms and environments.
  - row: container_row
    sections:
      - component: cards
        cards:
          - text: |
              *Linaro is about*
        styles:
          card: prose-em:linaro-gradient-text prose-p:text-3xl
          container: flex justify-center
      - component: cards
        styles:
          container: flex justify-around
        cards:
          - text: Expertise
          - text: Innovation
      - component: image_cards
        styles:
          container: flex justify-center
          image: w-[1000px] object-cover scale-125 max-h-[30rem] object-center
        cards:
          - image:
              src: linaro-website/graphics/Infinito
              alt: "Linaro is about expertise, innovation, open standards and community"
  - row: container_row
    sections:
      - component: cards
        styles:
          container: flex justify-center
          card_title: text-yellow-500
          card: text-center
        cards:
          - title: Ready to embark on a journey of innovation and  collaboration with Linaro?
            text: Contact us today to learn more about our services, solutions, and how we can help you achieve your technology goals. Together, let's shape the future of technology and drive positive change in the Arm ecosystem.
      - component: contact
        form_id: "6"
        styles:
          card: flex justify-center
---
